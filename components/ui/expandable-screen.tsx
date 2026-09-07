"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export interface PhotoItem {
  id: string
  title: string
  categoria: string
  categoriaLabel: string
  subcategoria?: string
  thumb: string
  full: string
  aspectRatio?: string // e.g. "3/2", "4/5", "16/9"
  description?: string
  location?: string
}

export interface ExpandableScreenProps {
  selectedPhoto: PhotoItem | null
  photos: PhotoItem[]
  onClose: () => void
  onSelectPhoto: (photo: PhotoItem) => void
}

export function ExpandableScreen({
  selectedPhoto,
  photos,
  onClose,
  onSelectPhoto,
}: ExpandableScreenProps) {
  // Manejo de teclas: Esc para cerrar, Flechas para navegar
  React.useEffect(() => {
    if (!selectedPhoto) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowRight") {
        navigateNext()
      } else if (e.key === "ArrowLeft") {
        navigatePrev()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "auto"
    }
  }, [selectedPhoto, photos])

  const currentIndex = selectedPhoto
    ? photos.findIndex((p) => p.id === selectedPhoto.id)
    : -1

  const navigateNext = () => {
    if (currentIndex >= 0 && currentIndex < photos.length - 1) {
      onSelectPhoto(photos[currentIndex + 1])
    } else if (currentIndex === photos.length - 1) {
      onSelectPhoto(photos[0]) // ciclo
    }
  }

  const navigatePrev = () => {
    if (currentIndex > 0) {
      onSelectPhoto(photos[currentIndex - 1])
    } else if (currentIndex === 0) {
      onSelectPhoto(photos[photos.length - 1]) // ciclo
    }
  }

  return (
    <AnimatePresence>
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
          onClick={onClose}
        >
          {/* Barra superior de controles */}
          <div
            className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-white/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-accent-gold/20 text-accent-light border border-accent-gold/30">
                {selectedPhoto.categoriaLabel}
              </span>
              <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
                {currentIndex + 1} de {photos.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                aria-label="Cerrar visor"
                className="p-2.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Flecha Anterior */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigatePrev()
              }}
              aria-label="Foto anterior"
              className="absolute left-3 md:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Contenedor central de la fotografía sin texto debajo */}
          <div
            className="relative max-w-6xl max-h-[88vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              key={selectedPhoto.id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative max-h-[85vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl border border-white/10"
            >
              <img
                src={selectedPhoto.full}
                alt={selectedPhoto.title}
                className="max-h-[85vh] w-auto max-w-full object-contain rounded-lg select-none"
              />
            </motion.div>
          </div>

          {/* Flecha Siguiente */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigateNext()
              }}
              aria-label="Foto siguiente"
              className="absolute right-3 md:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 backdrop-blur-md transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
