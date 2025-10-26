const Prestamo = require('../models/Prestamo');

exports.mostrarFormulario = (req, res) => {
  res.render('index');
};

exports.agregarPrestamo = (req, res) => {
  Prestamo.agregar(req.body, (err) => {
    if (err) console.error(err.message);
    res.redirect('/lista');
  });
};

exports.mostrarLista = (req, res) => {
  Prestamo.obtenerTodos((err, prestamos) => {
    if (err) console.error(err.message);
    const hoy = new Date().toISOString().split('T')[0];
    res.render('lista', { prestamos, hoy });
  });
};

exports.marcarDevuelto = (req, res) => {
  const id = req.params.id;
  Prestamo.marcarDevuelto(id, (err) => {
    if (err) console.error(err.message);
    res.redirect('/lista');
  });
};
