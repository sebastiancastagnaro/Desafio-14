

const express = require('express');
const router = express.Router();

// Controlador de carritos
const cartsController = require('../controllers/cartsController');

// Rutas para carritos
router.get('/:userId', cartsController.getCartByUserId);

module.exports = router;
