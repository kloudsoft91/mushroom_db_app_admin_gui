// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  devtools: { enabled: true },
  routes: [
    {
      name: 'admin_gui',
      path: '/admin_gui',
      component: 'pages/admin_gui.vue'
    },
  ],
}