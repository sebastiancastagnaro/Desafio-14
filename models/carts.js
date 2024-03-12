

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Puedes agregar más campos según tus necesidades
});

module.exports = mongoose.model('Cart', cartSchema);
