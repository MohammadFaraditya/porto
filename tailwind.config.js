/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#fbbf24',
        dark: '#262626'
      },
      screens: {
        '2xl': '1320px'
      },
      backgroundImage: {
        'html': "url('dist/img/logo/html.png')",
        'css': "url('dist/img/logo/css.png')",
        'js': "url('dist/img/logo/js.png')",
        'php': "url('dist/img/logo/php.png')",
        'nodejs': "url('dist/img/logo/nodeJS.png')",
        'hapi': "url('dist/img/logo/hapi.png')",
        'tailwind': "url('dist/img/logo/tailwind.png')",
      }
    },
  },
  plugins: [],
}

