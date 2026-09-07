"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Camera,
  Compass,
  Sparkles,
  Calendar,
  MessageCircle,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Layers,
  MapPin,
  CheckCircle2,
} from "lucide-react"

import { EdgeBlur } from "@/components/ui/edge-blur"
import { DirectionAwareTabs, type TabItem } from "@/components/ui/direction-aware-tabs"
import { ShiftCard } from "@/components/ui/shift-card"
import {
  TextureCard,
  TextureCardHeader,
  TextureCardTitle,
  TextureCardDescription,
  TextureCardContent,
} from "@/components/ui/texture-card"
import { TextureButton } from "@/components/ui/texture-button"
import { ExpandableScreen, type PhotoItem } from "@/components/ui/expandable-screen"
import { LiquidIsland, type CategoryInfo } from "@/components/ui/liquid-island"

const ALL_PHOTOS: PhotoItem[] = [
  // ACTOS ESCOLARES
  {
    id: "acto-01",
    title: "Abanderados y Escolta de Honor",
    categoria: "actos",
    categoriaLabel: "Acto Escolar",
    thumb: "/img/eventos/actos/acto-01-thumb.webp",
    full: "/img/eventos/actos/acto-01-full.webp",
    description: "Ceremonia de bandera, capturando el orgullo y la solemnidad del momento.",
  },
  {
    id: "acto-06",
    title: "Presentación de Camperas 7mo Grado",
    categoria: "actos",
    categoriaLabel: "Acto Escolar",
    thumb: "/img/eventos/actos/acto-06-thumb.webp",
    full: "/img/eventos/actos/acto-06-full.webp",
    description: "La euforia y unión de los alumnos en su despedida escolar.",
  },
  {
    id: "acto-02",
    title: "Momento de Apertura y Entrada",
    categoria: "actos",
    categoriaLabel: "Acto Escolar",
    thumb: "/img/eventos/actos/acto-02-thumb.webp",
    full: "/img/eventos/actos/acto-02-full.webp",
    description: "Enfoque nítido y respetuoso en la llegada de los egresados.",
  },
  {
    id: "acto-03",
    title: "Discursos y Palabras de Despedida",
    categoria: "actos",
    categoriaLabel: "Acto Escolar",
    thumb: "/img/eventos/actos/acto-03-thumb.webp",
    full: "/img/eventos/actos/acto-03-full.webp",
    description: "Expresiones genuinas captadas con teleobjetivo de alta luminosidad.",
  },
  {
    id: "acto-04",
    title: "Entrega de Diplomas y Reconocimientos",
    categoria: "actos",
    categoriaLabel: "Acto Escolar",
    thumb: "/img/eventos/actos/acto-04-thumb.webp",
    full: "/img/eventos/actos/acto-04-full.webp",
    description: "El instante exacto del logro académico en manos de los estudiantes.",
  },
  {
    id: "acto-05",
    title: "Cierre y Festejo Institucional",
    categoria: "actos",
    categoriaLabel: "Acto Escolar",
    thumb: "/img/eventos/actos/acto-05-thumb.webp",
    full: "/img/eventos/actos/acto-05-full.webp",
    description: "Abrazos, emoción y despedida entre compañeros y docentes.",
  },

  // CUMPLEAÑOS & SOCIALES
  {
    id: "cumple-02",
    title: "Ambientación y Mesa Principal",
    categoria: "cumpleanos",
    categoriaLabel: "Cumpleaños",
    thumb: "/img/eventos/cumpleanos/cumple-02-thumb.webp",
    full: "/img/eventos/cumpleanos/cumple-02-full.webp",
    description: "Detalles decorativos, luces y puesta en escena en salón.",
  },
  {
    id: "cumple-04",
    title: "Retrato Espontáneo Infantil",
    categoria: "cumpleanos",
    categoriaLabel: "Cumpleaños",
    thumb: "/img/eventos/cumpleanos/cumple-04-thumb.webp",
    full: "/img/eventos/cumpleanos/cumple-04-full.webp",
    description: "Sonrisas naturales sin poses forzadas, pura infancia y juego.",
  },
  {
    id: "cumple-05",
    title: "Descubriendo los Globos",
    categoria: "cumpleanos",
    categoriaLabel: "Cumpleaños",
    thumb: "/img/eventos/cumpleanos/cumple-05-thumb.webp",
    full: "/img/eventos/cumpleanos/cumple-05-full.webp",
    description: "La curiosidad y ternura en los primeros años de vida.",
  },
  {
    id: "cumple-06",
    title: "Festejo en Familia",
    categoria: "cumpleanos",
    categoriaLabel: "Cumpleaños",
    thumb: "/img/eventos/cumpleanos/cumple-06-thumb.webp",
    full: "/img/eventos/cumpleanos/cumple-06-full.webp",
    description: "Complicidad y amor familiar capturados con luz ambiente cálida.",
  },
  {
    id: "cumple-07",
    title: "Juegos y Animación",
    categoria: "cumpleanos",
    categoriaLabel: "Cumpleaños",
    thumb: "/img/eventos/cumpleanos/cumple-07-thumb.webp",
    full: "/img/eventos/cumpleanos/cumple-07-full.webp",
    description: "Movimiento congelado a alta velocidad de obturación.",
  },
  {
    id: "cumple-08",
    title: "El Soplo de las Velitas",
    categoria: "cumpleanos",
    categoriaLabel: "Cumpleaños",
    thumb: "/img/eventos/cumpleanos/cumple-08-thumb.webp",
    full: "/img/eventos/cumpleanos/cumple-08-full.webp",
    description: "El clímax de la celebración con los deseos del homenajeado.",
  },
  {
    id: "ana-bebe-01",
    title: "Ana — Primer Añito Espontáneo",
    categoria: "cumpleanos",
    categoriaLabel: "Cumpleaños & Bebés",
    thumb: "/img/eventos/cumpleanos/ana-bebe-thumb.jpg",
    full: "/img/eventos/cumpleanos/ana-bebe-full.jpg",
    description: "Sesión infantil en casa, capturando la inocencia y el brillo en la mirada.",
  },

  // RETRATOS & EVENTOS SOCIALES
  {
    id: "cumple-60-familia",
    title: "Cumpleaños 60 — Tres Generaciones",
    categoria: "sociales",
    categoriaLabel: "Retrato Social",
    thumb: "/img/eventos/sociales/cumple-60-familia-thumb.webp",
    full: "/img/eventos/sociales/cumple-60-familia-full.webp",
    description: "Festejo de 60 años en familia, tres generaciones y emoción compartida.",
  },

  // VIAJES & PAISAJES
  {
    id: "viaje-caballo-01",
    title: "Paseo a Caballo — Saludo Espontáneo",
    categoria: "viajes",
    categoriaLabel: "Viajes & Rutas",
    thumb: "/img/eventos/viajes/viaje-caballo-01-thumb.webp",
    full: "/img/eventos/viajes/viaje-caballo-01-full.webp",
    description: "Salida al campo a caballo, alegría espontánea y contacto con la naturaleza.",
  },
  {
    id: "viaje-caballo-02",
    title: "Paseo a Caballo — Retrato de Campo",
    categoria: "viajes",
    categoriaLabel: "Viajes & Rutas",
    thumb: "/img/eventos/viajes/viaje-caballo-02-thumb.webp",
    full: "/img/eventos/viajes/viaje-caballo-02-full.webp",
    description: "Retrato ecuestre con luz natural difusa entre los árboles del monte.",
  },
  {
    id: "viaje-caballo-03",
    title: "Paseo a Caballo — Travesía Rural",
    categoria: "viajes",
    categoriaLabel: "Viajes & Rutas",
    thumb: "/img/eventos/viajes/viaje-caballo-03-thumb.webp",
    full: "/img/eventos/viajes/viaje-caballo-03-full.webp",
    description: "Recorrido y serenidad en la experiencia a caballo.",
  },
  {
    id: "viaje-caballo-04",
    title: "Tarde en la Casita — Risas en Grupo",
    categoria: "viajes",
    categoriaLabel: "Viajes & Niños",
    thumb: "/img/eventos/viajes/viaje-caballo-04-thumb.webp",
    full: "/img/eventos/viajes/viaje-caballo-04-full.webp",
    description: "Sonrisas y juegos compartidos en una escapada inolvidable.",
  },
  {
    id: "viaje-01",
    title: "Amanecer en Ruta",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-01-thumb.webp",
    full: "/img/eventos/viajes/viaje-01-full.webp",
    description: "Luz rasante dorada que baña los horizontes abiertos.",
  },
  {
    id: "viaje-02",
    title: "Geometría del Paisaje",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-02-thumb.webp",
    full: "/img/eventos/viajes/viaje-02-full.webp",
    description: "Líneas de fuga y texturas minerales del camino.",
  },
  {
    id: "viaje-03",
    title: "Arquitectura & Luces Urbanas",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-03-thumb.webp",
    full: "/img/eventos/viajes/viaje-03-full.webp",
    description: "Composición de sombras y volúmenes en la ciudad.",
  },
  {
    id: "viaje-04",
    title: "Siluetas al Atardecer",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-04-thumb.webp",
    full: "/img/eventos/viajes/viaje-04-full.webp",
    description: "Contraluz puro con gradiente cálido en el cielo.",
  },
  {
    id: "viaje-05",
    title: "Reflejos de Montaña",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-05-thumb.webp",
    full: "/img/eventos/viajes/viaje-05-full.webp",
    description: "Calma y nitidez en aguas cristalinas.",
  },
  {
    id: "viaje-06",
    title: "Profundidad de Campo Natural",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-06-thumb.webp",
    full: "/img/eventos/viajes/viaje-06-full.webp",
    description: "Detalle en primer plano con fondo de atmósfera brumosa.",
  },
  {
    id: "viaje-07",
    title: "Ruta Infinita",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-07-thumb.webp",
    full: "/img/eventos/viajes/viaje-07-full.webp",
    description: "Perspectiva clásica del viaje y la exploración.",
  },
  {
    id: "viaje-08",
    title: "Cielos Espectaculares",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-08-thumb.webp",
    full: "/img/eventos/viajes/viaje-08-full.webp",
    description: "Formación de nubes capturadas con alto rango dinámico (HDR).",
  },
  {
    id: "viaje-09",
    title: "Texturas de la Tierra",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-09-thumb.webp",
    full: "/img/eventos/viajes/viaje-09-full.webp",
    description: "Abstracción natural de rocas, vegetación y relieve.",
  },
  {
    id: "viaje-10",
    title: "Luz Cenital",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-10-thumb.webp",
    full: "/img/eventos/viajes/viaje-10-full.webp",
    description: "Contraste marcado y saturación orgánica de colores.",
  },
  {
    id: "viaje-11",
    title: "Horizontes Abiertos",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-11-thumb.webp",
    full: "/img/eventos/viajes/viaje-11-full.webp",
    description: "La inmensidad del paisaje santiagueño y argentino.",
  },
  {
    id: "viaje-12",
    title: "El Regreso al Crepúsculo",
    categoria: "viajes",
    categoriaLabel: "Viajes",
    thumb: "/img/eventos/viajes/viaje-12-thumb.webp",
    full: "/img/eventos/viajes/viaje-12-full.webp",
    description: "Tonos violetas y azules antes de la caída total de la noche.",
  },

  // FOTO PRODUCTO
  {
    id: "produc-01",
    title: "Botella & Cristalería Premium",
    categoria: "producto",
    categoriaLabel: "Producto",
    thumb: "/img/eventos/productos/produc-01-thumb.webp",
    full: "/img/eventos/productos/produc-01-full.webp",
    description: "Manejo preciso de reflejos, condensación y transparencia.",
  },
  {
    id: "produc-02",
    title: "Línea Cosmética & Cuidado",
    categoria: "producto",
    categoriaLabel: "Producto",
    thumb: "/img/eventos/productos/produc-02-thumb.webp",
    full: "/img/eventos/productos/produc-02-full.webp",
    description: "Iluminación difusa de estudio para texturas sedosas.",
  },
  {
    id: "produc-03",
    title: "Detalle de Packaging & Marca",
    categoria: "producto",
    categoriaLabel: "Producto",
    thumb: "/img/eventos/productos/produc-03-thumb.webp",
    full: "/img/eventos/productos/produc-03-full.webp",
    description: "Fidelidad de color cromática para catálogo y e-commerce.",
  },
  {
    id: "produc-04",
    title: "Composición Bodegón Comercial",
    categoria: "producto",
    categoriaLabel: "Producto",
    thumb: "/img/eventos/productos/produc-04-thumb.webp",
    full: "/img/eventos/productos/produc-04-full.webp",
    description: "Puesta en escena atractiva para campañas en redes sociales.",
  },
  {
    id: "produc-05",
    title: "Enfoque Macro de Textura",
    categoria: "producto",
    categoriaLabel: "Producto",
    thumb: "/img/eventos/productos/produc-05-thumb.webp",
    full: "/img/eventos/productos/produc-05-full.webp",
    description: "Aproximación milimétrica que revela la calidad del material.",
  },
  {
    id: "produc-06",
    title: "Fondo Oscuro Editorial",
    categoria: "producto",
    categoriaLabel: "Producto",
    thumb: "/img/eventos/productos/produc-06-thumb.webp",
    full: "/img/eventos/productos/produc-06-full.webp",
    description: "Estética refinada para marcas con identidad de lujo.",
  },

  // NATURALEZA
  {
    id: "natu-01",
    title: "Gotas de Lluvia en Hoja Verde",
    categoria: "naturaleza",
    categoriaLabel: "Naturaleza",
    thumb: "/img/eventos/naturaleza/natu-01-thumb.webp",
    full: "/img/eventos/naturaleza/natu-01-full.webp",
    description: "Macro fotografía con micro-refracciones en el agua.",
  },
  {
    id: "natu-02",
    title: "Palmera Bajo la Lluvia",
    categoria: "naturaleza",
    categoriaLabel: "Naturaleza",
    thumb: "/img/eventos/naturaleza/natu-02-thumb.webp",
    full: "/img/eventos/naturaleza/natu-02-full.webp",
    description: "Líneas orgánicas y atmósfera húmeda subtropical.",
  },
]

