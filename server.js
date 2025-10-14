const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Lista de préstamos (en memoria)
let prestamos = [];

// Página principal con formulario
app.get('/', (req, res) => {
  res.render('index');
});

// Registrar préstamo
app.post('/agregar', (req, res) => {
  const { estudiante, id, isbn, libro, fechaPrestamo, fechaDevolucion } = req.body;
  prestamos.push({
    estudiante,
    id,
    isbn,
    libro,
    fechaPrestamo,
    fechaDevolucion,
    devuelto: false,
  });
  res.redirect('/lista');
});

// Lista de préstamos
app.get('/lista', (req, res) => {
  const hoy = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
  res.render('lista', { prestamos, hoy });
});

// Marcar préstamo como devuelto
app.post('/devolver/:index', (req, res) => {
  const index = req.params.index;
  if (prestamos[index]) prestamos[index].devuelto = true;
  res.redirect('/lista');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
