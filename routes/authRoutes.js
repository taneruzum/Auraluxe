const express = require('express');
const { registerUser, loginUser, updateUser, deleteUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware'); // JWT doğrulama için
const router = express.Router();

// Kullanıcı Kaydı
router.post('/register', registerUser);

// Kullanıcı Girişi
router.post('/login', loginUser);

router.get('/profile', protect, getUserProfile);

// Kullanıcı Bilgilerini Güncelle
router.put('/update', protect, updateUser);

// Kullanıcıyı Sil
router.delete('/delete', protect, deleteUser);

module.exports = router;
