const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    safelist: ['dark']
  },
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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            h1: {
              color: theme('colors.transparent'),
              fontWeight: 600,
              lineHeight: '1.25'
            },
            h2: {
              color: theme('colors.gray.900')
            },
            h3: {
              color: theme('colors.gray.900')
            },
            h4: {
              color: theme('colors.gray.900')
            },
            h5: {
              color: theme('colors.gray.900')
            },
            h6: {
              color: theme('colors.gray.900')
            }
          }
        },
        lg: {
          css: {
            h1: {
              lineHeight: '1.25'
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
            h2: {
              color: 'white'
            },
            h3: {
              color: 'white'
            },
            h4: {
              color: 'white'
            },
            h5: {
              color: 'white'
            },
            h6: {
              color: 'white'
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
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
