const express = require('express');
const { addProduct, updateProduct, getAllProducts, getProductById, searchProducts, deleteProduct } = require('../controllers/productController');
const upload = require('../middlewares/upload'); // Multer middleware'ini dahil et

const router = express.Router();

// Tüm Ürünleri Getir
router.get('/', getAllProducts);

// Ürün Arama ve Filtreleme
router.get('/search', searchProducts);

// Tek Ürünü Getir
router.get('/:id', getProductById);

// Yeni Ürün Ekle (Resim Yüklemek İçin Multer Middleware Kullanımı)
router.post('/', upload.single('image'), addProduct);

// Ürünü Güncelle (Resim Yüklemek İçin Multer Middleware Kullanımı)
router.put('/:id', upload.single('image'), updateProduct);

// Ürünü Sil
router.delete('/:id', deleteProduct);

module.exports = router;

