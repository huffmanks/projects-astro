/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/!(calculator|tip-calculator|wofford-homepage|layouts)/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/layouts/BaseLayout.astro'],
    theme: {
        extend: {
            screens: {
                xs: '300px',
            },
        },
    },
    plugins: [],
}
