import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages 项目页挂载在仓库子路径下：
  // https://prompt-to-harness.github.io/ch02-pages-lab-20261025-claude/
  // 若不设置 base，构建产物的资源路径会是 /assets/xxx（站点根路径），
  // 在子路径部署下会 404，因此这里必须带上仓库名作为前缀。
  base: '/ch02-pages-lab-20261025-claude/',
  plugins: [react()],
})
