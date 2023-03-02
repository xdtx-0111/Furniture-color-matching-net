import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite' // 不加这个配置，ElMessage出不来
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  server: { //服务
    host: 'localhost',
    port: 8080, //运行端口号 改为8080
  },
  plugins: [ //插件
    vue(),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass'
      })],
    }),
    // ElementPlus()
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // src 用@代替
    }
  },
  base: './',
})
