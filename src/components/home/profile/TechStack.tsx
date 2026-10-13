import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { createPortal } from "react-dom";
import { techStack, experienceLevel, proficiencyOf } from "../../../data/techStack";
import type { TechStackItem } from "../../../data/techStack";
import "./ProfileSection.css";
import "./TechStack.css";
import "../../shared/Overlay.css";

const RING_RADIUS = 28.5;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

interface TechStackProps {
  timeline?: number;
  compact?: boolean;
  showTitle?: boolean;
  items?: TechStackItem[];
  mode?: "skills" | "project";
}

function TechStack({ timeline, compact = false, showTitle = true, items = techStack, mode = compact ? "project" : "skills" }: TechStackProps) {
  const interactive = mode === "skills";
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const group = useRef<HTMLDivElement>(null);
  const sequence = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const anchor = useRef<HTMLButtonElement | null>(null);
  const paused = useRef(false);
  const offset = useRef(0);
  const keyboardInput = useRef(false);
  const restoringFocus = useRef(false);
  const selectionOpen = useRef(false);
  const [selected, setSelected] = useState<TechStackItem | null>(null);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [copies, setCopies] = useState(1);
  const [position, setPosition] = useState({ left: 8, top: 0, tip: 24 });
  const id = useId();
  const [mobile, setMobile] = useState(() => window.matchMedia("(max-width: 1000px)").matches);
  const restoreAnchorFocus = useCallback(() => {
    restoringFocus.current = true;
    try { anchor.current?.focus({ preventScroll: true }); }
    finally { restoringFocus.current = false; }
  }, []);

  useEffect(() => {
    if (!interactive) return;
    let releaseFrame = 0;
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Tab") keyboardInput.current = true;
    };
    const pointer = () => { keyboardInput.current = false; };
    const release = () => {
      cancelAnimationFrame(releaseFrame);
      // Run after the click has selected/toggled its icon. Cancelled pointer
      // gestures must also release the temporary pause without opening details.
      releaseFrame = requestAnimationFrame(() => {
        if (!selectionOpen.current && !keyboardInput.current) paused.current = false;
      });
    };
    document.addEventListener("keydown", keyboard, true);
    document.addEventListener("pointerdown", pointer, true);
    document.addEventListener("pointerup", release);
    document.addEventListener("pointercancel", release);
    return () => {
      cancelAnimationFrame(releaseFrame);
      document.removeEventListener("keydown", keyboard, true);
      document.removeEventListener("pointerdown", pointer, true);
      document.removeEventListener("pointerup", release);
      document.removeEventListener("pointercancel", release);
    };
  }, [interactive]);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 1000px)");
    const update = () => setMobile(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // One clock and one measured period, independent of browser and item count.
  useEffect(() => {
    const container = viewport.current;
    const row = track.current;
    const period = group.current;
    const singleSequence = sequence.current;
    if (!container || !row || !period || !singleSequence || !items.length) return;
    let width = 0;
    let measuredCopies = period.children.length;
    let needsMeasure = true;
    let previous = 0;
    let frame = 0;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const measure = () => {
      needsMeasure = false;
      const sequenceWidth = singleSequence.getBoundingClientRect().width;
      if (sequenceWidth <= 0) return;
      // Only the clipped layout viewport and ONE sequence determine repetition.
      // The repeated group's width is used solely as the animation period.
      const required = Math.max(1, Math.ceil(container.clientWidth / sequenceWidth));
      if (required !== measuredCopies) {
        measuredCopies = required;
        setCopies(current => current === required ? current : required);
      }
      width = period.getBoundingClientRect().width;
      if (width > 0 && offset.current >= width && !paused.current) {
        // Whole sequences are identical, so wrapping preserves the visual phase.
        offset.current %= width;
        row.style.transform = `translate3d(${-offset.current}px,0,0)`;
      }
    };
    // Measure/set state in our existing animation frame, not in the observer's
    // delivery cycle. Copy changes cannot affect the viewport or base sequence.
    const observer = new ResizeObserver(() => { needsMeasure = true; });
    observer.observe(container);
    observer.observe(period);
    observer.observe(singleSequence);
    const tick = (time: number) => {
      if (needsMeasure) measure();
      if (previous && !paused.current && !motion.matches && !document.hidden && width > 0) {
        offset.current = (offset.current + Math.min(time - previous, 50) * 0.028) % width;
        row.style.transform = `translate3d(${-offset.current}px,0,0)`;
      }
      previous = time;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); };
  }, [items]);

  useEffect(() => {
    if (!selected) return;
    const place = () => {
      const rect = anchor.current?.getBoundingClientRect();
      if (!rect) return;
      const width = Math.min(350, window.innerWidth - 16);
      const left = Math.max(8, Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 8));
      setPosition({ left, top: rect.bottom + 10, tip: rect.left + rect.width / 2 - left });
    };
    const close = () => { selectionOpen.current = false; paused.current = false; setSelected(null); setSelectedKey(null); };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !card.current?.contains(event.target) && !track.current?.contains(event.target)) close();
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") { close(); restoreAnchorFocus(); }
    };
    place();
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", key);
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", key);
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [selected, selectedKey, restoreAnchorFocus]);

  const choose = (tech: TechStackItem, key: string, button: HTMLButtonElement) => {
    if (key === selectedKey) {
      selectionOpen.current = false; paused.current = false; setSelected(null); setSelectedKey(null);
    } else {
      selectionOpen.current = true; paused.current = true; anchor.current = button; setSelected(tech); setSelectedKey(key);
    }
  };
  const details = selected && (
    <div ref={card} id={id} role="region" aria-label={`Kenntnisse: ${selected.name}`} className="tech-detail"
      style={{ "--tech-color": selected.color, "--tip": `${position.tip}px` } as CSSProperties}>
      <div className="tech-detail-heading">
        <img src={selected.icon} alt="" />
        <strong>{selected.name}</strong>
        <span className="tech-level">{proficiencyOf(selected) === undefined ? "Noch offen" : experienceLevel(proficiencyOf(selected)!)}</span>
        <button className="tech-close" aria-label="Details schließen" onClick={() => {
          selectionOpen.current = false; setSelected(null); setSelectedKey(null); restoreAnchorFocus(); paused.current = false;
        }}><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18" /></svg></button>
      </div>
      <p>{selected.description || "Eine persönliche Beschreibung wird noch ergänzt."}</p>
      {selected.skills?.length ? <div className="tech-chips">{selected.skills.map(skill => <span key={skill}>{skill}</span>)}</div> : <p className="tech-missing">Kenntnisse noch nicht hinterlegt.</p>}
    </div>
  );

  return <section className={`tech-stack ${timeline === undefined || timeline >= 6 ? "tech-stack-show" : "tech-stack-hidden"} tech-mode-${mode}`}>
    {showTitle && <h2>Techstack</h2>}
    <div ref={viewport} className="tech-loop" aria-label="Technologien">
      <div ref={track} className="tech-loop-track">
        {[0, 1].map(part => <div ref={part === 0 ? group : undefined} className="tech-loop-group" key={part}>
          {Array.from({ length: copies }, (_, copy) => <div
            className="tech-loop-sequence" key={copy}
            ref={part === 0 && copy === 0 ? sequence : undefined}
          >{items.map((tech, index) => {
            const key = `${part}-${copy}-${index}`;
            const value = proficiencyOf(tech);
            const active = selectedKey === key;
            // Explicit SVG user-unit lengths avoid unitless CSS calc/pathLength
            // normalization differences. The visible arc is circumference - offset.
            const style = {
              "--tech-color": tech.color,
              "--ring-length": `${RING_CIRCUMFERENCE}px`,
              "--ring-offset": `${RING_CIRCUMFERENCE * (1 - (value ?? 0) / 100)}px`,
              "--logo-scale": tech.scale * (mode === "project" ? (tech.projectScale ?? 1) : 1),
              "--logo-offset-x": `${tech.logoOffsetX ?? 0}px`,
            } as CSSProperties;
            const icon = <>
              <span className="tech-ring">
                <svg viewBox="0 0 60 60" aria-hidden="true">
                  <circle className="tech-ring-base" cx="30" cy="30" r={RING_RADIUS} />
                  {interactive && <circle className="tech-ring-progress" cx="30" cy="30" r={RING_RADIUS}
                    strokeDasharray={`${RING_CIRCUMFERENCE} ${RING_CIRCUMFERENCE}`} />}
                </svg>
                <img src={tech.icon} alt={interactive ? "" : tech.name} />
              </span>
              {interactive && <span className="tech-percent">{value === undefined ? "–" : `${value} %`}</span>}
            </>;
            return interactive ? <button key={key} type="button" className={`tech-token ${active ? "is-active" : ""}`} style={style}
              aria-label={`${tech.name}, ${value === undefined ? "Erfahrungswert noch offen" : `${value} Prozent Erfahrung`}`}
              aria-expanded={active} aria-controls={active ? id : undefined}
              onPointerDown={event => {
                if (!event.isPrimary || event.button !== 0) return;
                keyboardInput.current = false;
                paused.current = true;
                // Suppress native mouse focus scrolling; touch retains its
                // scrolling gesture while receiving an already focused target.
                if (event.pointerType === "mouse") event.preventDefault();
                event.currentTarget.focus({ preventScroll: true });
                // The previous button's blur handler may release its focus pause.
                paused.current = true;
              }}
              onClick={event => choose(tech, key, event.currentTarget)}
              onFocus={event => {
                if (!keyboardInput.current || restoringFocus.current) return;
                paused.current = true;
                const container = viewport.current;
                const row = track.current;
                const period = group.current;
                if (!container || !row || !period) return;
                container.scrollLeft = 0;
                const bounds = container.getBoundingClientRect();
                const boundsIcon = event.currentTarget.getBoundingClientRect();
                if (boundsIcon.left < bounds.left || boundsIcon.right > bounds.right) {
                  // Keyboard navigation only: move the actual focused copy by
                  // the minimum distance needed, never relocate pointer targets.
                  offset.current += boundsIcon.left < bounds.left
                    ? boundsIcon.left - bounds.left
                    : boundsIcon.right - bounds.right;
                  row.style.transform = `translate3d(${-offset.current}px,0,0)`;
                }
              }}
              onBlur={() => { if (!selected) paused.current = false; }}>
              {icon}
            </button> : <div className="tech-token" key={key} style={style}>{icon}</div>;
          })}</div>)}
        </div>)}
      </div>
    </div>
    {selected && (mobile
      ? <div className="tech-detail-mobile">{details}</div>
      : createPortal(<div className="tech-detail-desktop" style={{ left: position.left, top: position.top }}>{details}</div>, document.body))}
  </section>;
}
export default TechStack;
