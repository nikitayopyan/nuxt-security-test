// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-security'],
  server: {
    vite: true,
  },
  security: {
    headers: {
      xXSSProtection: '0',
    }
  }
})