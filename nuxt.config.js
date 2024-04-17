require('dotenv').config();

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  generate: {
    fallback: true
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'The Wedding of Arnold & Gaby',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Saudara terkasih. Kami, Arnold & Gaby ingin mengundang saudara untuk hadir dalam pesta pernikahan kami' },
      { name: 'format-detection', content: 'telephone=no' },
      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'A Tale Galore' },
      { hid: 'og:description', property: 'og:description', content: 'The Wedding of Arnold & Gaby' },
      { hid: 'og:image', property: 'og:image', content: 'https://atalegalore.com/thumbnail.jpeg' },
      { hid: 'og:url', property: 'og:url', content: 'https://atalegalore.com' },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'A Tale Galore' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'The Wedding of Arnold & Gaby' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://atalegalore.com/thumbnail.jpeg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Bellota&display=swap" rel="stylesheet' }
    ]
  },
  server: {
    port: 3003
  },

  env: {
    API_URL: process.env.API_URL,
    SHOW_PHOTO_ORDER: process.env.SHOW_PHOTO_ORDER,
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuex-persist.js', mode: 'client'},
    '~/plugins/gsap.js',
    '~/plugins/moment.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  gsap: {
    /* Module Options */
  },
  pageTransition: {
    // name: 'page',
    // mode: 'out-in',
    // css: false,
  },
  router: {
    // middleware: ['password-protect']
  },
  // passwordProtect: {
  //   enabled: true,
  //   formPath: '/password',
  //   password: 'wedding',
  //   tokenSeed: 101010,
  //   queryString: '_pw',
  //   cookieName: '_password',
  //   cookie: {
  //     prefix: '',
  //     expires: 5
  //   },
  // }
}
