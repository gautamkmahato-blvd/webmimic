"use client";

import { useState, useEffect, useRef, type CSSProperties } from "react";
import {
    GROUP_LABELS,
    GROUP_ORDER,
    groupClasses,
    splitVariants,
    TwGroup,
  } from "@/lib/design-editor/tailwind-classify";
  import {
    PROPERTY_DEFS,
    PropertyDef,
    readProperty,
    buildClass,
    VARIANT_OPTIONS,
    collectVariantStacks,
    getUnmappedClasses,
    formatVariantStack,
  } from "@/lib/design-editor/tailwind-properties";
import type { InspectableElement } from "@/lib/design-editor/preview-protocol";

interface InspectorPanelProps {
  selected: InspectableElement | null;
  onSetClasses: (classes: string[]) => void;
  onReplaceClass: (from: string, to: string) => void;
  onSetAttribute: (name: string, value: string | null) => void;
  onRenameAttribute: (oldName: string, newName: string) => void;
  onSetStyle: (property: string, value: string | null) => void;
  onRenameStyle: (oldProperty: string, newProperty: string) => void;
  onSetText: (text: string) => void;
  onRenameTag: (newTag: string) => void;
  onSelectBreadcrumb: (id: string) => void;
  onClearSelection: () => void;
}

const TAG_OPTIONS = [
  "div", "section", "article", "header", "footer", "main", "aside", "nav",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "p", "span", "a", "button",
  "ul", "ol", "li",
  "img", "figure",
  "strong", "em", "small", "code", "pre",
];

const INSPECTOR_SECTIONS = [
  "typography",
  "color",
  "spacing",
  "sizing",
  "layout",
  "border",
  "effects",
] as const;

const SECTION_TITLES: Record<(typeof INSPECTOR_SECTIONS)[number], string> = {
  typography: "Typography",
  color: "Color",
  spacing: "Spacing",
  sizing: "Size",
  layout: "Layout",
  border: "Border",
  effects: "Effects",
};

