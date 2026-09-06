"use client"

import * as React from "react"
import { motion, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

export interface TextureButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: "primary" | "accent" | "whatsapp" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  asChild?: boolean
}

export const TextureButton = React.forwardRef<HTMLButtonElement, TextureButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/50 disabled:opacity-50 disabled:pointer-events-none rounded-xl"
    
    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs tracking-wider uppercase",
      md: "px-5 py-2.5 text-sm tracking-wider uppercase",
      lg: "px-7 py-3.5 text-base tracking-wide",
    }

    const variantStyles = {
      primary: cn(
        "bg-[#1c1c24] text-white border border-white/10",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_4px_12px_rgba(0,0,0,0.5)]",
        "hover:bg-[#252530] hover:border-white/20 active:translate-y-[1px]"
      ),
      accent: cn(
        "bg-gradient-to-b from-[#d4af37] to-[#b38f24] text-black font-semibold border border-yellow-200/30",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_6px_20px_rgba(212,175,55,0.3)]",
        "hover:brightness-105 active:translate-y-[1px]"
      ),
      whatsapp: cn(
        "bg-gradient-to-b from-[#25D366] to-[#1eb757] text-white font-semibold border border-emerald-300/30",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_6px_18px_rgba(37,211,102,0.35)]",
        "hover:brightness-105 active:translate-y-[1px]"
      ),
      outline: cn(
        "bg-transparent text-white/90 border border-white/15",
        "hover:bg-white/[0.06] hover:border-white/30 active:translate-y-[1px]"
      ),
      ghost: cn(
        "bg-transparent text-neutral-400 hover:text-white hover:bg-white/[0.05]"
      ),
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

TextureButton.displayName = "TextureButton"
