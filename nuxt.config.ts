// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/ui'
  ],
  routes: [
    {
      name: 'admin_gui',
      path: '/admin_gui',
      component: 'pages/admin_gui.vue'
    },
  ],
}