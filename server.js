const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const prestamoRoutes = require('./routes/prestamoRoutes');
const apiRoutes = require('./routes/apiRoutes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', prestamoRoutes);
app.use('/', apiRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
