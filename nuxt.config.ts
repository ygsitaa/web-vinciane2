import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    baseURL: '/web-vinciane2/',
    head: {
      title: 'Vinciane Hodiamont | Auteure – Livres TDAH pour enfants',
      meta: [
        { name: 'description', content: 'Vinciane Hodiamont, auteure de livres pour enfants TDAH. Découvrez la Bibliothèque Tribusix, des conseils pour parents et bien plus.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600&display=swap' }
      ]
    }
  }
})