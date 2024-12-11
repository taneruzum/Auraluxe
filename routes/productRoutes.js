const express = require('express');
const {
    getAllProducts,
    getProductById,
    addProduct,
    searchProducts,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController'); // Doğru import

const router = express.Router();

// Tüm Ürünleri Getir
router.get('/', getAllProducts);

// Ürün Arama ve Filtreleme
router.get('/search', searchProducts);

// Tek Ürünü Getir
router.get('/:id', getProductById);

// Ürün Ekle
router.post('/', addProduct);

// Ürünü Güncelle
router.put('/:id', updateProduct);

// Ürünü Sil
router.delete('/:id', deleteProduct);

module.exports = router;

