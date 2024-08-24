module.exports = {
  content: [
    "./src/**/*.{html,scss}", // Ajusta la ruta si es necesario
  ],
  theme: {
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
  plugins: [],
};
