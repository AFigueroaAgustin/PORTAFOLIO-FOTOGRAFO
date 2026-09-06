"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "motion/react"
import { cn } from "@/lib/utils"

export interface ShiftCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode
  onClick?: () => void
}

export function ShiftCard({
  children,
  className,
  onClick,
  ...props
}: ShiftCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08]",
        "bg-gradient-to-b from-[#16161d] to-[#0c0c10]",
        "transition-[border-color,box-shadow] duration-200 hover:border-accent-gold/40 hover:shadow-[0_20px_50px_-15px_rgba(212,175,55,0.25)]",
        className
      )}
      {...props}
    >
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>

      {/* Brillo especular dinámico */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)"
        }}
      />
    </motion.div>
  )
}
