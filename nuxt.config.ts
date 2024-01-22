// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-primevue',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'vue3-carousel-nuxt'
  ],
  imports: {
    dirs: ['stores'],
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  pinia: {
    autoImports: ['defineStore', 'storeToRefs']
  },
  css: ['~/assets/css/main.css', 'primevue/resources/themes/lara-light-green/theme.css'],
  primevue: {
    components: {
      include: [
        'Breadcrumb',
        'RadioButton',
        'Tooltip',
        'TabView',
        'TabPanel',
        'Accordion',
        'AccordionTab',
        'Slider',
        'Checkbox',
        'Dropdown'
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