export function InspectorPanel({
  selected,
  onSetClasses,
  onReplaceClass,
  onSetAttribute,
  onRenameAttribute,
  onSetStyle,
  onRenameStyle,
  onSetText,
  onRenameTag,
  onSelectBreadcrumb,
  onClearSelection,
}: InspectorPanelProps) {
  const [activeVariants, setActiveVariants] = useState<string[]>([]);

  useEffect(() => {
    setActiveVariants([]);
  }, [selected?.id]);

  if (!selected) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-zinc-100 mb-4 flex items-center justify-center text-zinc-400">
          <CursorIcon />
        </div>
        <p className="text-sm font-medium text-zinc-700">No element selected</p>
        <p className="text-xs text-zinc-500 mt-1 max-w-[200px] leading-relaxed">
          Toggle Inspect mode and click anything in the preview to edit it.
        </p>
      </div>
    );
  }

  const grouped = groupClasses(selected.classes);
  const unmappedClasses = getUnmappedClasses(selected.classes);
  const variantStacksOnElement = collectVariantStacks(selected.classes);

  const propsBySection: Record<string, PropertyDef[]> = {};
  for (const def of PROPERTY_DEFS) {
    (propsBySection[def.section] ||= []).push(def);
  }

  return (
    <div className="h-full flex flex-col text-[13px]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-zinc-200 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0 flex-1">
          <TagPicker tag={selected.tag} onRename={onRenameTag} />
          <span className="text-zinc-400 text-xs truncate font-mono">{selected.id}</span>
        </div>
        <button
          onClick={onClearSelection}
          className="text-zinc-400 hover:text-zinc-700 w-6 h-6 flex items-center justify-center rounded hover:bg-zinc-100"
          title="Clear selection"
        >
          ×
        </button>
      </div>

      {/* Breadcrumb */}
      {selected.breadcrumb.length > 0 && (
        <div className="px-4 py-2 border-b border-zinc-200 bg-zinc-50/50 flex items-center gap-1 overflow-x-auto whitespace-nowrap">
          {selected.breadcrumb.map((c, i) => (
            <span key={c.id} className="flex items-center gap-1 shrink-0">
              {i > 0 && <span className="text-zinc-300">›</span>}
              <button
                onClick={() => onSelectBreadcrumb(c.id)}
                className={`font-mono text-[11px] px-1.5 py-0.5 rounded ${
                  c.id === selected.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-zinc-500 hover:bg-zinc-100"
                }`}
              >
                {c.tag}
              </button>
            </span>
          ))}
        </div>
      )}

      <VariantBar
        activeVariants={activeVariants}
        onChange={setActiveVariants}
        stacksOnElement={variantStacksOnElement}
      />

      <div className="flex-1 overflow-y-auto">
        {selected.textContent !== null && (
          <Section title="Text" defaultOpen>
            <TextField
              key={selected.id + ":text"}
              value={selected.textContent}
              multiline
              onCommit={onSetText}
            />
          </Section>
        )}

        {INSPECTOR_SECTIONS.map((section) => {
          const props = propsBySection[section] || [];
          if (!props.length) return null;
          return (
            <Section
              key={section}
              title={SECTION_TITLES[section]}
              defaultOpen
            >
              <div className="space-y-2.5">
                {props.map((prop) => (
                  <PropertyRow
                    key={prop.id}
                    prop={prop}
                    classes={selected.classes}
                    activeVariants={activeVariants}
                    onReplaceClass={onReplaceClass}
                    onSetClasses={onSetClasses}
                  />
                ))}
              </div>
            </Section>
          );
        })}

        {unmappedClasses.length > 0 && (
          <Section title="Unmapped classes" defaultOpen>
            <p className="text-[10px] text-zinc-400 mb-2 leading-relaxed">
              These classes aren&apos;t tied to a property control — edit or remove them directly.
            </p>
            <div className="flex flex-wrap gap-1">
              {unmappedClasses.map((cls) => (
                <ClassChip
                  key={cls}
                  cls={cls}
                  onReplace={(newCls) => onReplaceClass(cls, newCls)}
                  onRemove={() => onSetClasses(selected.classes.filter((c) => c !== cls))}
                />
              ))}
            </div>
          </Section>
        )}

        <Section title="All classes" defaultOpen>
          <ClassEditor
            allClasses={selected.classes}
            grouped={grouped}
            onSetClasses={onSetClasses}
            onReplaceClass={onReplaceClass}
          />
        </Section>

        <Section title="Attributes" defaultOpen={Object.keys(selected.attributes).length > 0}>
          <AttributeEditor
            attributes={selected.attributes}
            onSetAttribute={onSetAttribute}
            onRenameAttribute={onRenameAttribute}
          />
        </Section>

        <Section title="Inline styles" defaultOpen={selected.inlineStyles.length > 0}>
          <StyleEditor
            styles={selected.inlineStyles}
            onSetStyle={onSetStyle}
            onRenameStyle={onRenameStyle}
          />
        </Section>

        <Section title="Box">
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <Stat label="W" value={Math.round(selected.rect.width)} />
            <Stat label="H" value={Math.round(selected.rect.height)} />
            <Stat label="X" value={Math.round(selected.rect.x)} />
            <Stat label="Y" value={Math.round(selected.rect.y)} />
          </div>
        </Section>
      </div>
    </div>
  );
}

// ── Variant bar (Phase C) ───────────────────────────────────────────────────

