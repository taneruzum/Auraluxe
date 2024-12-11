// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.protect = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1]; // Bearer token formatında

    if (!token) {
        return res.status(401).json({ message: 'Token gereklidir' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        res.status(401).json({ message: 'Geçersiz veya süresi dolmuş token' });
    }
};


/*
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: "Erişim Reddedildi. Token Gerekli." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Kullanıcı bilgilerini request'e ekler
        next();
    } catch (error) {
        res.status(401).json({ message: "Geçersiz Token!" });
    }
};

module.exports = authMiddleware;*/
