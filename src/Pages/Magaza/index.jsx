import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCardsSwiper from "@/Components/ProductCardsSwiper";
import "swiper/css";
import "swiper/css/pagination";
import { Categories } from "@/Constants/constImages";

export default function MagazaPage() {
  const famousBrands = [
    "Gucci",
    "Chanel",
    "Prada",
    "Cartier",
    "Tiffany",
    "Louis Vuitton",
  ];

  return (
    <div className="store-page-container mx-auto max-w-screen-xl px-4 py-8">
      {/* Ünlü Markalar Bölümü */}
      <section className="famous-brands mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold uppercase">
          Ünlü Markalardan
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "custom-pagination-bullet", // Pagination bullet sınıfını özel yapalım
          }}
          className="h-fit w-full py-6"
        >
          {famousBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex items-center justify-center rounded-full border border-gray-200 bg-gradient-to-r from-[#f5e1c7] via-[#d7b79b] to-[#c5a093] p-4 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-md"
                style={{ borderColor: "#d1d5db" }}
              >
                <span className="text-md font-medium text-gray-600">
                  {brand}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ProductCardsSwiper
          imagePaths={famousBrands.map(
            (_, index) => `/images/brand${index + 1}.jpg`,
          )}
        />
      </section>

      {/* Kategoriler Bölümü */}
      <div className="flex w-full flex-col gap-12">
        {Categories.map((category, index) => (
          <section key={index} className="category-section">
            <h2 className="mb-4 text-2xl font-semibold uppercase text-gray-900">
              {category.name}
            </h2>
            <ProductCardsSwiper imagePathProp={category.images} />
          </section>
        ))}
      </div>
    </div>
  );
}
