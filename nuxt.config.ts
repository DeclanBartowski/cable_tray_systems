// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-primevue',
    '@vueuse/nuxt',
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['~/assets/css/main.css', 'primevue/resources/themes/lara-light-green/theme.css'],
  primevue: {
    components: {
      include: [
        'Checkbox',
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Raleway: [400, 500, 600],
      Montserrat: [400, 500, 600],
      display: 'swap'
    }
  },
  devtools: { enabled: false }
})
