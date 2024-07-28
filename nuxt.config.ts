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
		apiKey: 'e40eb9fd-fdef-4717-9ac9-e5947d51696f'
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
    apikey: 'e40eb9fd-fdef-4717-9ac9-e5947d51696f',
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
