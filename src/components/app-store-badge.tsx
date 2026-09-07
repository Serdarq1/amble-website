"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

type AppStoreBadgeProps = {
  className?: string;
};

export function AppStoreBadge({ className = "" }: AppStoreBadgeProps) {
  function recordClick() {
    try {
      track("app_store_cta_click");
    } catch {
      // Analytics must never interrupt the visitor's action.
    }
  }

  return (
    <a
      className={`app-store-badge ${className}`}
      href="#"
      aria-label="Download Amble on the App Store"
      onClick={recordClick}
    >
      <Image
        src="/brand/app-store-badge.svg"
        alt=""
        width={250}
        height={83}
        priority
      />
    </a>
  );
}
