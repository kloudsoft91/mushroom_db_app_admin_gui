// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  app: {
    baseURL: '/mushroom_db_app_admin_gui/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  devtools: { enabled: true },
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
  ],
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  }
}
