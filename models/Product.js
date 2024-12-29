const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, // Base64 formatında resim için String kullanıyoruz
    stock: { type: Number, default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);