const TABS: TabItem[] = [
  { id: "all", label: "Todo el Portafolio", count: ALL_PHOTOS.length },
  { id: "cumpleanos", label: "Cumpleaños & Familia", count: 7 },
  { id: "actos", label: "Actos Escolares & Egresados", count: 6 },
  { id: "sociales", label: "Retratos & Social", count: 1 },
  { id: "producto", label: "Foto Producto & Marcas", count: 6 },
  { id: "viajes", label: "Viajes & Rutas", count: 16 },
  { id: "naturaleza", label: "Naturaleza", count: 2 },
]

const CATEGORY_INFOS: Record<string, CategoryInfo> = {
  all: {
    id: "all",
    label: "Todo el Portafolio",
    description: "Una cuidada selección editorial de coberturas en Santiago del Estero y el país. Iluminación cuidada, color cinematográfico y nitidez de alta definición. Hacé clic en cualquier fotografía para expandirla a pantalla completa.",
    count: ALL_PHOTOS.length,
  },
  cumpleanos: {
    id: "cumpleanos",
    label: "Cumpleaños & Festejos Familiares",
    description: "Risas espontáneas, miradas sinceras y abrazos familiares sin poses forzadas. Inmortalizando la verdadera emoción de los primeros añitos, hitos familiares y celebraciones únicas.",
    count: 7,
  },
  actos: {
    id: "actos",
    label: "Actos Escolares & Egresados",
    description: "La solemnidad de los abanderados, presentaciones de camperas, actos patrios y colaciones. Cobertura respetuosa, entrega ágil y recuerdos imborrables para familias y colegios.",
    count: 6,
  },
  sociales: {
    id: "sociales",
    label: "Retratos & Eventos Sociales",
    description: "Retratos con peso emocional, aniversarios y festejos familiares en blanco y negro y color. Planos naturales y enfoque en la calidez humana de cada homenajeado.",
    count: 1,
  },
  producto: {
    id: "producto",
    label: "Fotografía de Producto & Marcas",
    description: "Tomas comerciales de catálogo, packaging y gastronomía. Iluminación técnica que resalta materiales, texturas y calidad para elevar las ventas de tu negocio.",
    count: 6,
  },
  viajes: {
    id: "viajes",
    label: "Viajes & Rutas — Mirada de Autor",
    description: "Horizontes abiertos, rutas y la inmensidad de los paisajes de Santiago del Estero y Argentina, capturados con alto rango dinámico y luz natural.",
    count: 16,
  },
  naturaleza: {
    id: "naturaleza",
    label: "Naturaleza & Macro",
    description: "Macro-fotografía, micro-refracciones en gotas de agua y la atmósfera húmeda subtropical del entorno natural.",
    count: 2,
  },
}

