module.exports = {
  content: ['./pages/**/*.{js, jsx, ts}', './components/**/*.{js, jsx, ts}'],
  plugins: [require('daisyui'), require('tailwind-scrollbar')],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: 'light', // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ':root', // The element that receives theme color CSS variables
  },
  theme: {
    extend: {
      colors: {
        dbd7de: '#dbd7de',
        bg1: 'rgba(0, 0, 0, 0.3)',
        292929: '#292929',
        575757: '#575757',
      },
      screens: {
        pc: '800px',
        bargone: '1300px',
        likeZone: '1280px',
      },
    },
  },
}
