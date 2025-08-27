const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  price: { type: Number, required: true },
  train_number: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Train', trainSchema);
