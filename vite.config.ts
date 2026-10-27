import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For a project repository, use '/repository-name/'.
// For a user site repository named username.github.io, use '/'.
export default defineConfig({
  plugins: [react()],
  base: '/GTM/',
})