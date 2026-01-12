import { useHead } from '@unhead/vue'
import { computed } from 'vue'

const defaultMeta = {
  siteName: 'Wangari Irene | Qoi_tec',
  siteUrl: 'https://wangari-irene.com',
  defaultTitle: 'Wangari Irene | Graphic Designer & Digital Marketer | Nairobi, Kenya',
  defaultDescription: 'Creative Designer & Digital Marketing Specialist based in Nairobi, Kenya. Specializing in brand identity, digital marketing, and social media management.',
  defaultImage: '/images/og-image.jpg',
  twitterHandle: '@qoi_tec'
}

/**
 * SEO composable for managing page meta tags
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.image - OG image URL
 * @param {string} options.type - OG type (website, article, etc.)
 * @param {string} options.url - Canonical URL
 * @param {Object} options.schema - JSON-LD schema data
 */
export function useSEO(options = {}) {
  const {
    title,
    description = defaultMeta.defaultDescription,
    image = defaultMeta.defaultImage,
    type = 'website',
    url,
    schema
  } = options

  const fullTitle = computed(() => {
    if (!title) return defaultMeta.defaultTitle
    return `${title} | ${defaultMeta.siteName}`
  })

  const canonicalUrl = computed(() => {
    if (url) return `${defaultMeta.siteUrl}${url}`
    return defaultMeta.siteUrl
  })

  const imageUrl = computed(() => {
    if (image.startsWith('http')) return image
    return `${defaultMeta.siteUrl}${image}`
  })

  useHead({
    title: fullTitle,
    meta: [
      // Primary Meta Tags
      { name: 'description', content: description },
      { name: 'author', content: 'Wangari Irene' },

      // Open Graph / Facebook
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:site_name', content: defaultMeta.siteName },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: canonicalUrl },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:creator', content: defaultMeta.twitterHandle },

      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'theme-color', content: '#1B194E' }
    ],
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ],
    ...(schema && {
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(schema)
        }
      ]
    })
  })
}

/**
 * Generate Person schema for About page
 */
export function getPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Wangari Irene',
    jobTitle: 'Graphic Designer & Digital Marketer',
    url: defaultMeta.siteUrl,
    sameAs: [
      'https://linkedin.com/in/wangari-irene',
      'https://behance.net/wangari-irene',
      'https://instagram.com/qoi_tec'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'Kenya'
    },
    knowsAbout: [
      'Graphic Design',
      'Brand Identity',
      'Digital Marketing',
      'Social Media Marketing',
      'Adobe Creative Suite'
    ]
  }
}

/**
 * Generate LocalBusiness schema
 */
export function getBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Qoi_tec Brands',
    description: defaultMeta.defaultDescription,
    url: defaultMeta.siteUrl,
    email: 'rj.wangari@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressCountry: 'Kenya'
    },
    founder: {
      '@type': 'Person',
      name: 'Wangari Irene'
    },
    serviceType: [
      'Graphic Design',
      'Brand Identity Design',
      'Digital Marketing',
      'Social Media Management'
    ]
  }
}
