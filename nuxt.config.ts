// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-swiper',
    'vue-yandex-maps/nuxt'
  ],
	yandexMaps: {
		apiKey: 'feb05bcb-4657-41d0-9253-ae1b80dcf4a8'
	},
  devServer: {
    host: '0.0.0.0'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      baseAPI: process.env.BASE_API
    },
  },
  yandexMaps: {
    apikey: 'b1b1f0d8-af65-4ce4-8911-b8207fa4cc06',
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
