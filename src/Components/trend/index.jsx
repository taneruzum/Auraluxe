// src/Components/trend/index.jsx


import trendImage from '../../../public/showcase/trendImages/trend.png'; // Resmi içe aktar

const Trend = () => {
  return (
    <div className="flex flex-col items-center mt-"> {/* Üstten boşluk arttırıldı */}
      {/* Resim */}
      <img 
        src={trendImage} 
        alt="Trend" 
        className="mb-6 w-2/5 h-auto rounded-lg" // Resim boyutu büyütüldü
      />
      
      {/* Butonlar */}
      <div className="flex space-x-4">
        <button className="bg-blue-800 text-white rounded-full px-6 py-3 transition-colors duration-300 hover:bg-white hover:text-blue-800 text-lg">
          Öne Çıkanlar
        </button>
        <button className="bg-white text-blue-800 rounded-full px-6 py-3 transition-colors duration-300 hover:bg-blue-800 hover:text-white text-lg">
          Yeni Ürünler
        </button>
        <button className="bg-white text-blue-800 rounded-full px-6 py-3 transition-colors duration-300 hover:bg-blue-800 hover:text-white text-lg">
          Çok Satanlar
        </button>
      </div>
    </div>
  );
};

export default Trend;
