const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/dbConnection');

// Rota Dosyaları
const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');


dotenv.config(); // .env dosyasındaki değişkenleri yükler
connectDB(); // MongoDB veritabanına bağlanır

const app = express();

// Middleware'ler
app.use(express.json());
app.use(morgan('dev'));

// Rotalar
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/favorites', favoriteRoutes);

// 404 Endpoint Hatası
app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint bulunamadı." });
});
//app.use(errorHandler);
// Genel Hata Middleware'i
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "Sunucu hatası." });
});

// Sunucuyu Dinle
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor...`));









/*const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/dbConnection');

// Rota Dosyaları
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');

dotenv.config(); // .env dosyasındaki değişkenleri yükler
connectDB(); // MongoDB veritabanına bağlanır

const app = express();

// Middleware'ler
app.use(express.json()); // JSON formatında gelen veriyi okur
app.use(morgan('dev')); // HTTP isteklerini loglar (geliştirme için)

// Rotalar
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/favorites', favoriteRoutes);

//app.use(errorHandler)
// 404 Hata Yönetimi
app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint bulunamadı." });
});

// Sunucuyu Dinle
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor...`));*/
