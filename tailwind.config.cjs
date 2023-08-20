/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/!(calculator|tip-calculator|wofford-homepage|layouts)/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/layouts/BaseLayout.astro'],
    theme: {
        extend: {
            screens: {
                xs: '300px',
                xms: '400px',
                xws: '450px',
            },
            colors: {
                ['moderate-blue']: 'hsl(238, 40%, 52%)',
                ['soft-red']: 'hsl(358, 79%, 66%)',
                ['light-grayish-blue']: 'hsl(239, 57%, 85%)',
                ['pale-red']: 'hsl(357, 100%, 86%)',
                ['dark-blue']: 'hsl(212, 24%, 26%)',
                ['grayish-blue']: 'hsl(211, 10%, 45%)',
                ['light-gray']: 'hsl(223, 19%, 93%)',
                ['very-light-gray']: 'hsl(228, 33%, 97%)',
            },
        },
    },
    plugins: [],
}
