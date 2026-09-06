"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface EdgeBlurProps {
  position?: "top" | "bottom"
  className?: string
  height?: string
}

export function EdgeBlur({
  position = "bottom",
  className,
  height = "h-20 md:h-28",
}: EdgeBlurProps) {
  const isTop = position === "top"
  const gradientDirection = isTop ? "to bottom" : "to top"

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed left-0 right-0 z-20 overflow-hidden",
        isTop ? "top-0" : "bottom-0",
        height,
        className
      )}
    >
      <div
        className="absolute inset-0 backdrop-blur-md"
        style={{
          WebkitMaskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
          maskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
        }}
      />
      <div
        className={cn(
          "absolute inset-0",
          isTop
            ? "bg-gradient-to-b from-[#070709] via-[#070709]/40 to-transparent"
            : "bg-gradient-to-t from-[#070709] via-[#070709]/40 to-transparent"
        )}
      />
    </div>
  )
}
