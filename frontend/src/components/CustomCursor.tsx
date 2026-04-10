import { useEffect, useRef, useState } from "react";

const EASE_FACTOR = 0.18;
const HALO_EASE_FACTOR = 0.1;
const CURSOR_SIZE = 24;
const HALO_SIZE = 44;
const INTERACTIVE_SELECTORS = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "label",
  "[data-cursor-interactive]",
].join(",");

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const haloCurrentRef = useRef({ x: 0, y: 0 });
  const interactiveRef = useRef(false);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pointerMedia = window.matchMedia("(pointer: fine)");
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setEnabled(pointerMedia.matches && !motionMedia.matches);
    };

    updateEnabled();
    pointerMedia.addEventListener("change", updateEnabled);
    motionMedia.addEventListener("change", updateEnabled);

    return () => {
      pointerMedia.removeEventListener("change", updateEnabled);
      motionMedia.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor-enabled");
      setVisible(false);
      return;
    }

    document.documentElement.classList.add("custom-cursor-enabled");
    const cursorEl = cursorRef.current;
    const haloEl = haloRef.current;
    if (!cursorEl || !haloEl) return;

    const updateInteractiveState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      interactiveRef.current = !!element?.closest(INTERACTIVE_SELECTORS);
      cursorEl.style.setProperty("--cursor-scale", interactiveRef.current ? "1.55" : "1");
      cursorEl.style.setProperty("--cursor-opacity", interactiveRef.current ? "0.95" : "0.75");
      haloEl.style.setProperty("--halo-scale", interactiveRef.current ? "1.2" : "1");
      haloEl.style.setProperty("--halo-opacity", interactiveRef.current ? "0.42" : "0.28");
    };

    const onPointerMove = (event: PointerEvent) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;
      updateInteractiveState(event.target);
      if (!visible) {
        currentRef.current = { x: event.clientX, y: event.clientY };
        haloCurrentRef.current = { x: event.clientX, y: event.clientY };
        setVisible(true);
      }
    };

    const onPointerDown = () => {
      cursorEl.style.setProperty("--cursor-scale", "0.9");
      haloEl.style.setProperty("--halo-scale", "0.9");
    };
    const onPointerUp = () => {
      cursorEl.style.setProperty("--cursor-scale", interactiveRef.current ? "1.55" : "1");
      haloEl.style.setProperty("--halo-scale", interactiveRef.current ? "1.2" : "1");
    };
    const onPointerLeave = () => setVisible(false);

    const animate = () => {
      const nextX =
        currentRef.current.x + (targetRef.current.x - currentRef.current.x) * EASE_FACTOR;
      const nextY =
        currentRef.current.y + (targetRef.current.y - currentRef.current.y) * EASE_FACTOR;
      const haloNextX =
        haloCurrentRef.current.x +
        (targetRef.current.x - haloCurrentRef.current.x) * HALO_EASE_FACTOR;
      const haloNextY =
        haloCurrentRef.current.y +
        (targetRef.current.y - haloCurrentRef.current.y) * HALO_EASE_FACTOR;

      currentRef.current.x = nextX;
      currentRef.current.y = nextY;
      haloCurrentRef.current.x = haloNextX;
      haloCurrentRef.current.y = haloNextY;

      cursorEl.style.transform = `translate3d(${nextX - CURSOR_SIZE / 2}px, ${nextY - CURSOR_SIZE / 2}px, 0) scale(var(--cursor-scale, 1))`;
      haloEl.style.transform = `translate3d(${haloNextX - HALO_SIZE / 2}px, ${haloNextY - HALO_SIZE / 2}px, 0) scale(var(--halo-scale, 1))`;
      rafRef.current = window.requestAnimationFrame(animate);
    };

    rafRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerleave", onPointerLeave);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enabled, visible]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={haloRef}
        aria-hidden="true"
        className={`custom-cursor-halo ${visible ? "is-visible" : ""}`}
      />
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`custom-cursor ${visible ? "is-visible" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
