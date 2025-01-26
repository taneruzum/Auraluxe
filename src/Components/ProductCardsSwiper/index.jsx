import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { handleAddToBasket } from "@/lib/features/basket/actions";

export default function ProductCardsSwiper({ product }) {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else if (width < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    handleResize(); // Check the screen width on initial render

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on component unmount
    };
  }, []);


  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay, Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={slidesPerView}
      navigation
      // autoplay={{
      //   delay: 4000,
      //   disableOnInteraction: false,
      // }}
      loop={true}
      pagination={{ clickable: true }}
      className="mx-auto h-fit w-full max-w-screen-2xl py-12"
    >
      {product?.map((product) => (
        <SwiperSlide key={product._id} className="sm:max-w-[360px] w-full h-full  ">
          <section className="h-full w-full ">
            <figure className="relative flex h-full w-full items-center justify-center">
              <img
                src={product.image}
                alt={`Swiper Image ${product.name}`}
                className="overflow-hidden rounded-sm aspect-square object-cover"
              />
            </figure>
            <div className="flex w-full flex-col items-center gap-2 px-2 py-3">
              <h2 className="text-base xl:text-lg" >{product.name}</h2>
              <p className="text-sm xl:text-base">{product.price} TL</p>
              <button onClick={() => handleAddToBasket(product)} className="rounded-full bg-black/80 px-4 py-2 text-sm text-white">
                Sepete Ekle
              </button>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
