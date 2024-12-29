const Product = require('../models/Product');

// Tüm Ürünleri Getir
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Ürünler yüklenemedi!", error });
    }
};

// Tekil Ürünü Getir
exports.getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: "Ürün bulunamadı!" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: "Ürün bilgisi yüklenemedi!", error });
    }
};

// Yeni Ürün Ekle
exports.addProduct = async (req, res) => {
    const { name, price, description, stock, brand, category } = req.body;

    let imageBase64 = null;

    // Eğer resim dosyası varsa, Base64 formatına dönüştür
    if (req.file) {
        imageBase64 = req.file.buffer.toString('base64'); // Multer ile gelen dosyayı Base64'e dönüştür
    }

    try {
        const product = new Product({
            name,
            price,
            description,
            image: imageBase64,  // Base64 formatında resim
            stock,
            brand,
            category
        });

        await product.save();
        res.status(201).json({ message: "Ürün başarıyla eklendi!", product });
    } catch (error) {
        res.status(500).json({ message: "Ürün ekleme işlemi başarısız oldu.", error });
    }
};


// Ürünleri Arama ve Filtreleme
exports.searchProducts = async (req, res) => {
    const { search, category, brand } = req.query; // Arama terimi, kategori ve marka
    const filter = {};

    // Eğer bir arama terimi girildiyse, ürün adıyla eşleşenleri filtrele
    if (search) {
        filter.name = { $regex: search, $options: 'i' }; // case-insensitive arama
    }

    // Eğer kategori girildiyse, o kategoriye ait ürünleri filtrele
    if (category) {
        filter.category = category;
    }

    // Eğer marka girildiyse, o markaya ait ürünleri filtrele
    if (brand) {
        filter.brand = brand;
    }

    try {
        const products = await Product.find(filter);
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Ürünler yüklenemedi!", error });
    }
};

// Ürünü Güncelle
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, description, stock, brand, category } = req.body;

    let imageBase64 = null;

    // Eğer resim dosyası varsa, Base64 formatına dönüştür
    if (req.file) {
        imageBase64 = req.file.buffer.toString('base64'); // Multer ile gelen dosyayı Base64'e dönüştür
    }

    try {
        const product = await Product.findByIdAndUpdate(
            id,
            {
                name,
                price,
                description,
                image: imageBase64,  // Base64 formatında resim
                stock,
                brand,
                category
            },
            { new: true, runValidators: true } // Yeni güncellenmiş ürünü döner, validasyonları çalıştırır
        );

        if (!product) {
            return res.status(404).json({ message: "Ürün bulunamadı!" });
        }

        res.json({ message: "Ürün başarıyla güncellendi!", product });
    } catch (error) {
        res.status(500).json({ message: "Ürün güncellenemedi!", error });
    }
};

// Ürünü Sil
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Ürün bulunamadı!" });
        }
        res.json({ message: "Ürün başarıyla silindi!" });
    } catch (error) {
        res.status(500).json({ message: "Ürün silinemedi!", error });
    }
};

