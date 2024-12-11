const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

// Sipariş Oluştur
router.post('/', protect, createOrder);

// Kullanıcının Siparişlerini Getir
router.get('/', protect, getOrders);

module.exports = router;
