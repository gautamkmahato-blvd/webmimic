/**
 * postMessage protocol between the parent React app and the sandboxed iframe.
 * The iframe runs with `sandbox="allow-scripts"` (no `allow-same-origin`), so
 * window.parent.postMessage is the only communication channel.
 *
 * Naming: messages starting with `host:` flow Parent → Iframe.
 *         Messages starting with `agent:` flow Iframe → Parent.
 *
 * A shared MESSAGE_NAMESPACE field is included on every payload so postMessage
 * traffic from unrelated extensions / embedded widgets can be safely ignored.
 */

export const MESSAGE_NAMESPACE = 'design-editor/v1';

// Common fields embedded in every message.
interface Base {
  ns: typeof MESSAGE_NAMESPACE;
}

// Distributive Omit — preserves the discriminated union so callers can pass
// any one variant of HostToAgent to `send()` without including `ns`.
export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never;

// ─── Parent → Iframe ───────────────────────────────────────────────
export type HostToAgent =
  | (Base & { type: 'host:select'; id: string | null })
  | (Base & { type: 'host:setClass'; id: string; value: string })
  | (Base & { type: 'host:setStyle'; id: string; prop: string; value: string })
  | (Base & { type: 'host:setText'; id: string; value: string })
  | (Base & { type: 'host:setAttr'; id: string; name: string; value: string })
  | (Base & { type: 'host:delete'; id: string })
  | (Base & { type: 'host:getHTML' })
  | (Base & { type: 'host:setHTML'; html: string })
  | (Base & { type: 'host:requestTree' });

// ─── Iframe → Parent ───────────────────────────────────────────────
export interface TreeNode {
  id: string;
  tag: string;
  preview: string; // short label, e.g. text snippet or first class
  children: TreeNode[];
}

export interface SelectionPayload {
  id: string;
  tag: string;
  className: string;
  inlineStyle: string;
  attrs: Array<{ name: string; value: string }>;
  text: string; // direct text content, not descendants'
  rect: { x: number; y: number; width: number; height: number };
  computed: {
    color: string;
    backgroundColor: string;
    fontSize: string;
    fontWeight: string;
    padding: string;
    margin: string;
    display: string;
    width: string;
    height: string;
    borderRadius: string;
  };
}

export type AgentToHost =
  | (Base & { type: 'agent:ready' })
  | (Base & { type: 'agent:selected'; payload: SelectionPayload | null })
  | (Base & { type: 'agent:tree'; tree: TreeNode })
  | (Base & { type: 'agent:html'; html: string })
  | (Base & { type: 'agent:mutated'; id: string });
