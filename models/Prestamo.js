const db = require('../config/db');

class Prestamo {
  static obtenerTodos(callback) {
    db.all('SELECT * FROM prestamos', [], callback);
  }

  static agregar(datos, callback) {
    const { estudiante, id_estudiante, isbn, libro, fechaPrestamo, fechaDevolucion } = datos;
    db.run(
      `INSERT INTO prestamos (estudiante, id_estudiante, isbn, libro, fechaPrestamo, fechaDevolucion)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [estudiante, id_estudiante, isbn, libro, fechaPrestamo, fechaDevolucion],
      callback
    );
  }

  static marcarDevuelto(id, callback) {
    db.run('UPDATE prestamos SET devuelto = 1 WHERE id = ?', [id], callback);
  }
}

module.exports = Prestamo;
