import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imagePaths = [
  "../../../public/SwiperImages/yüzük1.jpg",
  "../../../public/SwiperImages/yüzük2.jpg",
  "../../../public/SwiperImages/bileklik1.jpg",
  "../../../public/SwiperImages/kolye1.jpg",
  "../../../public/SwiperImages/saat1.jpg",
  "../../../public/SwiperImages/küpe1.jpg",
  "../../../public/SwiperImages/kolye2.jpg",
  "../../../public/SwiperImages/yüzük3.jpg",
];

export default function ProductCardsSwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={4}
      navigation
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      className="mx-auto h-fit w-full max-w-screen-2xl py-12"
    >
      {imagePaths.map((img, index) => (
        <SwiperSlide key={index} className="h-full w-full">
          <section className="h-full w-full max-w-[360px]">
            <figure className="relative flex h-full w-full items-center justify-center">
              <img
                src={img}
                alt={`Swiper Image ${index}`}
                className="aspect-square object-cover"
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-2 px-2 py-3">
              <h2>Ürün Başlığı</h2>
              <p>Ürün Açıklaması</p>
              <button className="rounded-full bg-black/80 px-2.5 py-1 text-sm text-white">
                Sepete Ekle
              </button>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
