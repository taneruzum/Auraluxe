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
        res.json({ message: "Giriş başarılı!", token });
    } catch (error) {
        res.status(500).json({ message: "Giriş işlemi başarısız oldu.", error });
    }
};
// Kullanıcı Bilgilerini Güncelle
exports.updateUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "Kullanıcı bulunamadı." });
        }

        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
        }

        const updatedUser = await user.save();
        res.json({ message: "Kullanıcı bilgileri güncellendi.", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Kullanıcı bilgileri güncellenemedi.", error });
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
