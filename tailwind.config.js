module.exports = {
  content: [
    "./src/**/*.{html,scss}", // Ajusta la ruta si es necesario
  ],
  theme: {
    screens: {
      'iphone13pro': '390px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        beidge:{
          200: '#F5F5DC',
        },
        micolor: '#708091'
      },
      fontFamily: {
        pacifico: ['pacifico', 'sans-sherif'],
        salome: ['salomeRegular', 'sans-sherif']
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
