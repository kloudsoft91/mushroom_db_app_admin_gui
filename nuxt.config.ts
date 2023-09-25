// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  app: {
    baseURL: '/mushroom_db_app_admin_gui/', // baseURL: '/<repository_name>/'
    buildAssetsDir: 'assets',
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui'
  ],
  routes: [
    {
      name: 'home',
      path: '/',
      component: 'pages/index.vue'
    },
  ],
  //Tailwind CSS config
  TailwindModules: [
    '@nuxtjs/tailwindcss'
  ]
}
