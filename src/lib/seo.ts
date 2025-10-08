// Configuración SEO para SSG
export const seoConfig = {
  title: "CATLEDAN - Sistema Integral Ganadero con IA",
  description: "El sistema más completo para productores ganaderos. Optimiza tu reproducción, aumenta tu producción 35% y reduce costos 25% con inteligencia artificial especializada.",
  keywords: [
    "gestión ganadera",
    "software ganado",
    "IA ganadera",
    "reproducción bovina",
    "producción leche",
    "ganadería Perú",
    "banco sementales",
    "predicción partos",
    "alertas ganaderas",
    "dashboard ganado"
  ],
  author: "CATLEDAN",
  url: "https://catledan.com",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
  twitterSite: "@catledan",
  locale: "es_PE",
  alternateLocales: ["es_ES", "en_US"]
};

export const generateMetadata = (pageTitle?: string, pageDescription?: string) => {
  return {
    title: pageTitle ? `${pageTitle} | ${seoConfig.title}` : seoConfig.title,
    description: pageDescription || seoConfig.description,
    keywords: seoConfig.keywords.join(", "),
    author: seoConfig.author,
    openGraph: {
      title: pageTitle ? `${pageTitle} | ${seoConfig.title}` : seoConfig.title,
      description: pageDescription || seoConfig.description,
      url: seoConfig.url,
      siteName: "CATLEDAN",
      images: [
        {
          url: seoConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "CATLEDAN - Sistema Integral Ganadero",
        },
      ],
      locale: seoConfig.locale,
      type: "website",
    },
    twitter: {
      card: seoConfig.twitterCard,
      site: seoConfig.twitterSite,
      title: pageTitle ? `${pageTitle} | ${seoConfig.title}` : seoConfig.title,
      description: pageDescription || seoConfig.description,
      images: [seoConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
      yahoo: "yahoo-site-verification-code",
    },
    alternates: {
      canonical: seoConfig.url,
      languages: {
        'es-PE': seoConfig.url,
        'es-ES': `${seoConfig.url}/es`,
        'en-US': `${seoConfig.url}/en`,
      },
    },
  };
};

// Estructura de datos para Schema.org
export const generateSchemaOrg = () => {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CATLEDAN",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "29",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247"
    },
    "author": {
      "@type": "Organization",
      "name": "CATLEDAN",
      "url": "https://catledan.com"
    },
    "description": seoConfig.description,
    "url": seoConfig.url,
    "screenshot": "/dashboard-screenshot.jpg",
    "softwareVersion": "2.0",
    "releaseNotes": "Nueva funcionalidad de IA para predicción de partos",
    "featureList": [
      "Gestión completa de ganado",
      "Inteligencia artificial predictiva",
      "Sistema de alertas automáticas",
      "Banco de sementales",
      "Análisis genético",
      "Clima local integrado",
      "Comunidad de ganaderos"
    ]
  };
};
