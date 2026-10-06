const siteUrl = 'https://www.alessioch.com'
const siteTitle = 'Alessio Chiffi - Senior Frontend Engineer in London'
const siteDescription = 'Alessio Chiffi is a Senior Frontend Engineer based in London, building fast websites and web apps with JavaScript, TypeScript, Vue, Nuxt and React. Currently at Radley Yeldar.'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-06',
  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
  ],
  app: {
    head: {
      title: siteTitle,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: siteDescription },
        { name: 'author', content: 'Alessio Chiffi' },
        { name: 'google-site-verification', content: '3BPc7eZ8ea-RCCRsCfLy0702XijgbFdHXo9nTxCEgsk' },
        { property: 'og:type', content: 'profile' },
        { property: 'og:site_name', content: 'alessioch.com' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: `${siteUrl}/logo.png` },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: `${siteUrl}/logo.png` },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: '/favicon.png',
        },
        { rel: 'canonical', href: siteUrl },
        {
          rel: 'alternate',
          type: 'text/markdown',
          title: 'LLM-friendly summary',
          href: '/llms.txt',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            'name': 'Alessio Chiffi',
            'url': siteUrl,
            'image': `${siteUrl}/logo.png`,
            'jobTitle': 'Senior Frontend Engineer',
            'description': siteDescription,
            'worksFor': {
              '@type': 'Organization',
              'name': 'Radley Yeldar',
            },
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'London',
              'addressCountry': 'GB',
            },
            'alumniOf': {
              '@type': 'CollegeOrUniversity',
              'name': 'Sapienza University of Rome',
            },
            'knowsAbout': [
              'JavaScript',
              'TypeScript',
              'Vue',
              'Nuxt',
              'React',
              'Umbraco CMS',
              'Web performance',
              'Core Web Vitals',
              'Continuous integration',
              'AI SDK',
              'Google Gemini',
            ],
            'sameAs': [
              'https://www.linkedin.com/in/alessiochiffi/',
            ],
          }),
        },
      ],
    },
  },
  components: [
    '~/components',
    { path: '~/icons', global: true },
  ],
  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [300, 400, 600] },
    ],
  },
  nitro: {
    compressPublicAssets: true,
  },
  build: {
    transpile: ['gsap'],
  },
})
