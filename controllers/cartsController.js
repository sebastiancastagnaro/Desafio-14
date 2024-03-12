

// Aquí suponemos que tienes un modelo llamado Cart que define la estructura de tus carritos
const Cart = require('../models/cart');

// Controlador de carritos
exports.getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
