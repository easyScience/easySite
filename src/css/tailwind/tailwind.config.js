const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    preserveHtmlElements: false,
    content: ['./src/*.pug'],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['nunito', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      blue: colors.sky,
      red: colors.red,
    },
    extend: {
      colors: {
        gray: {
          850: '#212121'
        }
      }
    }
  },
  variants: {
    fill: ['hover', 'focus']
  },
  babel: {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "12.13.0"
          }
        }
      ]
    ]
  }
}