function VariantBar({
  activeVariants,
  onChange,
  stacksOnElement,
}: {
  activeVariants: string[];
  onChange: (variants: string[]) => void;
  stacksOnElement: string[][];
}) {
  function toggleVariant(variant: string) {
    if (activeVariants.includes(variant)) {
      onChange(activeVariants.filter((v) => v !== variant));
    } else {
      onChange([...activeVariants, variant]);
    }
  }

  return (
    <div className="px-4 py-2.5 border-b border-zinc-200 bg-zinc-50/50">
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
          Variant
        </span>
        <span className="text-[10px] font-mono text-blue-600 truncate">
          {formatVariantStack(activeVariants)}
        </span>
      </div>

      <div className="flex flex-wrap gap-1 mb-2">
        <VariantChip
          label="Default"
          active={activeVariants.length === 0}
          onClick={() => onChange([])}
        />
        {stacksOnElement.map((stack) => (
          <VariantChip
            key={stack.join(":")}
            label={formatVariantStack(stack)}
            active={
              stack.length === activeVariants.length &&
              stack.every((v, i) => v === activeVariants[i])
            }
            onClick={() => onChange(stack)}
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-1">
        {VARIANT_OPTIONS.map((variant) => (
          <VariantChip
            key={variant}
            label={variant}
            active={activeVariants.includes(variant)}
            onClick={() => toggleVariant(variant)}
            small
          />
        ))}
      </div>
    </div>
  );
}

function VariantChip({
  label,
  active,
  onClick,
  small,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`font-mono rounded border transition-colors ${
        small ? "text-[10px] px-1.5 py-0.5" : "text-[11px] px-2 py-0.5"
      } ${
        active
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
      }`}
    >
      {label}
    </button>
  );
}

// ── Tag picker ──────────────────────────────────────────────────────────────

function TagPicker({ tag, onRename }: { tag: string; onRename: (newTag: string) => void }) {
  const [editing, setEditing] = useState(false);
  if (editing) {
    return (
      <select
        autoFocus
        value={tag}
        onChange={(e) => { onRename(e.target.value); setEditing(false); }}
        onBlur={() => setEditing(false)}
        className="font-mono text-[11px] bg-blue-50 text-blue-700 border border-blue-300 rounded px-1.5 py-0.5 outline-none"
      >
        {!TAG_OPTIONS.includes(tag) && <option value={tag}>{tag}</option>}
        {TAG_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
      </select>
    );
  }
  return (
    <button
      onClick={() => setEditing(true)}
      className="font-mono text-[11px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded hover:bg-blue-200"
      title="Change tag"
    >
      &lt;{tag}&gt;
    </button>
  );
}

// ── Property row ────────────────────────────────────────────────────────────

function PropertyRow({
  prop,
  classes,
  activeVariants,
  onReplaceClass,
  onSetClasses,
}: {
  prop: PropertyDef;
  classes: string[];
  activeVariants: string[];
  onReplaceClass: (from: string, to: string) => void;
  onSetClasses: (classes: string[]) => void;
}) {
  const current = readProperty(prop, classes, activeVariants);

  function setValue(newValue: string | null) {
    if (newValue === null) {
      if (current) onSetClasses(classes.filter((c) => c !== current.fullClass));
      return;
    }
    const newClass = buildClass(prop, newValue, activeVariants);
    if (!newClass) return;
    if (current) {
      onReplaceClass(current.fullClass, newClass);
    } else {
      onSetClasses([...classes, newClass]);
    }
  }

  return (
    <div className="grid grid-cols-[88px_1fr] gap-2 items-center">
      <label className="text-[11px] text-zinc-500">{prop.label}</label>
      <div>
        {prop.control === "select" && (
          <SelectControl prop={prop} value={current?.value || ""} onChange={setValue} />
        )}
        {prop.control === "color" && (
          <ColorControl prop={prop} value={current?.value || ""} onChange={setValue} />
        )}
        {prop.control === "toggle" && (
          <ToggleControl active={current !== null} onChange={(on) => setValue(on ? prop.exact![0] : null)} />
        )}
      </div>
    </div>
  );
}

function SelectControl({
  prop,
  value,
  onChange,
}: {
  prop: PropertyDef;
  value: string;
  onChange: (v: string | null) => void;
}) {
  const [customOpen, setCustomOpen] = useState(false);
  const [customDraft, setCustomDraft] = useState("");
  const isDefaultToken = value === "__default__";
  const isNegative = !isDefaultToken && value.startsWith("-");
  const absValue = isNegative ? value.slice(1) : value;
  const isArbitrary = absValue.startsWith("[") && absValue.endsWith("]");
  const knownValue =
    isDefaultToken ||
    (!isArbitrary && prop.options?.some((o) => o.value === absValue));
  const canCustom = Boolean(prop.arbitraryFormat);

  function commitCustom(raw: string) {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const wrapped = trimmed.startsWith("[") && trimmed.endsWith("]")
      ? trimmed
      : `[${trimmed}]`;
    onChange(isNegative ? `-${wrapped}` : wrapped);
    setCustomOpen(false);
  }

  return (
    <div className="space-y-1">
      <select
        value={
          customOpen
            ? "__custom__"
            : isDefaultToken
              ? "__default__"
              : knownValue
                ? absValue
                : isArbitrary
                  ? "__arbitrary__"
                  : isNegative
                    ? absValue
                    : ""
        }
        onChange={(e) => {
          const v = e.target.value;
          if (v === "__clear__") { onChange(null); setCustomOpen(false); return; }
          if (v === "__custom__") {
            setCustomDraft(isArbitrary ? absValue.slice(1, -1) : "");
            setCustomOpen(true);
            return;
          }
          if (v === "__arbitrary__") return;
          if (v === "__default__") { onChange("__default__"); setCustomOpen(false); return; }
          onChange(isNegative ? `-${v}` : v);
          setCustomOpen(false);
        }}
        className="w-full text-[11px] px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400 bg-white"
      >
        <option value="">— not set —</option>
        {isArbitrary && !customOpen && <option value="__arbitrary__">{value}</option>}
        {isNegative && knownValue && !isDefaultToken && (
          <option value={absValue}>{value}</option>
        )}
        {prop.options?.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
        {canCustom && <option value="__custom__">Custom value…</option>}
        {value && <option value="__clear__">Remove</option>}
      </select>
      {(customOpen || (isArbitrary && canCustom)) && (
        <div className="flex gap-1">
          <input
            type="text"
            value={customOpen ? customDraft : isArbitrary ? absValue.slice(1, -1) : ""}
            onChange={(e) => {
              setCustomDraft(e.target.value);
              if (!customOpen) setCustomOpen(true);
            }}
            onBlur={() => {
              const raw = customOpen ? customDraft : (isArbitrary ? absValue.slice(1, -1) : "");
              if (raw.trim()) commitCustom(raw);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const raw = (e.target as HTMLInputElement).value;
                if (raw.trim()) commitCustom(raw);
              }
              if (e.key === "Escape") setCustomOpen(false);
            }}
            placeholder="e.g. 18px, 0.95, #c97b3c"
            className="flex-1 text-[11px] font-mono px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400"
          />
        </div>
      )}
    </div>
  );
}

const SWATCH_CHECKERBOARD =
  "linear-gradient(45deg,#ddd 25%,transparent 25%,transparent 75%,#ddd 75%,#ddd),linear-gradient(45deg,#ddd 25%,transparent 25%,transparent 75%,#ddd 75%,#ddd)";

function colorSwatchStyle(swatch?: string): CSSProperties {
  if (!swatch || swatch === "transparent") {
    return {
      backgroundColor: "transparent",
      backgroundImage: SWATCH_CHECKERBOARD,
      backgroundSize: "6px 6px",
      backgroundPosition: "0 0,3px 3px",
    };
  }
  return { backgroundColor: swatch };
}

function formatColorInput(raw: string): string {
  const t = raw.trim();
  if (!t) return "";
  if (t.startsWith("[") && t.endsWith("]")) return t;
  if (t.startsWith("#") || t.startsWith("rgb") || t.startsWith("hsl")) return `[${t}]`;
  return t;
}

function ColorControl({
  prop,
  value,
  onChange,
}: {
  prop: PropertyDef;
  value: string;
  onChange: (v: string | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const isArbitrary = value.startsWith("[") && value.endsWith("]");
  const arbitraryColor = isArbitrary ? value.slice(1, -1) : "";
  const opt = prop.options?.find((o) => o.value === value);
  const swatch = isArbitrary ? arbitraryColor : opt?.swatch || "";

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-1.5 py-1 border border-zinc-200 rounded hover:bg-zinc-50 text-left"
      >
        <span
          className="w-4 h-4 rounded border border-zinc-200 shrink-0"
          style={colorSwatchStyle(swatch)}
        />
        <span className="text-[11px] font-mono truncate flex-1">
          {value || "— not set —"}
        </span>
        <span className="text-zinc-400 text-[10px]">▾</span>
      </button>
      {open && (
        <>
          {/* Backdrop to capture outside clicks */}
          <div
            className="fixed inset-0 z-20"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 z-30 bg-white border border-zinc-200 rounded-lg shadow-xl p-2 w-[240px] max-h-[280px] overflow-y-auto">
            <div className="text-[10px] text-zinc-500 uppercase font-medium mb-1.5 px-1">Custom</div>
            <div className="flex gap-1 mb-2">
              <input
                type="color"
                value={arbitraryColor || "#000000"}
                onChange={(e) => onChange(`[${e.target.value}]`)}
                className="w-8 h-7 rounded border border-zinc-200 cursor-pointer p-0"
              />
              <input
                type="text"
                defaultValue={isArbitrary ? arbitraryColor : value.includes("/") ? value : ""}
                onBlur={(e) => {
                  const formatted = formatColorInput(e.target.value);
                  if (formatted) onChange(formatted);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const v = (e.target as HTMLInputElement).value;
                    const formatted = formatColorInput(v);
                    if (formatted) onChange(formatted);
                  }
                }}
                placeholder="#hex, white/60, blue-500"
                className="flex-1 text-[11px] font-mono px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400"
              />
            </div>
            <div className="text-[10px] text-zinc-500 uppercase font-medium mb-1.5 mt-2 px-1">Palette</div>
            <div className="grid grid-cols-6 gap-1">
              {prop.options?.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => { onChange(opt.value); setOpen(false); }}
                  title={opt.label}
                  className={`w-full aspect-square rounded border ${
                    value === opt.value ? "border-blue-500 ring-2 ring-blue-200" : "border-zinc-200"
                  }`}
                  style={colorSwatchStyle(opt.swatch)}
                />
              ))}
            </div>
            {value && (
              <button
                onClick={() => { onChange(null); setOpen(false); }}
                className="mt-2 w-full text-[11px] text-red-600 hover:bg-red-50 rounded py-1"
              >
                Remove
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

function ToggleControl({
  active,
  onChange,
}: {
  active: boolean;
  onChange: (on: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!active)}
      className={`w-9 h-5 rounded-full transition-colors relative ${
        active ? "bg-blue-500" : "bg-zinc-200"
      }`}
    >
      <span
        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
          active ? "translate-x-[18px]" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

// ── Class chip (click to edit) ──────────────────────────────────────────────

function ClassEditor({
  allClasses,
  grouped,
  onSetClasses,
  onReplaceClass,
}: {
  allClasses: string[];
  grouped: Record<TwGroup, string[]>;
  onSetClasses: (classes: string[]) => void;
  onReplaceClass: (from: string, to: string) => void;
}) {
  const [adding, setAdding] = useState("");

  function addClasses() {
    const toAdd = adding.split(/\s+/).filter(Boolean);
    if (!toAdd.length) return;
    onSetClasses(Array.from(new Set([...allClasses, ...toAdd])));
    setAdding("");
  }

  return (
    <div className="space-y-3">
      {GROUP_ORDER.map((group) => {
        const classes = grouped[group];
        if (!classes.length) return null;
        return (
          <div key={group}>
            <div className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 mb-1.5">
              {GROUP_LABELS[group]}
            </div>
            <div className="flex flex-wrap gap-1">
              {classes.map((cls) => (
                <ClassChip
                  key={cls}
                  cls={cls}
                  onReplace={(newCls) => onReplaceClass(cls, newCls)}
                  onRemove={() => onSetClasses(allClasses.filter((c) => c !== cls))}
                />
              ))}
            </div>
          </div>
        );
      })}

      <div className="pt-2 flex gap-1">
        <input
          value={adding}
          onChange={(e) => setAdding(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") addClasses(); }}
          placeholder="add classes (space separated)"
          className="flex-1 text-[11px] font-mono px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
        />
        <button
          onClick={addClasses}
          disabled={!adding.trim()}
          className="text-[11px] px-2.5 py-1 bg-zinc-900 text-white rounded font-medium hover:bg-zinc-700 disabled:opacity-30"
        >
          Add
        </button>
      </div>
    </div>
  );
}

function ClassChip({
  cls,
  onReplace,
  onRemove,
}: {
  cls: string;
  onReplace: (newCls: string) => void;
  onRemove: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(cls);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setDraft(cls), [cls]);
  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  function commit() {
    setEditing(false);
    const next = draft.trim();
    if (!next || next === cls) { setDraft(cls); return; }
    onReplace(next);
  }

  if (editing) {
    return (
      <input
        ref={inputRef}
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") { setDraft(cls); setEditing(false); }
        }}
        className="text-[11px] font-mono px-2 py-0.5 border border-blue-400 rounded outline-none bg-white"
        style={{ width: `${Math.max(draft.length, 6) + 2}ch` }}
      />
    );
  }

  const { variants, core } = splitVariants(cls);
  return (
    <span className="group inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 hover:bg-zinc-200 transition-colors text-[11px] font-mono">
      <button onClick={() => setEditing(true)} className="flex items-center gap-1" title="Click to edit">
        {variants.length > 0 && <span className="text-blue-600">{variants.join(":")}:</span>}
        <span>{core}</span>
      </button>
      <button
        onClick={onRemove}
        className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100"
        title="Remove"
      >
        ×
      </button>
    </span>
  );
}

// ── Attributes / styles ─────────────────────────────────────────────────────

function AttributeEditor({
  attributes,
  onSetAttribute,
  onRenameAttribute,
}: {
  attributes: Record<string, string>;
  onSetAttribute: (name: string, value: string | null) => void;
  onRenameAttribute: (oldName: string, newName: string) => void;
}) {
  const [newAttr, setNewAttr] = useState({ name: "", value: "" });
  const entries = Object.entries(attributes);

  return (
    <div className="space-y-1.5">
      {!entries.length && <p className="text-[11px] text-zinc-400 italic">No attributes</p>}
      {entries.map(([name, value]) => (
        <KeyValueRow
          key={name}
          name={name}
          value={value}
          onChangeValue={(v) => onSetAttribute(name, v)}
          onChangeName={(newName) => onRenameAttribute(name, newName)}
          onRemove={() => onSetAttribute(name, null)}
        />
      ))}
      <div className="flex gap-1 pt-2">
        <input
          value={newAttr.name}
          onChange={(e) => setNewAttr({ ...newAttr, name: e.target.value })}
          placeholder="name"
          className="w-20 text-[11px] font-mono px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400"
        />
        <input
          value={newAttr.value}
          onChange={(e) => setNewAttr({ ...newAttr, value: e.target.value })}
          placeholder="value"
          onKeyDown={(e) => {
            if (e.key === "Enter" && newAttr.name) {
              onSetAttribute(newAttr.name, newAttr.value);
              setNewAttr({ name: "", value: "" });
            }
          }}
          className="flex-1 text-[11px] font-mono px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400"
        />
      </div>
    </div>
  );
}

function StyleEditor({
  styles,
  onSetStyle,
  onRenameStyle,
}: {
  styles: Array<{ property: string; value: string }>;
  onSetStyle: (property: string, value: string | null) => void;
  onRenameStyle: (oldProperty: string, newProperty: string) => void;
}) {
  const [newStyle, setNewStyle] = useState({ property: "", value: "" });

  return (
    <div className="space-y-1.5">
      {!styles.length && <p className="text-[11px] text-zinc-400 italic">No inline styles</p>}
      {styles.map(({ property, value }) => (
        <KeyValueRow
          key={property}
          name={property}
          value={value}
          onChangeValue={(v) => onSetStyle(property, v)}
          onChangeName={(newName) => onRenameStyle(property, newName)}
          onRemove={() => onSetStyle(property, null)}
        />
      ))}
      <div className="flex gap-1 pt-2">
        <input
          value={newStyle.property}
          onChange={(e) => setNewStyle({ ...newStyle, property: e.target.value })}
          placeholder="property"
          className="w-20 text-[11px] font-mono px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400"
        />
        <input
          value={newStyle.value}
          onChange={(e) => setNewStyle({ ...newStyle, value: e.target.value })}
          placeholder="value"
          onKeyDown={(e) => {
            if (e.key === "Enter" && newStyle.property) {
              onSetStyle(newStyle.property, newStyle.value);
              setNewStyle({ property: "", value: "" });
            }
          }}
          className="flex-1 text-[11px] font-mono px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400"
        />
      </div>
    </div>
  );
}

function KeyValueRow({
  name,
  value,
  onChangeName,
  onChangeValue,
  onRemove,
}: {
  name: string;
  value: string;
  onChangeName: (newName: string) => void;
  onChangeValue: (newValue: string) => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-1 group">
      <EditableField
        value={name}
        onCommit={(v) => v && v !== name && onChangeName(v)}
        className="w-20 text-[11px] font-mono px-1.5 py-0.5 border border-transparent hover:border-zinc-200 rounded outline-none focus:border-blue-400 focus:bg-white bg-zinc-50 text-zinc-600"
      />
      <EditableField
        value={value}
        onCommit={(v) => v !== value && onChangeValue(v)}
        className="flex-1 min-w-0 text-[11px] font-mono px-1.5 py-0.5 border border-transparent hover:border-zinc-200 rounded outline-none focus:border-blue-400 focus:bg-white bg-zinc-50"
      />
      <button
        onClick={onRemove}
        className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-500 w-5 h-5 flex items-center justify-center text-xs"
        title="Remove"
      >
        ×
      </button>
    </div>
  );
}

function EditableField({
  value,
  onCommit,
  className,
}: {
  value: string;
  onCommit: (newValue: string) => void;
  className?: string;
}) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);
  return (
    <input
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => onCommit(draft)}
      onKeyDown={(e) => {
        if (e.key === "Enter") (e.target as HTMLInputElement).blur();
        if (e.key === "Escape") setDraft(value);
      }}
      className={className}
    />
  );
}

function TextField({
  value,
  onCommit,
  multiline,
}: {
  value: string;
  onCommit: (v: string) => void;
  multiline?: boolean;
}) {
  const [draft, setDraft] = useState(value);
  useEffect(() => setDraft(value), [value]);

  if (multiline) {
    return (
      <div>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => draft !== value && onCommit(draft)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              (e.target as HTMLTextAreaElement).blur();
            }
            if (e.key === "Escape") setDraft(value);
          }}
          className="w-full min-h-[60px] resize-y text-[12px] px-2 py-1.5 border border-zinc-200 rounded outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100"
          placeholder="Empty"
        />
        <p className="text-[10px] text-zinc-400 mt-1">Cmd/Ctrl+Enter or blur to apply</p>
      </div>
    );
  }
  return (
    <input
      value={draft}
      onChange={(e) => setDraft(e.target.value)}
      onBlur={() => draft !== value && onCommit(draft)}
      onKeyDown={(e) => {
        if (e.key === "Enter") (e.target as HTMLInputElement).blur();
        if (e.key === "Escape") setDraft(value);
      }}
      className="w-full text-[11px] px-2 py-1 border border-zinc-200 rounded outline-none focus:border-blue-400 bg-white"
    />
  );
}

function Section({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-zinc-50 group"
      >
        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-zinc-700">
          {title}
        </span>
        <span className={`text-zinc-400 transition-transform ${open ? "rotate-90" : ""}`}>›</span>
      </button>
      {open && <div className="px-4 pb-3">{children}</div>}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2 px-2 py-1 bg-zinc-50 rounded">
      <span className="text-zinc-400 font-mono">{label}</span>
      <span className="font-mono text-zinc-700">{value}</span>
    </div>
  );
}

function CursorIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3l7 18 3-8 8-3z" />
    </svg>
  );
}