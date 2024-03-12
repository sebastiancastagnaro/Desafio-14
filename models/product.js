const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  // Puedes agregar más campos según tus necesidades
});

module.exports = mongoose.model('Product', productSchema);
