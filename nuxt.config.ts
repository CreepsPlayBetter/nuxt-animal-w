export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/image-edge'
  ],
  
  supabase: {
    key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  },

  css: ['~~/assets/main.scss']
})

