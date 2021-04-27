const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: colors.trueGray,
        orange: colors.orange,
        pink: colors.pink,
        lime: colors.lime,
        emerald: colors.emerald,
        cyan: colors.cyan,
        indigo: colors.indigo,
        purple: colors.purple,
        rose: colors.rose,
        'light-blue': colors.lightBlue
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter var',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/inter-var-latin.woff2") format("woff2")'
          }
        }
      ])
    }
  ]
}
