module.exports = {
  content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    screens: {
      'xs': '250px',
      'sm': '340px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      colors: {
        'pink': '#ffe4cf',
        'strong-pink': '#f6416c',
        'dark': '##403934',
        'dark-blue': '#7fb39c',
        'lighter-blue': '#dbffef',
        'purple-blue': '#7f91b3',
        'light-blue': '#c2d8ff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};
