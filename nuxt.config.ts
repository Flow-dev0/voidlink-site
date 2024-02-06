/** @type {import('tailwindcss').Config} */

const config = {
  devtools: true,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
 //   "./plugins/**/*.{js,ts}",
//    "./app.vue",
  ],
  nuxtIcon: {
    size: '24px', // default <Icon> size applied
    class: 'icon', // default <Icon> class applied
    aliases: {
      'nuxt': 'logos:nuxt-icon',
    }
  },
  plugins: [],
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    '@nuxt/content',
    '@nuxt/image',
  ],
}

module.exports = config;