import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import { VitePWA } from 'vite-plugin-pwa'
import Inspector from 'vite-plugin-vue-inspector'
import { resolve } from 'path'
import { svgBuilder } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    }),
    Inspector(),
    VitePWA({
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'PP Music',
        short_name: 'PP Music',
        description: 'PP Music',
        theme_color: '#db2c1f',
        background_color: '#db2c1f',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      strategies: 'generateSW'
    }),
    svgBuilder('./src/icons/svg/')
  ],
  base: './',
  resolve: {
    alias: [{
      find: '@',
      replacement: resolve(__dirname, 'src')
    }, {
      find: 'components',
      replacement: resolve(__dirname, 'src/components')
    }, {
      find: 'pages',
      replacement: resolve(__dirname, 'src/pages')
    }, {
      find: 'store',
      replacement: resolve(__dirname, 'src/store')
    }]
  },
  server: {
    host: '0.0.0.0',
    hmr: true
  }
})
