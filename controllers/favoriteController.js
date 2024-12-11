const Favorite = require('../models/Favorite');

// Kullanıcının Favorilerini Getir
exports.getFavorites = async (req, res) => {
    try {
        const favorites = await Favorite.find({ userId: req.user.id }).populate('productId');
        res.json(favorites);
    } catch (error) {
        res.status(500).json({ message: "Favoriler yüklenemedi.", error });
    }
};

// Favorilere Ürün Ekle
exports.addFavorite = async (req, res) => {
    const { productId } = req.body;

    try {
        const favoriteExists = await Favorite.findOne({ userId: req.user.id, productId });
        if (favoriteExists) {
            return res.status(400).json({ message: "Bu ürün zaten favorilerde." });
        }

        const favorite = new Favorite({ userId: req.user.id, productId });
        await favorite.save();
        res.json({ message: "Ürün favorilere eklendi.", favorite });
    } catch (error) {
        res.status(500).json({ message: "Ürün favorilere eklenemedi.", error });
    }
};

// Favorilerden Ürün Kaldır
exports.removeFavorite = async (req, res) => {
    const { productId } = req.body;

    try {
        await Favorite.findOneAndDelete({ userId: req.user.id, productId });
        res.json({ message: "Ürün favorilerden kaldırıldı." });
    } catch (error) {
        res.status(500).json({ message: "Ürün favorilerden kaldırılamadı.", error });
    }
};
