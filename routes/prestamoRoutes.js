const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController');

router.get('/', prestamoController.mostrarFormulario);
router.post('/agregar', prestamoController.agregarPrestamo);
router.get('/lista', prestamoController.mostrarLista);
router.post('/devolver/:id', prestamoController.marcarDevuelto);

module.exports = router;
