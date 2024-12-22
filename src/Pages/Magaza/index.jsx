import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCardsSwiper from "@/Components/ProductCardsSwiper";
import "swiper/css";
import "swiper/css/pagination";
import { Categories } from "@/Constants/constImages";

export default function MagazaPage() {


  const famousBrands = ["Gucci", "Chanel", "Prada", "Cartier", "Tiffany"];

  return (
    <div className="store-page-container mx-auto max-w-screen-xl px-4 py-8">
      {/* Ünlü Markalar Bölümü */}
      <section className="famous-brands mb-12">
        <h2 className="mb-6 text-3xl font-bold uppercase">Ünlü Markalardan</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          className="h-fit w-full py-6"
        >
          {famousBrands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center rounded-full border-2 border-gray-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg">
                <span className="text-lg font-semibold">{brand}</span>
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
      <div className="w-full flex flex-col gap-12">
        {Categories.map((category, index) => (
          <section key={index} className="category-section">
            <h2 className="mb-4 text-2xl font-semibold uppercase">{category.name}</h2>
            <ProductCardsSwiper imagePathProp={category.images} />
          </section>
        ))}
      </div>
    </div>
  );
}
