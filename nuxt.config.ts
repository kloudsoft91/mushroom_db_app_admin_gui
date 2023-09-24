// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  // Configuration options here
  modules: [
    '@nuxt/ui',
    'bootstrap-vue/nuxt'
  ],
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'faker-nuxt',
    ['@nuxtjs/fontawesome', { icons: { solid: ['faHome'] } }]
  ],
  target: 'static',
  router: {
    base: '/mushroom_db_app_admin_gui/'
  },
  components: true,
  //Tailwind CSS config
  TailwindModules: [
    '@nuxtjs/tailwindcss'
  ],
  build: {}
}
