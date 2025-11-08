const axios = require('axios');

exports.mostrarProductos = async (req, res) => {
  try {
    const respuesta = await axios.get('https://api.restful-api.dev/objects');
    const productos = respuesta.data;
    res.render('productos', { productos });
  } catch (error) {
    console.error('Error al obtener datos de la API:', error);
    res.render('productos', { productos: [] });
  }
};
