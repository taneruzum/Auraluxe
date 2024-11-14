import "./HomePage.css";
import Showcase from "@/Components/Showcase";
import { useRef, useState } from "react";
import videoSrc from "@/images/bb.mp4"; // Video dosyasını içe aktar
import Trend from "@/Components/trend";
import ProductCardsSwiper from "@/Components/ProductCardsSwiper";

export default function HomePage() {
  const videoRef = useRef(null); // Video referansı
  const [isMuted, setIsMuted] = useState(true); // Mute durumu için state

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted; // Ses açma/kapama
      setIsMuted(!videoRef.current.muted); // Mute durumunu güncelle
    }
  };

  return (
    <div className="page-container">
      <div className="video-container">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          playsInline
          controls // Kontrolleri ekleyin
          style={{
            width: "100%",
            height: "auto",
          }}
        />

        {/* Ses açma/kapama butonu */}
        <button
          onClick={toggleMute}
          className="mute-button" // CSS sınıfı kullanılıyor
        >
          {isMuted ? "Ses Kapat" : "Ses Aç"} {/* Duruma göre metin değişir */}
        </button>
      </div>

      <Showcase />
      <Trend />
      <ProductCardsSwiper />
    </div>
  );
}
