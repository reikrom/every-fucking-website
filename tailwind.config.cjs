/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    // triggered by clasName rather than system media setting
    darkMode: 'class',
    mode: 'jiit',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            primary: {
                25: 'var(--color-primary-25)',
                50: 'var(--color-primary-50)',
                100: 'var(--color-primary-100)',
                200: 'var(--color-primary-200)',
                300: 'var(--color-primary-300)',
                400: 'var(--color-primary-400)',
                500: 'var(--color-primary-500)', // Primary color
                600: 'var(--color-primary-600)',
                700: 'var(--color-primary-700)',
                800: 'var(--color-primary-800)',
                900: 'var(--color-primary-900)',
            },
            secondary: {},
            teritary: {},

            root: {
                'bg-primary': 'var(--bg-primary)',
                'bg-secondary': 'var(--bg-secondary)',
                'bg-alt': 'var(--bg-alt)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-alt': 'var(--text-alt)',
                'border-primary': 'var(--border-primary)',
                'border-secondary': 'var(--border-secondary)',
            },

            // basic utility colors unrelated to brand or theme

            black: 'var(--color-black)',
            white: 'var(--color-white)',
            dark: 'var(--color-dark)',
            dull: 'var(--color-dull)',
            transparent: 'transparent',

            gray: {
                100: 'var(--color-gray-100)',
                200: 'var(--color-gray-200)',
                300: 'var(--color-gray-300)',
                400: 'var(--color-gray-400)',
                500: 'var(--color-gray-500)',
                600: 'var(--color-gray-600)',
                700: 'var(--color-gray-700)',
                800: 'var(--color-gray-800)',
                900: 'var(--color-gray-900)',
            },

            red: {
                50: 'var(--color-red-50)',
                100: 'var(--color-red-100)',
                200: 'var(--color-red-200)',
                300: 'var(--color-red-300)',
                400: 'var(--color-red-400)',
                500: 'var(--color-red-500)',
                600: 'var(--color-red-600)',
                700: 'var(--color-red-700)',
                800: 'var(--color-red-800)',
                900: 'var(--color-red-900)',
            },

            green: {
                50: 'var(--color-green-50)',
                100: 'var(--color-green-100)',
                200: 'var(--color-green-200)',
                300: 'var(--color-green-300)',
                400: 'var(--color-green-400)',
                500: 'var(--color-green-500)',
                600: 'var(--color-green-600)',
                700: 'var(--color-green-700)',
                800: 'var(--color-green-800)',
                900: 'var(--color-green-900)',
            },

            blue: {
                50: 'var(--color-blue-50)',
                100: 'var(--color-blue-100)',
                200: 'var(--color-blue-200)',
                300: 'var(--color-blue-300)',
                400: 'var(--color-blue-400)',
                500: 'var(--color-blue-500)',
                600: 'var(--color-blue-600)',
                700: 'var(--color-blue-700)',
                800: 'var(--color-blue-800)',
                900: 'var(--color-blue-900)',
            },
        },
        extend: {
            zIndex: {
                '-10': '-10',
            },
            // fontFamily: {
            //     sans: ['Matter', ...defaultTheme.fontFamily.sans],
            // },
            fontSize: {
                xl: '1.375rem', // 22px
                '2xl': '1.5625rem', // 25px
                '3xl': '1.875rem', // 30px
                '4xl': '2.5rem', // 40px
                '5xl': '3.125rem', // 50px
                '6xl': '3.75rem', // 60px
                '7xl': '4.375rem', // 70px
            },
            gridTemplateRows: {
                'max-content': 'max-content',
            },
            spacing: {
                '5vw': '5vw', // pull featured sections and navbar in the margin
                '8vw': '8vw', // positions hero img inside the margin
                '10vw': '10vw', // page margin
            },
            height: {
                hero: 'min(60rem, calc(100vh - 10rem))', // screen - navbar height (lg: only)
            },
            maxWidth: {
                '8xl': '96rem',
            },
            maxHeight: {
                '50vh': '50vh', // max height for medium size hero images
                '75vh': '75vh', // max height for giant size hero images
            },
            rotate: {
                '-135': '-135deg',
                135: '135deg',
            },

            // typography: theme => {
            //   // some fontSizes return [size, props], others just size :/
            //   const fontSize = size => {
            //     const result = theme(`fontSize.${size}`)
            //     return Array.isArray(result) ? result[0] : result
            //   }

            //   // const breakout = {
            //   //   marginLeft: 0,
            //   //   marginRight: 0,
            //   //   gridColumn: '2 / span 10',
            //   // }

            //   return {
            //     // DEFAULT only holds shared stuff and not the things that change
            //     // between light/dark
            //     DEFAULT: {
            //       css: [
            //         {
            //           '> *': {
            //             gridColumn: '1 / -1',

            //             [`@media (min-width: ${theme('screens.lg')})`]: {
            //               gridColumn: '3 / span 8',
            //             },
            //           },
            //           p: {
            //             marginTop: 0,
            //             marginBottom: theme('spacing.8'),
            //             fontSize: fontSize('lg'),
            //           },
            //           '> div': {
            //             marginTop: 0,
            //             marginBottom: theme('spacing.8'),
            //             fontSize: fontSize('lg'),
            //           },
            //           a: {
            //             textDecoration: 'none',

            //           },
            //           'a:hover,a:focus': {
            //             textDecoration: 'underline',
            //             outline: 'none',
            //           },
            //           strong: {
            //             fontWeight: theme('fontWeight.medium'),
            //             fontSize: fontSize('lg'),
            //           },
            //           hr: {
            //             marginTop: theme('spacing.8'),
            //             marginBottom: theme('spacing.16'),
            //           },
            //           // pre: {
            //           //   color: 'var(--base05)',
            //           //   backgroundColor: 'var(--base00)',
            //           //   marginTop: 0,
            //           //   marginBottom: theme('spacing.8'),
            //           //   marginLeft: `-${theme('spacing.10vw')}`,
            //           //   marginRight: `-${theme('spacing.10vw')}`,
            //           //   padding: theme('spacing.8'),
            //           //   borderRadius: 0,

            //           //   [`@media (min-width: ${theme('screens.lg')})`]: {
            //           //     borderRadius: theme('borderRadius.lg'),
            //           //     ...breakout,
            //           //   },
            //           // },
            //           // '.embed': {
            //           //   position: 'relative',
            //           //   marginLeft: '-10vw',
            //           //   marginRight: '-10vw',
            //           //   [`@media (min-width: ${theme('screens.lg')})`]: {
            //           //     ...breakout,
            //           //   },
            //           // },
            //           // '.embed > div': {
            //           //   height: '0px',
            //           // },
            //           // '.embed > div > iframe': {
            //           //   height: '100% !important',
            //           //   width: '100% !important',
            //           //   top: '0',
            //           //   left: '0',
            //           //   position: 'absolute',
            //           //   border: 'none',
            //           //   borderRadius: '0 !important',
            //           //   [`@media (min-width: ${theme('screens.lg')})`]: {
            //           //     borderRadius: '0.5rem !important',
            //           //   },
            //           // },
            //           ul: {
            //             marginTop: 0,
            //             marginBottom: theme('spacing.8'),
            //           },
            //           ol: {
            //             marginTop: 0,
            //             marginBottom: theme('spacing.8'),
            //           },
            //           'h1, h2, h3, h4, h5, h6': {
            //             marginTop: 0,
            //             marginBottom: 0,
            //             fontWeight: theme('fontWeight.normal'),

            //             [`@media (min-width: ${theme('screens.lg')})`]: {
            //               fontWeight: theme('fontWeight.medium'),
            //             },
            //           },
            //           // tailwind doesn't stick to this property order, so we can't make 'h3' overrule 'h2, h3, h4'
            //           'h1, h2': {
            //             fontSize: fontSize('2xl'),
            //             marginTop: theme('spacing.20'),
            //             marginBottom: theme('spacing.10'),
            //             [`@media (min-width: ${theme('screens.lg')})`]: {
            //               fontSize: fontSize('3xl'),
            //             },
            //           },
            //           h3: {
            //             fontSize: fontSize('xl'),
            //             marginTop: theme('spacing.16'),
            //             marginBottom: theme('spacing.10'),
            //             [`@media (min-width: ${theme('screens.lg')})`]: {
            //               fontSize: fontSize('2xl'),
            //             },
            //           },
            //           'h4, h5, h6': {
            //             fontSize: fontSize('lg'),
            //             [`@media (min-width: ${theme('screens.lg')})`]: {
            //               fontSize: fontSize('xl'),
            //             },
            //           },
            //           // img: {
            //           //   // images are wrapped in <p>, which already has margin
            //           //   marginTop: 0,
            //           //   marginBottom: 0,
            //           //   borderRadius: theme('borderRadius.lg'),
            //           // },
            //           blockquote: {
            //             fontWeight: theme('fontWeight.normal'),
            //             border: 'none',
            //             borderRadius: theme('borderRadius.lg'),
            //             padding: theme('spacing.8'),
            //             marginTop: 0,
            //             marginBottom: theme('spacing.10'),
            //           },
            //           'blockquote > :last-child': {
            //             marginBottom: 0,
            //           },
            //         },
            //       ],
            //     },
            //     // use prose-light instead of default, so it's easier to see theme differences
            //     light: {
            //       css: [
            //         {
            //           color: theme('colors.dark'),
            //           a: {
            //             color: theme('colors.brand.primary'),
            //           },
            //           p: {
            //             color: theme('colors.dark'),
            //           },
            //           strong: {
            //             color: theme('colors.black'),
            //           },
            //           hr: {
            //             borderColor: theme('colors.gray.200'),
            //           },
            //           code: {
            //             color: theme('colors.gray.800'),
            //           },
            //           'h1, h2, h3, h4, h5, h6': {
            //             color: theme('colors.black'),
            //           },
            //           blockquote: {
            //             color: theme('colors.dark'),
            //             backgroundColor: theme('colors.gray.100'),
            //           },
            //           'thead, tbody tr': {
            //             borderBottomColor: theme('colors.gray.200'),
            //           },
            //         },
            //       ],
            //     },
            //     dark: {
            //       css: [
            //         {
            //           color: theme('colors.slate.500'),
            //           a: {
            //             color: theme('colors.brand.primary'),
            //           },
            //           p: {
            //             color: theme('colors.gray.200'),
            //           },
            //           strong: {
            //             color: theme('colors.white'),
            //           },
            //           hr: {
            //             borderColor: theme('colors.gray.600'),
            //           },
            //           code: {
            //             color: theme('colors.gray.100'),
            //           },
            //           'h1, h2, h3, h4, h5, h6': {
            //             color: theme('colors.white'),
            //           },
            //           blockquote: {
            //             color: theme('colors.slate.500'),
            //             backgroundColor: theme('colors.gray.800'),
            //           },
            //           'thead, tbody tr': {
            //             borderBottomColor: theme('colors.gray.600'),
            //           },
            //         },
            //       ],
            //     },
            //   }
            // },
        },
    },
    plugins: [
        // TODO: Fix later, // module not found,
        // require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
    ],
}
