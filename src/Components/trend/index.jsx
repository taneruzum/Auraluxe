// src/Components/trend/index.jsx

import trendImage from "/showcase/trendImages/trend.png"; // Resmi içe aktar

const Trend = () => {
  return (
    <div className="mt- flex flex-col items-center">
      {" "}
      {/* Üstten boşluk arttırıldı */}
      {/* Resim */}
      <img
        src={trendImage}
        alt="Trend"
        className="mb-6 h-auto w-2/5 rounded-lg" // Resim boyutu büyütüldü
      />
      {/* Butonlar */}
      <div className="flex space-x-4">
        <button className="rounded-full bg-blue-800 px-6 py-3 text-lg text-white transition-colors duration-300 hover:bg-white hover:text-blue-800">
          Öne Çıkanlar
        </button>
        <button className="rounded-full bg-white px-6 py-3 text-lg text-blue-800 transition-colors duration-300 hover:bg-blue-800 hover:text-white">
          Yeni Ürünler
        </button>
        <button className="rounded-full bg-white px-6 py-3 text-lg text-blue-800 transition-colors duration-300 hover:bg-blue-800 hover:text-white">
          Çok Satanlar
        </button>
      </div>
    </div>
  );
};

export default Trend;
