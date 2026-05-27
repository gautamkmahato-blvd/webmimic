/**
 * The "agent" that runs INSIDE the preview iframe.
 * Embedded verbatim into the iframe srcDoc as a string.
 */

export const AGENT_SCRIPT = /* js */ `
(function () {
  var PREVIEW_ID_ATTR = "data-preview-id";
  var ID_COUNTER = 0;
  var mode = "view";
  var selectedId = null;
  var hoveredId = null;

  function send(msg) { window.parent.postMessage(msg, "*"); }
  function nextId() { ID_COUNTER += 1; return "el_" + ID_COUNTER; }

  function ensureId(el) {
    if (!el || el.nodeType !== 1) return null;
    var existing = el.getAttribute(PREVIEW_ID_ATTR);
    if (existing) return existing;
    var id = nextId();
    el.setAttribute(PREVIEW_ID_ATTR, id);
    return id;
  }

  function tagAll(root) {
    if (!root) return;
    ensureId(root);
    var all = root.querySelectorAll("*");
    for (var i = 0; i < all.length; i++) ensureId(all[i]);
  }

  function byId(id) {
    if (!id) return null;
    return document.querySelector("[" + PREVIEW_ID_ATTR + '="' + id + '"]');
  }

  function getRect(el) {
    if (!el) return null;
    var r = el.getBoundingClientRect();
    return { x: r.left + window.scrollX, y: r.top + window.scrollY, width: r.width, height: r.height };
  }

  function firstTextNode(el) {
    if (!el) return null;
    for (var i = 0; i < el.childNodes.length; i++) {
      if (el.childNodes[i].nodeType === 3) return el.childNodes[i];
    }
    return null;
  }

  function serializeElement(el) {
    if (!el) return null;
    var id = ensureId(el);
    var classes = [];
    if (el.classList) {
      for (var i = 0; i < el.classList.length; i++) classes.push(el.classList[i]);
    }
    var attrs = {};
    for (var j = 0; j < el.attributes.length; j++) {
      var a = el.attributes[j];
      if (a.name === "class" || a.name === PREVIEW_ID_ATTR || a.name === "style") continue;
      attrs[a.name] = a.value;
    }
    var inlineStyles = [];
    if (el.style && el.style.length) {
      for (var k = 0; k < el.style.length; k++) {
        var prop = el.style[k];
        inlineStyles.push({ property: prop, value: el.style.getPropertyValue(prop) });
      }
    }
    var hasChildren = el.children && el.children.length > 0;

    var crumbs = [];
    var cur = el;
    while (cur && cur.nodeType === 1 && cur !== document.body.parentNode) {
      crumbs.unshift({ id: ensureId(cur), tag: cur.tagName.toLowerCase() });
      cur = cur.parentElement;
    }

    // Surface text content if ANY text node exists (was: pure-text only).
    var tn = firstTextNode(el);
    var textContent = tn ? (tn.nodeValue || "") : null;

    return {
      id: id,
      tag: el.tagName.toLowerCase(),
      classes: classes,
      attributes: attrs,
      inlineStyles: inlineStyles,
      hasChildren: hasChildren,
      breadcrumb: crumbs,
      textContent: textContent,
      rect: getRect(el)
    };
  }

  // ── Overlay ───────────────────────────────────────────────────────────
  var overlayHost = null, hoverBox = null, selectBox = null;

  function ensureOverlay() {
    if (overlayHost) return;
    overlayHost = document.createElement("div");
    overlayHost.setAttribute("data-preview-overlay", "");
    overlayHost.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483646;contain:strict";
    document.documentElement.appendChild(overlayHost);

    hoverBox = document.createElement("div");
    hoverBox.style.cssText = "position:absolute;border:2px solid #2c8dff;background:rgba(44,141,255,0.08);pointer-events:none;display:none;box-sizing:border-box;transition:all 60ms ease-out";
    overlayHost.appendChild(hoverBox);

    selectBox = document.createElement("div");
    selectBox.style.cssText = "position:absolute;border:2px solid #0a66e0;outline:1px solid rgba(255,255,255,0.85);outline-offset:-3px;pointer-events:none;display:none;box-sizing:border-box";
    overlayHost.appendChild(selectBox);
  }

  function positionBox(box, el) {
    if (!el) { box.style.display = "none"; return; }
    var r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) { box.style.display = "none"; return; }
    box.style.display = "block";
    box.style.left = r.left + "px";
    box.style.top = r.top + "px";
    box.style.width = r.width + "px";
    box.style.height = r.height + "px";
  }

  function updateBoxes() {
    if (!overlayHost) return;
    positionBox(hoverBox, byId(hoveredId));
    positionBox(selectBox, byId(selectedId));
  }

  function isOverlayElement(el) {
    if (!el) return false;
    var n = el;
    while (n) {
      if (n.hasAttribute && n.hasAttribute("data-preview-overlay")) return true;
      n = n.parentNode;
    }
    return false;
  }

  function onMouseMove(e) {
    if (mode !== "inspect") return;
    var el = document.elementFromPoint(e.clientX, e.clientY);
    if (isOverlayElement(el)) return;
    var id = el ? ensureId(el) : null;
    if (id !== hoveredId) {
      hoveredId = id;
      updateBoxes();
      send({ type: "preview:hover", id: id, rect: el ? getRect(el) : null });
    }
  }

  function onMouseLeave() {
    if (mode !== "inspect") return;
    if (hoveredId !== null) {
      hoveredId = null;
      updateBoxes();
      send({ type: "preview:hover", id: null, rect: null });
    }
  }

  function onClick(e) {
    if (mode !== "inspect") return;
    var el = document.elementFromPoint(e.clientX, e.clientY);
    if (isOverlayElement(el)) return;
    e.preventDefault();
    e.stopPropagation();
    if (!el) return;
    var id = ensureId(el);
    selectedId = id;
    updateBoxes();
    send({ type: "preview:select", element: serializeElement(el) });
  }

  function onScrollOrResize() { updateBoxes(); }

  // ── Edits ─────────────────────────────────────────────────────────────
  function renameTag(el, newTag) {
    if (!el || !newTag) return el;
    if (el.tagName.toLowerCase() === newTag.toLowerCase()) return el;
    var newEl = document.createElement(newTag);
    for (var i = 0; i < el.attributes.length; i++) {
      var a = el.attributes[i];
      newEl.setAttribute(a.name, a.value);
    }
    while (el.firstChild) newEl.appendChild(el.firstChild);
    if (el.parentNode) el.parentNode.replaceChild(newEl, el);
    return newEl;
  }

  function applyEdit(msg) {
    var el = byId(msg.id);
    if (!el) return;

    if (msg.type === "editor:set-classes") {
      if (!msg.classes.length) el.removeAttribute("class");
      else el.setAttribute("class", msg.classes.join(" "));
    } else if (msg.type === "editor:replace-class") {
      var cls = [];
      var found = false;
      for (var i = 0; i < el.classList.length; i++) cls.push(el.classList[i]);
      for (var j = 0; j < cls.length; j++) {
        if (cls[j] === msg.from) { cls[j] = msg.to; found = true; }
      }
      if (!found && msg.to) cls.push(msg.to);
      var seen = {};
      var out = [];
      for (var k = 0; k < cls.length; k++) {
        var c = (cls[k] || "").trim();
        if (!c || seen[c]) continue;
        seen[c] = 1;
        out.push(c);
      }
      if (!out.length) el.removeAttribute("class");
      else el.setAttribute("class", out.join(" "));
    } else if (msg.type === "editor:set-attribute") {
      if (msg.value === null) el.removeAttribute(msg.name);
      else el.setAttribute(msg.name, msg.value);
    } else if (msg.type === "editor:rename-attribute") {
      if (msg.oldName === msg.newName || !msg.newName) return;
      var val = el.getAttribute(msg.oldName);
      if (val !== null) {
        el.removeAttribute(msg.oldName);
        el.setAttribute(msg.newName, val);
      }
    } else if (msg.type === "editor:set-style") {
      if (msg.value === null || msg.value === "") el.style.removeProperty(msg.property);
      else el.style.setProperty(msg.property, msg.value);
    } else if (msg.type === "editor:rename-style") {
      if (msg.oldProperty === msg.newProperty || !msg.newProperty) return;
      var existing = el.style.getPropertyValue(msg.oldProperty);
      if (existing) {
        el.style.removeProperty(msg.oldProperty);
        el.style.setProperty(msg.newProperty, existing);
      }
    } else if (msg.type === "editor:set-text") {
      var tn = firstTextNode(el);
      if (tn) tn.nodeValue = msg.text;
      else if (el.childNodes.length === 0) el.appendChild(document.createTextNode(msg.text));
      else el.insertBefore(document.createTextNode(msg.text), el.firstChild);
    } else if (msg.type === "editor:rename-tag") {
      // Replaces the element in the DOM. Preview id is copied via attributes loop.
      renameTag(el, msg.newTag);
    }

    if (selectedId) {
      send({ type: "preview:select", element: serializeElement(byId(selectedId)) });
    }
    updateBoxes();
    sendCurrentHtml();
    postHeight();
  }

  function onMessage(e) {
    var data = e.data;
    if (!data || typeof data !== "object") return;
    if (data.type === "editor:set-mode") {
      mode = data.mode;
      document.documentElement.style.cursor = mode === "inspect" ? "crosshair" : "";
      if (mode !== "inspect") {
        hoveredId = null;
        updateBoxes();
      }
    } else if (data.type === "editor:select") {
      selectedId = data.id;
      var el = byId(selectedId);
      updateBoxes();
      send({ type: "preview:select", element: el ? serializeElement(el) : null });
    } else if (data.type === "editor:request-html") {
      sendCurrentHtml();
    } else if (
      data.type === "editor:set-classes" ||
      data.type === "editor:replace-class" ||
      data.type === "editor:set-attribute" ||
      data.type === "editor:rename-attribute" ||
      data.type === "editor:set-style" ||
      data.type === "editor:rename-style" ||
      data.type === "editor:set-text" ||
      data.type === "editor:rename-tag"
    ) {
      applyEdit(data);
    }
  }

  function sendCurrentHtml() {
    var clone = document.body.cloneNode(true);
    var tagged = clone.querySelectorAll("[" + PREVIEW_ID_ATTR + "]");
    for (var i = 0; i < tagged.length; i++) tagged[i].removeAttribute(PREVIEW_ID_ATTR);
    var overlay = clone.querySelector("[data-preview-overlay]");
    if (overlay) overlay.parentNode.removeChild(overlay);
    send({ type: "preview:html-changed", html: clone.innerHTML });
  }

  function postHeight() {
    var h = document.body ? document.body.scrollHeight : 0;
    send({ type: "preview:height", height: h });
  }

  function boot() {
    tagAll(document.body);
    ensureOverlay();

    document.addEventListener("mousemove", onMouseMove, true);
    document.addEventListener("mouseleave", onMouseLeave, true);
    document.addEventListener("click", onClick, true);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("message", onMessage);

    if (typeof MutationObserver !== "undefined") {
      var heightTimer = null;
      function schedulePostHeight() {
        if (heightTimer) clearTimeout(heightTimer);
        heightTimer = setTimeout(function () {
          heightTimer = null;
          postHeight();
        }, 80);
      }

      var mo = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var added = mutations[i].addedNodes;
          for (var j = 0; j < added.length; j++) {
            if (added[j].nodeType === 1) tagAll(added[j]);
          }
        }
        updateBoxes();
        schedulePostHeight();
      });
      mo.observe(document.body, { childList: true, subtree: true, attributes: true, characterData: true });
    }

    send({ type: "preview:ready" });
    postHeight();
    setTimeout(postHeight, 100);
    setTimeout(postHeight, 500);
    setTimeout(postHeight, 1200);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
`;