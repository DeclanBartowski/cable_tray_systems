// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-swiper'
  ],
  devServer: {
    host: '0.0.0.0'
  },
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
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-green/theme.css'
  ],
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
        'Dropdown',
        'Dialog',
        'Checkbox'
      ]
    }
  },
    postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: false }
})
