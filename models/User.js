const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, default: '' }, // Opsiyonel adres bilgisi
    city: { type: String, default: '' },    // Opsiyonel şehir bilgisi
    country: { type: String, default: '' }  // Opsiyonel ülke bilgisi
});

// Şifreyi kayıttan önce hash'ler
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);
