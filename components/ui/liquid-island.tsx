"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { cn } from "@/lib/utils"

import { Sparkles, Clock, ShieldCheck } from "lucide-react"

export interface CategoryInfo {
  id: string
  label: string
  icon?: string
  badgeText?: string
  description: string
  count: number
}

interface LiquidIslandProps {
  category: CategoryInfo
  className?: string
}

export function LiquidIsland({ category, className }: LiquidIslandProps) {
  return (
    <motion.div
      layout
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className={cn(
        "relative mx-auto max-w-3xl w-full overflow-hidden",
        "rounded-3xl p-5 sm:p-6",
        "glass-liquid glass-liquid-glow",
        className
      )}
    >
      {/* Resplandor sutil estilo Liquid Metal / Dynamic Island */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-32 bg-accent-gold/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-48 h-24 bg-white/5 blur-2xl pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          {/* Fila superior: Badge de categoría e indicador tipo Dynamic Island */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-xs font-mono tracking-wider text-accent-light">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
              <span className="uppercase">{category.label}</span>
            </div>

            <span className="text-[11px] sm:text-xs font-mono text-neutral-400 px-2.5 py-0.5 rounded-full bg-black/40 border border-white/5">
              {category.count} {category.count === 1 ? "foto" : "fotografías"}
            </span>
          </div>

          {/* Texto general editorial de la categoría */}
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-4">
            {category.description}
          </p>

          {/* Micro-barra de valor y compromiso de calidad estilo Apple */}
          <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/[0.08] text-[11px] sm:text-xs font-mono text-neutral-400">
            <span className="inline-flex items-center gap-1.5 text-accent-gold font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Alta Definición Editorial</span>
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>Entrega Ágil para Redes e Impresión</span>
            </span>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-gold" />
              <span>Santiago del Estero</span>
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
