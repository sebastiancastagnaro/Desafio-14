

const express = require('express');
const app = express();

// Aquí puedes agregar configuraciones de Express, middleware, etc.

// Rutas
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');
const sessionsRouter = require('./routes/sessions');

// Middleware para parsear JSON
app.use(express.json());

// Usar los routers
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
app.use('/api/sessions', sessionsRouter);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en funcionamiento en el puerto ${PORT}`));

module.exports = app; // Exportar la aplicación para los tests
