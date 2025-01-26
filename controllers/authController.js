const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Kullanıcı Kaydı
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Bu e-posta adresi zaten kayıtlı." });
        }

        const user = await User.create({ name, email, password });
        res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu!", user });
    } catch (error) {
        res.status(500).json({ message: "Kullanıcı kaydı başarısız oldu.", error });
    }
};

// Kullanıcı Girişi
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "E-posta veya şifre hatalı." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "E-posta veya şifre hatalı." });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({
            message: "Giriş başarılı!",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Giriş işlemi başarısız oldu.", error });
    }
};
// Kullanıcı Bilgilerini Güncelle
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı." });
        }

        // Güncellenebilir alanları kontrol et
        const { name, email, password, address, city, country } = req.body;
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }
        if (address) user.address = address;
        if (city) user.city = city;
        if (country) user.country = country;

        // Güncellenmiş kullanıcıyı kaydet
        const updatedUser = await user.save();
        res.status(200).json({
            message: "Kullanıcı bilgileri güncellendi.",
            user: {
                id: updatedUser.id,
                name: updatedUser.name,
                email: updatedUser.email,
                address: updatedUser.address,
                city: updatedUser.city,
                country: updatedUser.country
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Kullanıcı güncellenemedi.", error });
    }
};
exports.getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // Şifreyi hariç tutuyoruz
        if (!user) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı." });
        }

        res.status(200).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                address: user.address,
                city: user.city,
                country: user.country
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Kullanıcı bilgileri getirilemedi.", error });
    }
};

// Kullanıcıyı Sil
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı." });
        }
        res.json({ message: "Kullanıcı başarıyla silindi." });
    } catch (error) {
        res.status(500).json({ message: "Kullanıcı silinemedi.", error });
    }
};
