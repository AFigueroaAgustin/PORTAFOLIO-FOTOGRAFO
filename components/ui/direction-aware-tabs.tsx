"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface TabItem {
  id: string
  label: string
  count?: number
}

export interface DirectionAwareTabsProps {
  tabs: TabItem[]
  selectedTab: string
  onChange: (id: string) => void
  className?: string
}

export function DirectionAwareTabs({
  tabs,
  selectedTab,
  onChange,
  className,
}: DirectionAwareTabsProps) {
  return (
    <div
      className={cn(
        "relative flex flex-wrap items-center justify-center gap-1.5 p-2 sm:p-1.5 rounded-2xl sm:rounded-full",
        "bg-[#121217]/90 backdrop-blur-md border border-white/[0.08]",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {tabs.map((tab) => {
        const isSelected = selectedTab === tab.id
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative z-10 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs md:text-sm font-medium tracking-wide uppercase transition-colors duration-200 select-none",
              isSelected ? "text-white" : "text-neutral-400 hover:text-neutral-200"
            )}
          >
            {isSelected && (
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-accent-gold/20 via-accent-amber/30 to-accent-gold/20 border border-accent-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 32,
                }}
              />
            )}
            <span className="flex items-center gap-1.5">
              {tab.label}
              {typeof tab.count === "number" && (
                <span className={cn(
                  "text-[10px] px-1.5 py-0.2 rounded-full font-mono",
                  isSelected ? "bg-accent-gold/30 text-accent-light" : "bg-white/[0.06] text-neutral-500"
                )}>
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        )
      })}
    </div>
  )
}
