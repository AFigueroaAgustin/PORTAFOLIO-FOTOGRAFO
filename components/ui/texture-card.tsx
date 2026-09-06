"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle" | "elevated"
}

export function TextureCard({
  className,
  variant = "default",
  children,
  ...props
}: TextureCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border transition-all duration-300",
        "bg-gradient-to-b from-[#16161d] to-[#0c0c10]",
        "border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_20px_40px_-15px_rgba(0,0,0,0.8)]",
        variant === "elevated" && "hover:border-accent-gold/30 hover:shadow-[inset_0_1px_0_0_rgba(212,175,55,0.2),0_25px_50px_-12px_rgba(0,0,0,0.9)]",
        className
      )}
      {...props}
    >
      {/* Sutil micro-textura de grano de película */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "16px 16px"
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function TextureCardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-2", className)} {...props} />
}

export function TextureCardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-medium tracking-tight text-white/95", className)}
      {...props}
    />
  )
}

export function TextureCardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-neutral-400 leading-relaxed", className)}
      {...props}
    />
  )
}

export function TextureCardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-2", className)} {...props} />
}

export function TextureCardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center p-6 pt-0 border-t border-white/[0.04]", className)}
      {...props}
    />
  )
}
