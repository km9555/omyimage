/**
 * Viewport gate for the mobile app shell, plus the scroll lock that shell needs.
 *
 * The gate is `md` (768px) rather than oMyPDF's `lg`, because that is where the
 * site's own chrome already switches: `MobileMenu` is `md:hidden`, the header
 * search and `AppsMenu` are `hidden md:block`. Putting the tool shell on the
 * same line means a visitor never sees the phone navbar above a desktop
 * workspace, or the reverse.
 *
 * Consequence worth knowing: `ToolWorkspace` does not go two-column until `lg`,
 * so 768–1023px keeps today's stacked layout — options below the files. Moving
 * the shell up to cover that range is a one-line change to MOBILE_BREAKPOINT.
 */
"use client";

import { useEffect, useState } from "react";

/** Tailwind's `md`. The single knob for where the app shell takes over. */
export const MOBILE_BREAKPOINT = 768;

/**
 * True while the viewport is narrower than `breakpoint`.
 *
 * Starts `false` on purpose. `next.config.ts` sets `output: "export"`, so every
 * page is prerendered HTML — reading the viewport during render would make the
 * first client paint disagree with that markup and React would throw a
 * hydration mismatch. The real value lands one effect later.
 *
 * That one desktop-tree frame is invisible in practice: the shell only mounts
 * once a tool holds a file, which is several interactions after hydration.
 */
export function useIsMobile(breakpoint: number = MOBILE_BREAKPOINT): boolean {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return mobile;
}

/**
 * True when the primary input cannot hit small targets — a finger, not a mouse.
 *
 * Separate from `useIsMobile` on purpose. Viewport width decides *layout*;
 * pointer type decides *hit sizes*. They usually agree, but a touchscreen
 * laptop is wide and coarse, and a phone browser in desktop-site mode is
 * narrow and still coarse. Canvas grips size off this one.
 */
export function useCoarsePointer(): boolean {
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return coarse;
}

/**
 * Freezes the document behind a full-screen overlay for as long as `active`.
 *
 * Locks `<html>` rather than `<body>`: the body is the flex column that holds
 * the navbar and footer, and hiding its overflow there leaves iOS still able to
 * rubber-band the document. Restores whatever was there before, so two
 * overlays unmounting out of order cannot strand the page unscrollable.
 */
export function useOverlayScrollLock(active: boolean): void {
  useEffect(() => {
    if (!active) return;
    const el = document.documentElement;
    const prev = el.style.overflow;
    el.style.overflow = "hidden";
    return () => {
      el.style.overflow = prev;
    };
  }, [active]);
}
