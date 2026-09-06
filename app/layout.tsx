import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["200", "300", "400", "500", "600"],
})

export const viewport: Viewport = {
  themeColor: "#070709",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://agustin-fotografias.vercel.app/"),
  title: "Agustín Figueroa — Fotógrafo Profesional | Santiago del Estero",
  description:
    "Fotografía profesional en Santiago del Estero, Argentina. Cobertura de actos escolares, cumpleaños, eventos sociales, viajes y fotografía de producto de alta calidad.",
  keywords: [
    "fotografo santiago del estero",
    "fotografia de producto",
    "actos escolares santiago del estero",
    "cumpleaños",
    "eventos santiago del estero",
    "agustin figueroa fotografia",
  ],
  authors: [{ name: "Agustín Figueroa" }],
  openGraph: {
    title: "Agustín Figueroa | Fotógrafo en Santiago del Estero",
    description:
      "Inmortalizando momentos y destacando detalles. Actos escolares, cumpleaños, viajes y producto.",
    url: "https://agustin-fotografias.vercel.app/",
    siteName: "Agustín Figueroa Fotografía",
    images: [
      {
        url: "/img/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Agustín Figueroa Fotografía",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agustín Figueroa | Fotógrafo en Santiago del Estero",
    description:
      "Fotografía profesional: actos escolares, cumpleaños, eventos, viajes y fotografía de producto.",
    images: ["/img/og-preview.jpg"],
  },
  icons: {
    icon: "/img/favicon.png",
    apple: "/img/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Agustín Figueroa Fotografía",
    image: "https://agustin-fotografias.vercel.app/img/og-preview.jpg",
    url: "https://agustin-fotografias.vercel.app/",
    telephone: "+5493853023122",
    priceRange: "$$",
    description:
      "Fotografía profesional en Santiago del Estero: actos escolares, cumpleaños, eventos, viajes y fotografía de producto.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Santiago del Estero",
      addressRegion: "Santiago del Estero",
      addressCountry: "AR",
    },
    areaServed: "Santiago del Estero, Argentina",
    founder: {
      "@type": "Person",
      name: "Agustín Figueroa",
    },
  }

  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#070709] text-[#ededed] selection:bg-accent-gold selection:text-black">
        {children}
      </body>
    </html>
  )
}
