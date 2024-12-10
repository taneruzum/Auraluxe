import "./HomePage.css";
import Showcase from "@/Components/Showcase";
import { useEffect, useRef, useState } from "react";
import videoSrc from "@/images/bb.mp4"; // Video dosyasını içe aktar
import Trend from "@/Components/trend";
import ProductCardsSwiper from "@/Components/ProductCardsSwiper";
import Decor from "@/Components/Decor";
import Decor2 from "@/Components/Decor2";

export default function HomePage() {
  const videoRef = useRef(null); // Video referansı
  const [isMuted, setIsMuted] = useState(true); // Mute durumu için state

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
      <ProductCardsSwiper />
      <Decor />
      <Decor2 />
    </div>
  );
}
