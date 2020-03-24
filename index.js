const _ = require('lodash')

module.exports = function({ addUtilities, e, theme, variants }) {
  const utilities = _.fromPairs(
	   _.map(theme('textShadow'), (value, modifier) => {
        const className = modifier === 'default' ? 'text-shadow' : `${e(`text-shadow-${modifier}`)}`
    	   return [
           `.${className}`,
         	{
         		'text-shadow': value,
         	},
    	   ]
     })
  )
  addUtilities(utilities, variants('textShadow'))
}

