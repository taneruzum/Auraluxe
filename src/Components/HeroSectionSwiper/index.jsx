import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const imagePaths = [
  "SwiperImages/1920x1080.png",
  "SwiperImages/1920x1080v2.png",
];

export default function HeroSectionSwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      className="h-fit w-full"
    >
      {imagePaths.map((img, index) => (
        <SwiperSlide key={index} className="h-full w-full">
          <figure className="relative flex h-full w-full items-center justify-center">
            <img
              src={img}
              alt={`Swiper Image ${index}`}
              className="aspect-video max-h-[1080px] max-w-[1920px]"
            />
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
