import "./HomePage.css";
import Showcase from "@/Components/Showcase";
import { useEffect, useRef, useState } from "react";
import videoSrc from "@/images/bb.mp4"; // Video dosyasını içe aktar
import Trend from "@/Components/trend";
import ProductCardsSwiper from "@/Components/ProductCardsSwiper";
import Decor from "@/Components/Decor";
import Decor2 from "@/Components/Decor2";
import { HomeSliderImages } from "@/Constants/constImages";
import { formatPrice, getImageFromBase64 } from "@/utils";
import { getAllProducts } from "@/api/forProduct";
import { fetchAndSetBasketData } from "@/api/forCart";
import { useAccount } from "@/lib/features/user/hooks";

export default function HomePage() {
  const videoRef = useRef(null); // Video referansı
  const [isMuted, setIsMuted] = useState(true); // Mute durumu için state

  const userSession = useAccount();
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Ses açma/kapama
      setIsMuted(!videoRef.current.muted); // Mute durumunu güncelle
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video oynatılamadı:", error);
      });
    }
  }, [videoRef]);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        const ringProducts = response.data.filter(product => product.category === "Yüzük");
        setProducts(ringProducts);
        setLoading(false);
      } catch (error) {
        console.error('Ürünler alınamadı:', error);
      }
    };

    fetchProducts();
  }, []);


  //SEPET VARSA GETİR
  useEffect(() => {
    if (userSession.authControl) {
      fetchAndSetBasketData(userSession._id);
    }
  }, [userSession.authControl])


  return (
    <div className="page-container">
      <div className="relative w-full h-full max-h-[720px] overflow-hidden rounded-2xl bg-red-500">
        <video
          className="w-full h-full object-cover"
          onClick={(e) => {
            e.preventDefault(); // Tıklama davranışını engelle
            e.stopPropagation(); // Olayın yukarı doğru yayılmasını engelle
          }}
          ref={videoRef}
          src={videoSrc}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline
        //controls // Kontrolleri ekleyin
        />

        {/* Ses açma/kapama butonu */}
        {/* <button
          onClick={toggleMute}
          className="mute-button" 
        >
          {isMuted ? "Ses Kapat" : "Ses Aç"}
        </button> */}
      </div>

      <Showcase />
      <Trend />
      {loading ? (<div className="flex w-full flex-col gap-12">
        {Array(1).fill().map((_, index) => (
          <section key={index} className="category-section mt-12">
            <div className="flex gap-4">
              {Array(4).fill().map((_, index) => (
                <div key={index} className="w-full h-64 bg-gray-300 rounded animate-pulse"></div>
              ))}
            </div>
          </section>
        ))}
      </div>) : (
        <ProductCardsSwiper
          product={products.map(product => ({
            _id: product._id,
            image: getImageFromBase64(product.image),
            name: product.name,
            price: formatPrice(product.price)
          }))}
        />)}
      <Decor />
      <Decor2 />
    </div>
  );
}

