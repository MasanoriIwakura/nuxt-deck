module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-deck',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Source+Code+Pro"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    { src: '~/node_modules/highlight.js/styles/github.css', lang: 'css' }
  ],
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/eagle.js'
  ],
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      'markdown-it-highlightjs'
    ]
  },
  axios: {}
}

