// controllers/cartController.js
const Cart = require('../models/Cart');

// Kullanıcının Sepetini Getir
exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
        if (!cart) {
            return res.status(404).json({ message: "Sepet bulunamadı." });
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: "Sepet yüklenemedi.", error });
    }
};

// Sepete Ürün Ekle
exports.addToCart = async (req, res) => {
    const { productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            cart = new Cart({ userId: req.user.id, items: [] });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ productId, quantity });
        }

        await cart.save();
        res.json({ message: "Ürün sepete eklendi.", cart });
    } catch (error) {
        res.status(500).json({ message: "Ürün sepete eklenemedi.", error });
    }
};
// Sepetteki Üründen Bir Tane Eksilt
exports.decrementFromCart = async (req, res) => {
    const { productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            return res.status(404).json({ message: "Sepet bulunamadı." });
        }

        const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
        if (itemIndex === -1) {
            return res.status(404).json({ message: "Ürün sepetinizde bulunamadı." });
        }

        // Eğer miktar 1 ise, ürünü tamamen çıkar
        if (cart.items[itemIndex].quantity === 1) {
            cart.items.splice(itemIndex, 1);
        } else {
            // Eğer miktar 1'den büyükse sadece miktarı azalt
            cart.items[itemIndex].quantity -= 1;
        }

        await cart.save();
        res.json({ message: "Üründen bir tane eksiltildi.", cart });
    } catch (error) {
        res.status(500).json({ message: "Ürün eksiltme işlemi başarısız.", error });
    }
};

// Sepetten Ürün Çıkar
exports.removeFromCart = async (req, res) => {
    const { productId } = req.body;

    try {
        const cart = await Cart.findOne({ userId: req.user.id });
        if (!cart) {
            return res.status(404).json({ message: "Sepet bulunamadı." });
        }

        cart.items = cart.items.filter(item => item.productId.toString() !== productId);
        await cart.save();
        res.json({ message: "Ürün sepetten çıkarıldı.", cart });
    } catch (error) {
        res.status(500).json({ message: "Ürün sepetten çıkarılamadı.", error });
    }
};
