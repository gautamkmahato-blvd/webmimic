import { MESSAGE_NAMESPACE } from './types';

/**
 * Builds the full HTML document loaded into the sandboxed iframe via `srcdoc`.
 * Includes:
 *   - A document-level CSP (the iframe is null-origin from `sandbox`; this is
 *     a defense-in-depth measure against malicious model output).
 *   - Tailwind CDN so class-name edits made by the editor take effect at runtime.
 *   - The inspector agent: handles click/hover, draws overlays, applies
 *     parent-side commands via postMessage.
 *
 * `userHtml` is dropped inside <body>. It is rendered in a null-origin
 * iframe, so even script tags inside it cannot reach the parent app, cookies,
 * or storage. The agent never `eval`s any value coming from the parent.
 */
export function buildSrcdoc(userHtml: string): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' https://cdn.tailwindcss.com; style-src 'unsafe-inline' https:; img-src https: data: blob:; font-src https: data:; connect-src 'none'; frame-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none';">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    html, body { margin: 0; }
    /* Editor-internal overlay elements. */
    .__de_overlay { position: absolute; pointer-events: none; box-sizing: border-box; z-index: 2147483646; }
    .__de_hover  { outline: 2px solid rgba(59,130,246,0.7); outline-offset: -2px; }
    .__de_select { outline: 2px solid rgba(16,185,129,0.95); outline-offset: -2px; }
    .__de_label  { position: absolute; top: -22px; left: 0; padding: 2px 6px; font: 600 10px/1 ui-sans-serif,system-ui,sans-serif; color: white; background: rgb(16,185,129); border-radius: 4px; white-space: nowrap; }
  </style>
