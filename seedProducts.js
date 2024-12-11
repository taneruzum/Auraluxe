const mongoose = require('mongoose');
const Product = require('./models/Product'); // Product modelini içe aktar
const dotenv = require('dotenv');

// .env dosyasını yükleyin
dotenv.config();
console.log("MongoDB URI:", process.env.MONGO_URI);

// MongoDB bağlantısını kur
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB bağlantısı başarılı!');
    })
    .catch((error) => {
        console.error('MongoDB bağlantısı başarısız:', error);
        process.exit(1);
    });

// Sahte ürün verileri
const fakeProducts = [
    {
        name: 'Altın Yüzük',
        price: 750,
        description: '24 ayar altın yüzük',
        image: 'https://via.placeholder.com/150',
        stock: 10,
        brand: 'Altın Marka',
        category: 'Yüzük',
    },
    {
        name: 'Gümüş Kolye',
        price: 150,
        description: 'Parlak taşlı gümüş kolye',
        image: 'https://via.placeholder.com/150',
        stock: 25,
        brand: 'Gümüş Moda',
        category: 'Kolye',
    },
    {
        name: 'Pırlanta Küpe',
        price: 1200,
        description: 'Işıltılı pırlanta küpe',
        image: 'https://via.placeholder.com/150',
        stock: 5,
        brand: 'Pırlanta Efsane',
        category: 'Küpe',
    },
];

// Sahte ürünleri MongoDB'ye ekle
const seedProducts = async () => {
    try {
       

        // Yeni ürünleri ekle
        await Product.insertMany(fakeProducts);
        console.log('Sahte ürünler başarıyla eklendi!');

 // Daha önce eklenmiş ürünleri silmek için:
        await Product.deleteMany(); // Opsiyonel: Veritabanını temizler
        console.log('Eski ürünler silindi.');
        
        // MongoDB bağlantısını kapat
        mongoose.connection.close();
    } catch (error) {
        console.error('Ürün ekleme başarısız:', error);
        mongoose.connection.close();
    }
};

seedProducts();
