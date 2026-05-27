/**
 * Wire protocol between the parent app and the iframe preview agent.
 * All cross-frame messages flow through window.postMessage and are typed here.
 */

export type ElementId = string;

export interface ElementRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface InspectableElement {
  id: ElementId;
  tag: string;
  classes: string[];
  attributes: Record<string, string>;
  inlineStyles: Array<{ property: string; value: string }>;
  hasChildren: boolean;
  breadcrumb: Array<{ id: ElementId; tag: string }>;
  /**
   * Best-effort text of the first text node child. null if the element has
   * no text nodes at all. Non-null even when there are mixed children — we
   * edit the first text node and leave child elements untouched.
   */
  textContent: string | null;
  rect: ElementRect;
}

export type IframeToParent =
  | { type: "preview:ready" }
  | { type: "preview:height"; height: number }
  | { type: "preview:hover"; id: ElementId | null; rect: ElementRect | null }
  | { type: "preview:select"; element: InspectableElement | null }
  | { type: "preview:html-changed"; html: string }
  | { type: "preview:error"; message: string };

export type ParentToIframe =
  | { type: "editor:set-mode"; mode: "view" | "inspect" }
  | { type: "editor:select"; id: ElementId | null }
  | { type: "editor:set-classes"; id: ElementId; classes: string[] }
  | { type: "editor:replace-class"; id: ElementId; from: string; to: string }
  | { type: "editor:set-attribute"; id: ElementId; name: string; value: string | null }
  | { type: "editor:rename-attribute"; id: ElementId; oldName: string; newName: string }
  | { type: "editor:set-style"; id: ElementId; property: string; value: string | null }
  | { type: "editor:rename-style"; id: ElementId; oldProperty: string; newProperty: string }
  | { type: "editor:set-text"; id: ElementId; text: string }
  | { type: "editor:rename-tag"; id: ElementId; newTag: string }
  | { type: "editor:request-html" };

export const PREVIEW_ID_ATTR = "data-preview-id";