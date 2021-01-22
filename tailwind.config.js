const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'ping-once': 'ping 1s cubic-bezier(0, 0, 0.2, 1)',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
