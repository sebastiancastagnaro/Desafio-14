

const express = require('express');
const router = express.Router();

// Controlador de productos
const productsController = require('../controllers/productsController');

// Rutas para productos
router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getProductById);

module.exports = router;
