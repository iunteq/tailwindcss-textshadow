# tailwindcss-textShadow
A Utility Plugins for Text Shadow like Tailwindcss default boxshadow with theme and variants option.


## Installation

#### Yarn
```
yarn add tailwindcss-textshadow --dev
```
#### npm
```
npm i --save-dev tailwindcss-textshadow
```
## Add following changes in tailwind.config.js

#### import the plugin

Add the plugin to the `plugins` array in your Tailwind configuration file `(tailwind.config.js)`.

```javascript
plugins: [
  require('tailwindcss-textShadow')()
]
```

#### Set your own text shadow

You can change, add, or remove textShadow property by editing the theme.textShadow section of your Tailwind config.

If a default shadow is provided, it will be used for the non-suffixed `.text-shadow utility`. Any other keys will be used as suffixes, for example the key '2' will create a corresponding `.text-shadow-2` utility.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
      md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      h1: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      2xl: '0 25px 50px -12px rgba(0, 0, 0, .25)',
      brand: '0 35px 60px -15px rgba(0, 0, 0, .3)',
      outline: '0 0 0 3px rgba(66,153,225,0.5)',
      focus: '0 0 0 3px rgba(66,153,225,0.5)',
      'none': 'none',
    }
  }
}

```


#### Set Variants in Tailwind Config file

Can use [Tailwind's own variants](https://tailwindcss.com/docs/state-variants/)...

```javascript
// tailwind.config.js
variants: {
//...
	textShadow: ['responsive', 'hover'],
  //...
},
```

## How to use

#### Responsive
To control the textshadow of an text element at a specific breakpoint, add a {screen}: prefix to any existing textShadow utility. For example, use md:text-shadow-h1 to apply the text-shadow-h1 utility at only medium screen sizes and above.

```html
<div class="text-shadow sm:text-shadow-md md:text-shadow-h1 lg:text-shadow-xl xl:text-shadow-2xl ...">
  <!-- ... -->
</div>
```