const WHATSAPP_CATEGORY_MESSAGES: Record<string, string> = {
  all: "¡Hola Agustín! Estuve viendo tu portafolio web y me gustaría consultar disponibilidad y presupuesto para una cobertura/sesión.",
  cumpleanos: "¡Hola Agustín! Estuve viendo tus coberturas de Cumpleaños y Festejos Familiares en tu portafolio. Me encantó el estilo natural y quisiera consultar disponibilidad y tarifas.",
  actos: "¡Hola Agustín! Estuve viendo la cobertura de Actos Escolares y Egresados en tu portafolio. Me gustaría consultar disponibilidad y cotización para un colegio/curso.",
  sociales: "¡Hola Agustín! Vi tus retratos y la sesión del cumpleaños de 60 en blanco y negro en la web. Me gustaría consultar para una cobertura familiar/social.",
  producto: "¡Hola Agustín! Vi tus fotografías de Producto y Marcas. Me gustaría cotizar una sesión comercial para mi negocio/catálogo.",
  viajes: "¡Hola Agustín! Estuve recorriendo tu portafolio de Viajes y Paisajes. Quisiera hacerte una consulta.",
  naturaleza: "¡Hola Agustín! Estuve recorriendo tu portafolio y tu trabajo fotográfico. Quisiera hacerte una consulta.",
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all")
  const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoItem | null>(null)

  // Filtrado de fotos
  const filteredPhotos = React.useMemo(() => {
    if (selectedCategory === "all") return ALL_PHOTOS
    return ALL_PHOTOS.filter((p) => p.categoria === selectedCategory)
  }, [selectedCategory])

  // Mensaje de WhatsApp dinámico y contextual según lo que el usuario está mirando
  const activeWhatsappMessage = encodeURIComponent(
    WHATSAPP_CATEGORY_MESSAGES[selectedCategory] || WHATSAPP_CATEGORY_MESSAGES.all
  )
  const whatsappUrl = `https://wa.me/5493853023122?text=${activeWhatsappMessage}`

  return (
    <main className="relative min-h-screen text-[#ededed] overflow-x-hidden">
      {/* Barra de Navegación Flotante Minimalista */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-3 sm:px-6 md:px-8 pointer-events-none">
        <nav className="pointer-events-auto max-w-5xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 rounded-full glass-liquid glass-liquid-glow">
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <img
              src="/img/logo.png"
              alt="Logo Agustín Figueroa"
              className="h-6 sm:h-7 w-auto invert brightness-100 transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-neutral-400 font-medium">
            <a href="#galeria" className="hover:text-white transition-colors">
              Galería
            </a>
            <a href="#servicios" className="hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#sobre-mi" className="hover:text-white transition-colors">
              Sobre Mí
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
          </div>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <TextureButton variant="whatsapp" size="sm" className="gap-1.5 sm:gap-2 text-xs">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </TextureButton>
          </a>
        </nav>
      </header>

      {/* 3. Hero Editorial */}
      <section className="relative pt-32 sm:pt-36 md:pt-48 pb-16 sm:pb-20 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] sm:text-xs font-mono text-neutral-300 mb-6 max-w-full"
        >
          <span className="w-2 h-2 rounded-full bg-accent-gold shrink-0 animate-pulse" />
          <span className="truncate">Santiago del Estero • Agenda Abierta 2026</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white mb-6 leading-[1.12]"
        >
          Inmortalizando <strong className="font-semibold text-accent-gold">momentos</strong>, destacando detalles.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed"
        >
          Fotografía profesional con criterio editorial y nitidez excepcional. Especialista en actos escolares, cumpleaños, viajes y producto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto"
        >
          <a href="#galeria" className="w-full sm:w-auto">
            <TextureButton variant="primary" size="lg" className="w-full sm:w-auto justify-center gap-2 text-sm">
              <Camera className="w-4 h-4 text-accent-gold" />
              <span>Explorar Obras</span>
            </TextureButton>
          </a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <TextureButton variant="outline" size="lg" className="w-full sm:w-auto justify-center gap-2 text-sm">
              <span>Consultar Fecha</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </TextureButton>
          </a>
        </motion.div>
      </section>

      {/* 4. Sección Galería con Cult UI Direction Aware Tabs */}
      <section id="galeria" className="py-16 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-white">
            Galería Seleccionada
          </h2>
          <p className="text-sm text-neutral-400 mt-2">
            Hacé clic en cualquier fotografía para expandirla a pantalla completa con navegación táctil.
          </p>
        </div>

        {/* Filtro interactivo de Cult UI */}
        <div className="flex justify-center mb-8">
          <DirectionAwareTabs
            tabs={TABS}
            selectedTab={selectedCategory}
            onChange={(catId) => setSelectedCategory(catId)}
          />
        </div>

        {/* Liquid Island estilo Dynamic Island (iOS): Descripción general interactiva de la categoría */}
        <div className="mb-12">
          <LiquidIsland
            category={
              CATEGORY_INFOS[selectedCategory] || CATEGORY_INFOS["all"]
            }
          />
        </div>

        {/* Cuadrícula Fotográfica Pura (Sin textos individuales, foco 100% en la fotografía) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
              >
                <ShiftCard
                  onClick={() => setSelectedPhoto(photo)}
                  className="h-full group cursor-pointer overflow-hidden rounded-2xl border border-white/[0.08] hover:border-accent-gold/40 transition-all duration-300 shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#111116]">
                    <img
                      src={photo.thumb}
                      alt={photo.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Botón flotante de zoom en hover / tap */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="p-2.5 rounded-full bg-black/80 text-white flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-md">
                        <ArrowUpRight className="w-4 h-4 text-accent-gold" />
                      </span>
                    </div>
                  </div>
                </ShiftCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* 5. Servicios en Tarjetas Táctiles (Cult UI TextureCard) */}
      <section id="servicios" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-24">
        <div className="text-center mb-14">
          <span className="text-xs uppercase font-mono tracking-widest text-accent-gold">
            Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight tracking-tight text-white mt-2">
            Servicios Fotográficos Profesionales
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TextureCard variant="elevated">
            <TextureCardHeader>
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center mb-4 text-accent-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <TextureCardTitle>Actos Escolares & Egresados</TextureCardTitle>
              <TextureCardDescription className="mt-2">
                Cobertura fotográfica integral de presentaciones de camperas, actos patrios, colaciones y diplomas. Entrega rápida en alta definición para familias y colegios.
              </TextureCardDescription>
            </TextureCardHeader>
            <TextureCardContent>
              <ul className="text-xs text-neutral-400 space-y-2 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Fotos individuales y grupales</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Galería digital descargable</span>
                </li>
              </ul>
            </TextureCardContent>
          </TextureCard>

          <TextureCard variant="elevated">
            <TextureCardHeader>
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center mb-4 text-accent-gold">
                <Calendar className="w-5 h-5" />
              </div>
              <TextureCardTitle>Cumpleaños & Eventos Sociales</TextureCardTitle>
              <TextureCardDescription className="mt-2">
                Inmortalizamos cada festejo en salones o domicilios. Enfoque en tomas espontáneas, abrazos sinceros y la atmósfera luminosa del festejo.
              </TextureCardDescription>
            </TextureCardHeader>
            <TextureCardContent>
              <ul className="text-xs text-neutral-400 space-y-2 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Fotografía sin poses forzadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Edición de color y luminosidad</span>
                </li>
              </ul>
            </TextureCardContent>
          </TextureCard>

          <TextureCard variant="elevated">
            <TextureCardHeader>
              <div className="w-10 h-10 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center mb-4 text-accent-gold">
                <Layers className="w-5 h-5" />
              </div>
              <TextureCardTitle>Fotografía de Producto</TextureCardTitle>
              <TextureCardDescription className="mt-2">
                Tomas comerciales de catálogo, packaging y gastronomía. Iluminación técnica que resalta materiales, texturas y calidad para elevar las ventas de tu negocio.
              </TextureCardDescription>
            </TextureCardHeader>
            <TextureCardContent>
              <ul className="text-xs text-neutral-400 space-y-2 font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Fondo neutro o contextual</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                  <span>Formatos optimizados para web y redes</span>
                </li>
              </ul>
            </TextureCardContent>
          </TextureCard>
        </div>
      </section>

      {/* 6. Sección Sobre Mí con Retrato */}
      <section id="sobre-mi" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-24">
        <div className="p-8 md:p-12 rounded-3xl bg-[#111116] border border-white/[0.08] shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-accent-gold/40 shadow-[0_0_30px_rgba(212,175,55,0.25)]">
              <img
                src="/img/perfil.jpg"
                alt="Agustín Figueroa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left">
            <span className="text-xs uppercase font-mono tracking-widest text-accent-gold">
              Detrás de Cámara
            </span>
            <h3 className="text-2xl md:text-3xl font-light text-white mt-1 mb-4">
              Hola, soy Agustín Figueroa.
            </h3>
            <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-4">
              Me apasiona capturar instantes que trasciendan en el tiempo: desde la emoción y los nervios de un acto escolar o un cumpleaños, hasta la inmensidad de un viaje o el detalle milimétrico de un producto.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-light">
              Mi compromiso en cada sesión es idéntico: entregarte imágenes limpias, con luz cuidada, color cinematográfico y la máxima nitidez técnica para guardar recuerdos inolvidables.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Bloque de Contacto Directo y Conversión */}
      <section id="contacto" className="py-20 px-6 max-w-2xl mx-auto text-center scroll-mt-24">
        <TextureCard className="p-8 md:p-10 border-accent-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-gold/10 border border-accent-gold/30 text-accent-gold mb-6">
            <MessageCircle className="w-7 h-7" />
          </div>
          <h2 className="text-3xl font-extralight text-white mb-3">
            ¿Planificando tu próxima sesión o evento?
          </h2>
          <p className="text-sm text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
            Escribime directamente por WhatsApp para consultar disponibilidad, paquetes a medida y tarifas para Santiago del Estero y alrededores.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <TextureButton
                variant="accent"
                size="lg"
                className="w-full sm:w-auto gap-2 px-8"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contactar por WhatsApp</span>
              </TextureButton>
            </a>
          </div>

          <p className="text-[11px] font-mono text-neutral-500 mt-6">
            Respuesta rápida • +54 9 385 302-3122
          </p>
        </TextureCard>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/[0.06] text-center text-xs text-neutral-500 font-mono">
        <p>© 2026 Agustín Figueroa Fotografía. Todos los derechos reservados.</p>
        <p className="mt-1 text-neutral-600">
          Diseñado con Cult UI & Next.js para una experiencia visual superior.
        </p>
      </footer>

      {/* 8. Botón Flotante Háptico de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-6 z-40 group"
      >
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)]">
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366]" />
        </div>
      </a>

      {/* 9. Visualizador Expandible (Cult UI Expandable Screen) */}
      <ExpandableScreen
        selectedPhoto={selectedPhoto}
        photos={filteredPhotos}
        onClose={() => setSelectedPhoto(null)}
        onSelectPhoto={(photo) => setSelectedPhoto(photo)}
      />

      <EdgeBlur position="bottom" height="h-24 md:h-32" />
    </main>
  )
}
