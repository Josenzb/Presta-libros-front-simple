const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db_name = path.join(__dirname, '../data', 'prestamos.db');

// Crear carpeta data si no existe
const fs = require('fs');
if (!fs.existsSync(path.join(__dirname, '../data'))) {
  fs.mkdirSync(path.join(__dirname, '../data'));
}

// Conexión
const db = new sqlite3.Database(db_name, (err) => {
  if (err) {
    console.error('Error al conectar la base de datos:', err.message);
  } else {
    console.log('Base de datos SQLite conectada.');
  }
});

// Crear tabla si no existe
db.run(`
  CREATE TABLE IF NOT EXISTS prestamos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    estudiante TEXT NOT NULL,
    id_estudiante TEXT NOT NULL,
    isbn TEXT NOT NULL,
    libro TEXT NOT NULL,
    fechaPrestamo TEXT NOT NULL,
    fechaDevolucion TEXT NOT NULL,
    devuelto INTEGER DEFAULT 0
  )
`);

module.exports = db;
