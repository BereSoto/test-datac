import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import VueGtag from 'vue-gtag'

const vueGtag: Plugin = ({ app, env }): void => {
  Vue.use(
    VueGtag,
    {
      config: { id: env.GA_ID },
      disabled: true, // Here you could ignore user privacy and set to true
    },
    app.router
  )
}

export default vueGtag
