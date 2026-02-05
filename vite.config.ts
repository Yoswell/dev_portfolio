import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        mdx({
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [],
            rehypePlugins: []
        }),
        react()
    ],
    optimizeDeps: {
        include: ['react', 'react-dom', '@mdx-js/react']
    },
    resolve: {
        alias: { "@": "/src" }
    },
    base: './'
})