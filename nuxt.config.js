/** @type {import('@nuxt/types').NuxtConfig} */
const nuxtConfig = {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  env: {
    // Poner el código de rastreo por proyecto
    GA_ID: '',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'plantilla-kuntica-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/main.scss', '@/assets/styles/foot.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},
  // Style resources  module configuration (https://github.com/nuxt-community/style-resources-module)
  styleResources: {
    // your settings here
    sass: [
      './assets/styles/abstract/_variables.scss',
      './assets/styles/abstract/_functions.scss',
      './assets/styles/abstract/_mixins.scss',
      './assets/styles/abstract/_placeholders.scss',
    ],
    scss: [],
    less: [],
    stylus: [],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

export default nuxtConfig
