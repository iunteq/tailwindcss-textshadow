# tailwindcss-textshadow
A Utility Plugins for controlling Text Shadow of an text element.



|  Class   |   Properties  |
|----------|-------------|
| `.text-shadow`   | `text-shadow: 0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%);` |
| `.text-shadow-sm` | `text-shadow: 1px 1px 3px rgb(36 37 47 / 25%);`|
| `.text-shadow-md` | `text-shadow: 0px 1px 2px rgb(30 29 39 / 19%), 1px 2px 4px rgb(54 64 147 / 18%)`|
| `.text-shadow-lg` | `text-shadow: 3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)`|
| `.text-shadow-xl` | `text-shadow: 1px 1px 3px rgb(0 0 0 / 29%), 2px 4px 7px rgb(73 64 125 / 35%)`|
| `.text-shadow-none` | `text-shadow: none`|



## :bulb: Features
> Minimal Set-up.

> Ready to use out of the box.

> Has default preset shadows with variants.

> Users will be able to **`override`** and **`extend`** defaults the same way they can with Tailwind's built-in styles.


## Installation & changes in _tailwind.config.js_

#### Yarn

```sh
yarn add tailwindcss-textshadow --dev
```

#### npm

```sh
npm i --save-dev tailwindcss-textshadow
```

#### :heavy_check_mark: import the plugin

Add the plugin to the `plugins` array in your Tailwind configuration file `(tailwind.config.js)`.

```javascript
plugins: [
  require('tailwindcss-textshadow')
]
```
> :beer: **Congratulations! You are ready to use `text-shadow` in your project.**



## How to use

#### No text shadow

Use `.text-shadow-none` to remove an existing text shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.

```html
<span class="text-shadow-none"></span>
```

#### Responsive

To control the textshadow of an text element at a specific breakpoint, add a `{screen}:` prefix to any existing _text shadow utility_. For example, use `xl:text-shadow-lg` to apply the `text-shadow-lg` utility at only large screen sizes and above.

For more information about Tailwind's responsive design features, check out the [Responsive Design](https://tailwindcss.com/docs/responsive-design) documentation.

```html
<div class="text-shadow sm:text-shadow-sm md:text-shadow-md lg:text-shadow-lg xl:text-shadow-xl ...">
  <!-- ... -->
</div>
```


## Customizing

### Text Shadow

By default this plugin provides drop text shadow utilities with five modifires, and a utility for removing existing text shadows. You can change, add, or remove these by editing the `theme.textShadow` section of your Tailwind config.

If a `default` text shadow is provided, it will be used for the *non-suffixed* `.text-shadow` utility. Any other keys will be used as suffixes, for example the key `'2xl'` will create a corresponding `.text-shadow-2xl` utility.

#### To override the default 


```javascript
// tailwind.config.js
module.exports = {
  theme: {
     textShadow: {
        'default': '0 2px 0 #000',
        'md': '0 2px 2px #000',
        'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
        'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
     }
   }
 }

```

#### To extend the default

```javascript

// tailwind.config.js
module.exports = {
  theme: {
    // ...
    extend: {
      // ...
      textShadow: {
        '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
        '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      },
    },
  },
}
  
```

### Responsive and pseudo-class variants

By default, only responsive, hover and focus variants are generated for text shadow utilities.

You can control which variants are generated for the text shadow utilities by modifying the **`textShadow`** property in the variants section of your tailwind.config.js file.

For example, this config will also generate active and group-hover variants:

> Use the name **`textShadow`** under variants object.

```javascript
// tailwind.config.js
module.exports = {
  variants: {
    // ... 
    -   textShadow: ['responsive', 'hover', 'focus'],
    +   textShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  }
}
```


## Credits

- [Adam Wathan](https://github.com/adamwathan)
- [Contributors](https://github.com/iunteq/tailwindcss-textshadow/graphs/contributors)

> :green_heart: If you :+1: this, then please give a :star:. Thank you.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
