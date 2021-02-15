import colors from 'vuetify/es5/util/colors'

export default {
  // See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-dev
  dev: process.env.NODE_ENV !== 'production',

  // See https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-env
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - sprout-clean',
    title: 'sprout-clean',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Style resources module: https://github.com/nuxt-community/style-resources-module/
  styleResources: {
    sass: [],
    scss: [],
    less: [],
    stylus: [],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify', // https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss', '~/assets/overrides.sass'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.teal.base,
          secondary: colors.teal.lighten5, // '#f9aa33',
          tertiary: colors.teal.darken4,
          quaternary: colors.blueGrey.lighten4,
          accent: colors.teal.lighten2, // '#82B1FF',
          error: colors.error, // '#FF5252',
          info: colors.info, // '#2196F3',
          success: colors.success, // '#4CAF50',
          warning: colors.amber.lighten1, // '#FFC107',
        },
      },
    },
    treeShake: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // Nuxt.js lets you upload your dist files to your CDN for maximum performances,
    // simply set the publicPath to your CDN.
    // publicPath: 'https://cdn.nuxtjs.org',},
    devtools: true,
  },

  // See https://nuxtjs.org/docs/2.x/features/file-system-routing
  router: {
    routeNameSplitter: '/',
  },
}