</head>
<body>
${userHtml}
<script>${AGENT_JS}</script>
</body>
</html>`;
}

/**
 * Inspector agent. Runs inside the null-origin sandboxed iframe.
 *
 * Design choices:
 *   - Pure DOM, no frameworks (iframe has no module loader).
 *   - All commands from parent are referenced by an opaque `data-edit-id`
 *     attribute; no element references are ever serialized across the bridge.
 *   - Every outgoing message includes the namespace; every incoming message is
 *     validated against it before any DOM work is done.
 *   - Overlays are siblings of <body> children with very high z-index;
 *     pointer-events:none so they never swallow clicks.
 *   - The agent skips the <html>, <head>, <body>, <script>, <style>, and its
 *     own overlay nodes when assigning ids / walking the tree.
 *
 * The IIFE body is written without backticks so it can be embedded in the
 * template literal in buildSrcdoc above.
 */
const AGENT_JS = `
(function(){
  var NS = ${JSON.stringify(MESSAGE_NAMESPACE)};
  var nextId = 1;
  var selectedId = null;
  var hoverId = null;
  var hoverEl, selectEl, labelEl;
  var rafToken = 0;

  function isElement(n){ return n && n.nodeType === 1; }
  function isSkippable(el){
    if (!isElement(el)) return true;
    var t = el.tagName;
    if (t === 'HTML' || t === 'HEAD' || t === 'BODY' || t === 'SCRIPT' || t === 'STYLE' || t === 'META' || t === 'LINK' || t === 'TITLE') return true;
    if (el.classList && (el.classList.contains('__de_overlay') || el.classList.contains('__de_hover') || el.classList.contains('__de_select') || el.classList.contains('__de_label'))) return true;
    return false;
  }

  function ensureId(el){
    if (!el.getAttribute('data-edit-id')) {
      el.setAttribute('data-edit-id', 'e' + (nextId++));
    }
    return el.getAttribute('data-edit-id');
  }

  function byId(id){
    if (!id) return null;
    return document.querySelector('[data-edit-id="' + CSS.escape(id) + '"]');
  }

  function send(msg){
    msg.ns = NS;
    try { parent.postMessage(msg, '*'); } catch(e) {}
  }

  function directText(el){
    var s = '';
    for (var i = 0; i < el.childNodes.length; i++){
      var c = el.childNodes[i];
      if (c.nodeType === 3) s += c.nodeValue;
    }
    return s.replace(/\\s+/g, ' ').trim();
  }

  function buildTree(el, depth){
    if (!isElement(el) || isSkippable(el) || depth > 20) return null;
    ensureId(el);
    var node = {
      id: el.getAttribute('data-edit-id'),
      tag: el.tagName.toLowerCase(),
      preview: directText(el).slice(0, 40) || (el.getAttribute('class') || ''),
      children: []
    };
    var count = 0;
    for (var i = 0; i < el.children.length && count < 200; i++){
      var sub = buildTree(el.children[i], depth + 1);
      if (sub) { node.children.push(sub); count++; }
    }
    return node;
  }

  function buildSelectionPayload(el){
    ensureId(el);
    var rect = el.getBoundingClientRect();
    var cs = getComputedStyle(el);
    var attrs = [];
    for (var i = 0; i < el.attributes.length; i++){
      var a = el.attributes[i];
      if (a.name === 'data-edit-id') continue;
      attrs.push({ name: a.name, value: a.value });
    }
    return {
      id: el.getAttribute('data-edit-id'),
      tag: el.tagName.toLowerCase(),
      className: el.getAttribute('class') || '',
      inlineStyle: el.getAttribute('style') || '',
      attrs: attrs,
      text: directText(el),
      rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
      computed: {
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        padding: cs.padding,
        margin: cs.margin,
        display: cs.display,
        width: cs.width,
        height: cs.height,
        borderRadius: cs.borderRadius
      }
    };
  }

  function makeOverlay(extraClass){
    var d = document.createElement('div');
    d.className = '__de_overlay ' + extraClass;
    document.body.appendChild(d);
    return d;
  }

  function positionOverlay(overlay, el){
    if (!overlay || !el || !document.body.contains(el)) {
      if (overlay) overlay.style.display = 'none';
      return;
    }
    var r = el.getBoundingClientRect();
    overlay.style.display = 'block';
    overlay.style.transform = 'translate(' + (r.left + scrollX) + 'px,' + (r.top + scrollY) + 'px)';
    overlay.style.width = r.width + 'px';
    overlay.style.height = r.height + 'px';
  }

  function schedulePosition(){
    if (rafToken) return;
    rafToken = requestAnimationFrame(function(){
      rafToken = 0;
      positionOverlay(hoverEl, byId(hoverId));
      positionOverlay(selectEl, byId(selectedId));
      if (labelEl) {
        var sel = byId(selectedId);
        if (sel) {
          labelEl.textContent = sel.tagName.toLowerCase();
          labelEl.style.display = 'block';
        } else {
          labelEl.style.display = 'none';
        }
      }
    });
  }

  function setHover(el){
    var id = el ? ensureId(el) : null;
    if (id === hoverId) { schedulePosition(); return; }
    hoverId = id;
    schedulePosition();
  }

  function setSelected(el){
    var id = el ? ensureId(el) : null;
    selectedId = id;
    schedulePosition();
    if (!el) { send({ type: 'agent:selected', payload: null }); return; }
    send({ type: 'agent:selected', payload: buildSelectionPayload(el) });
  }

  // ─── Event wiring ───────────────────────────────────────────
  document.addEventListener('mouseover', function(e){
    var t = e.target;
    while (t && isSkippable(t)) t = t.parentElement;
    setHover(t);
  });
  document.addEventListener('mouseout', function(e){
    if (!e.relatedTarget) setHover(null);
  });
  document.addEventListener('click', function(e){
    var t = e.target;
    while (t && isSkippable(t)) t = t.parentElement;
    if (!t) return;
    e.preventDefault();
    e.stopPropagation();
    setSelected(t);
  }, true);
  // Suppress navigations inside the preview (the sandbox would block them
  // anyway but we want the editor to feel native).
  document.addEventListener('submit', function(e){ e.preventDefault(); }, true);

  window.addEventListener('scroll', schedulePosition, true);
  window.addEventListener('resize', schedulePosition);

  // ─── Inbound commands ───────────────────────────────────────
  window.addEventListener('message', function(e){
    var msg = e.data;
    if (!msg || typeof msg !== 'object' || msg.ns !== NS) return;
    switch (msg.type) {
      case 'host:select': {
        var el = byId(msg.id);
        setSelected(el || null);
        break;
      }
      case 'host:setClass': {
        var el2 = byId(msg.id);
        if (el2) { el2.setAttribute('class', String(msg.value || '')); refreshIfSelected(msg.id); }
        break;
      }
      case 'host:setStyle': {
        var el3 = byId(msg.id);
        if (el3) {
          var prop = String(msg.prop || '').replace(/[^a-zA-Z0-9-]/g, '');
          if (prop) el3.style.setProperty(prop, String(msg.value || ''));
          refreshIfSelected(msg.id);
        }
        break;
      }
      case 'host:setText': {
        var el4 = byId(msg.id);
        if (el4) {
          // Replace text-only content (preserve element children).
          var hadElementChild = false;
          for (var i = 0; i < el4.childNodes.length; i++) if (el4.childNodes[i].nodeType === 1) { hadElementChild = true; break; }
          if (hadElementChild) {
            // Replace first text node only; leave element children alone.
            var replaced = false;
            for (var j = 0; j < el4.childNodes.length; j++){
              var n = el4.childNodes[j];
              if (n.nodeType === 3) { n.nodeValue = String(msg.value || ''); replaced = true; break; }
            }
            if (!replaced) el4.appendChild(document.createTextNode(String(msg.value || '')));
          } else {
            el4.textContent = String(msg.value || '');
          }
          refreshIfSelected(msg.id);
        }
        break;
      }
      case 'host:setAttr': {
        var el5 = byId(msg.id);
        if (el5) {
          var name = String(msg.name || '').toLowerCase();
          // Block dangerous attributes from the parent UI too — belt and braces.
          if (!/^[a-z][a-z0-9-]*$/.test(name)) break;
          if (name === 'on' || name.indexOf('on') === 0) break;
          if (name === 'data-edit-id') break;
          el5.setAttribute(name, String(msg.value || ''));
          refreshIfSelected(msg.id);
        }
        break;
      }
      case 'host:delete': {
        var el6 = byId(msg.id);
        if (el6 && el6.parentElement) {
          el6.parentElement.removeChild(el6);
          if (selectedId === msg.id) setSelected(null);
        }
        break;
      }
      case 'host:getHTML': {
        send({ type: 'agent:html', html: serializeHtml() });
        break;
      }
      case 'host:setHTML': {
        // Used by undo/redo. The supplied HTML originated from this same
        // serializer, so re-parsing it is safe (the sandbox neutralizes any
        // injected script anyway).
        var holder = document.createElement('div');
        holder.innerHTML = String(msg.html || '');
        var body = document.body;
        // Remove existing user content (everything except overlays).
        var i2 = body.childNodes.length;
        while (i2--) {
          var ch = body.childNodes[i2];
          if (ch === hoverEl || ch === selectEl || ch === labelEl) continue;
          if (ch.nodeType === 1 && ch.tagName === 'SCRIPT') continue;
          body.removeChild(ch);
        }
        while (holder.firstChild) body.insertBefore(holder.firstChild, hoverEl || null);
        ensureAllIds();
        setSelected(null);
        sendTree();
        break;
      }
      case 'host:requestTree': {
        sendTree();
        break;
      }
    }
  });

  function refreshIfSelected(id){
    if (id === selectedId) {
      var el = byId(id);
      if (el) send({ type: 'agent:selected', payload: buildSelectionPayload(el) });
    }
    send({ type: 'agent:mutated', id: id });
    schedulePosition();
    sendTree();
  }

  function ensureAllIds(){
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT, null);
    var n;
    while ((n = walker.nextNode())) {
      if (isSkippable(n)) continue;
      ensureId(n);
    }
  }

  function sendTree(){
    var root = document.body;
    var trees = [];
    for (var i = 0; i < root.children.length; i++){
      var t = buildTree(root.children[i], 0);
      if (t) trees.push(t);
    }
    send({ type: 'agent:tree', tree: { id: '__root', tag: 'body', preview: '', children: trees } });
  }

  function serializeHtml(){
    // Clone body and strip editor-internal nodes / attributes.
    var clone = document.body.cloneNode(true);
    var overlays = clone.querySelectorAll('.__de_overlay');
    for (var i = 0; i < overlays.length; i++) overlays[i].parentNode.removeChild(overlays[i]);
    var ided = clone.querySelectorAll('[data-edit-id]');
    for (var j = 0; j < ided.length; j++) ided[j].removeAttribute('data-edit-id');
    var scripts = clone.querySelectorAll('script');
    for (var k = 0; k < scripts.length; k++) scripts[k].parentNode.removeChild(scripts[k]);
    return clone.innerHTML.trim();
  }

  // ─── Boot ───────────────────────────────────────────────────
  function boot(){
    hoverEl  = makeOverlay('__de_hover');
    selectEl = makeOverlay('__de_select');
    labelEl  = document.createElement('div');
    labelEl.className = '__de_label';
    selectEl.appendChild(labelEl);
    ensureAllIds();
    sendTree();
    send({ type: 'agent:ready' });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
`;
