import { fileURLToPath } from 'url'
import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [{
        name: 'Content-Security-Policy',
        content: 'This is my page description.'
      }]
    }
  },
  typescript: {
    typeCheck: false,
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        esModuleInterop: true
      }
    }
  },
  modules: [
    '@nuxtjs/eslint-module'
  ],
  css: ['@/assets/css/style.scss'],
  plugins: [],
  alias: {
    '@svg': fileURLToPath(new URL('./assets/svg', import.meta.url)),
    '@css': fileURLToPath(new URL('./assets/css', import.meta.url)),
    '@img': fileURLToPath(new URL('./assets/img', import.meta.url))
  },
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: `
          `
        }
      }
    }
  },
  components: [
    { global: true, path: '~/components', pathPrefix: false }
  ],
  pages: true,
  devtools: { enabled: true },
  compatibilityDate: '2024-07-03'
})
