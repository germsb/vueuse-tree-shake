import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Analizer from 'rollup-plugin-visualizer';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Analizer({
      filename: './dist/stats.html',
      title: 'Rentool App',
      template: 'sunburst',
      sourcemap: true,
  }) as any,
  ],
  build: {
    sourcemap: true,
},
})
