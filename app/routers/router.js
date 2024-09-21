let express = require('express');
let router = express.Router();

// Importa los controladores
const libros = require('../controllers/libros.controller.js');

// Rutas para el modelo Libros

// Crear un nuevo libro
router.post('/api/libros/create', libros.create);

// Obtener todos los libros
router.get('/api/libros/all', libros.retrieveAllLibros);

// Obtener un libro por su ID
router.get('/api/libros/onebyid/:id', libros.getLibroById);

// Actualizar un libro por su ID
router.put('/api/libros/update/:id', libros.updateById);

// Eliminar un libro por su ID
router.delete('/api/libros/delete/:id', libros.deleteById);

// Exporta el enrutador
module.exports = router;
