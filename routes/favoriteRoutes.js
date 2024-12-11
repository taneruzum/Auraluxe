const express = require('express');
const { getFavorites, addFavorite, removeFavorite } = require('../controllers/favoriteController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Kullanıcının Favorilerini Getir
router.get('/', protect, getFavorites);

// Favorilere Ürün Ekle
router.post('/add', protect, addFavorite);

// Favorilerden Ürün Kaldır
router.delete('/remove', protect, removeFavorite);

module.exports = router;
