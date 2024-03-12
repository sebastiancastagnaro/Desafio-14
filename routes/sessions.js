
const express = require('express');
const router = express.Router();

// Controlador de sesiones
const sessionsController = require('../controllers/sessionsController');

// Rutas para sesiones
router.post('/login', sessionsController.login);
router.post('/logout', sessionsController.logout);

module.exports = router;
