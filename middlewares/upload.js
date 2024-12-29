const multer = require('multer');

// Dosya tipi ve boyut kontrolü (isteğe bağlı)
const storage = multer.memoryStorage(); // Dosyayı bellek üzerinde tutuyoruz

// Multer ayarları
const upload = multer({ storage: storage });

module.exports = upload;
