import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
    integrations: [
        tailwind({
            configFile: './tailwind.config.cjs',
        }),
        react(),
    ],
    redirects: {
        '/': 'https://huffmanks.com',
        '/projects': 'https://huffmanks.com/projects',
    },
})
