const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: { type: String, unique: true, required: true }, // özel bir kimlik alanı
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 0 },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);