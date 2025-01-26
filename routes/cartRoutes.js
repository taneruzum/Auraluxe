const express = require('express');
const { getCart, addToCart, removeFromCart,decrementFromCart } = require('../controllers/cartController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Kullanıcının Sepetini Getir
router.get('/', protect, getCart);

// Sepete Ürün Ekle
router.post('/add', protect, addToCart);

// Sepetten Ürün Çıkar
router.delete('/remove', protect, removeFromCart);

router.put('/decrease', protect, decrementFromCart);

module.exports = router;
