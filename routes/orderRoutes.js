const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Sipariş Oluştur
router.post('/create', protect, createOrder);

// Kullanıcının Siparişlerini Getir
router.get('/all', protect, getOrders);

module.exports = router;
