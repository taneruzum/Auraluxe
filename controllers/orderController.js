const Order = require('../models/Order');
const Cart = require('../models/Cart');

// Sipariş Oluştur
exports.createOrder = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({ message: "Sepet boş!" });
        }

        const totalAmount = cart.items.reduce((total, item) => total + item.quantity * item.productId.price, 0);
        const order = new Order({ userId: req.user.id, items: cart.items, totalAmount });

        await order.save();
        cart.items = []; // Sepeti boşalt
        await cart.save();

        res.status(201).json({ message: "Sipariş oluşturuldu!", order });
    } catch (error) {
        res.status(500).json({ message: "Sipariş oluşturulamadı.", error });
    }
};

// Kullanıcının Siparişlerini Getir
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.user.id }).populate('items.productId');
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Siparişler yüklenemedi.", error });
    }
};
