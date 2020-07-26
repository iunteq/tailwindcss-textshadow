
const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({ addUtilities, e, theme, variants }) {
  const textShadow = theme('textShadow', {})
  
  const textShadowVariants = variants('textShadow', [])

  const utilities = _.fromPairs(
     _.map(textShadow, (value, modifier) => {
        const className = modifier === 'default' ? 'text-shadow' : `${e(`text-shadow-${modifier}`)}`
         return [
           `.${className}`,
          {
            'text-shadow': value,
          },
         ]
     })
  )

  addUtilities(utilities, textShadowVariants)
},
{
  theme: {
    textShadow: {
      default: '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)',
      sm: '1px 1px 3px rgb(36 37 47 / 25%)',
      md: '0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%)',
      lg: '3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)',
      xl: '1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)',
      none: 'none',
    },
  },
  variants: {
    textShadow: ['responsive', 'hover', 'focus'],
  }
})
