"use client";

import { useEffect } from "react";

/**
 * Optional jQuery: navbar scroll glass state + hover glow on .jq-glow elements.
 */
export function ClientEnhancements() {
  useEffect(() => {
    let teardown: (() => void) | undefined;

    void (async () => {
      const jq = (await import("jquery")).default;
      const $ = jq;
      const $nav = $("#site-nav");
      const $win = $(window);

      const onScroll = () => {
        if (window.scrollY > 32) {
          $nav.addClass("nav-scrolled");
        } else {
          $nav.removeClass("nav-scrolled");
        }
      };

      $win.on("scroll.navEnhance", onScroll);
      onScroll();

      const enter = (e: JQuery.MouseEnterEvent) => {
        $(e.currentTarget).addClass("jq-glow-active");
      };
      const leave = (e: JQuery.MouseLeaveEvent) => {
        $(e.currentTarget).removeClass("jq-glow-active");
      };

      $(document.body).on("mouseenter.jqGlow", ".jq-glow", enter);
      $(document.body).on("mouseleave.jqGlow", ".jq-glow", leave);

      teardown = () => {
        $win.off("scroll.navEnhance", onScroll);
        $(document.body).off(".jqGlow");
      };
    })();

    return () => {
      teardown?.();
    };
  }, []);

  return null;
}
