import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCardsSwiper from "@/Components/ProductCardsSwiper";
import "swiper/css";
import "swiper/css/pagination";

export default function MagazaPage() {
  const categories = [
    {
      name: "Yüzük",
      images: [
        "/images/yuzuk1.jpg",
        "/images/yuzuk2.jpg",
        "/images/yuzuk3.jpg",
      ],
    },
    {
      name: "Kolye",
      images: [
        "/images/kolye1.jpg",
        "/images/kolye2.jpg",
        "/images/kolye3.jpg",
      ],
    },
    {
      name: "Küpe",
      images: ["/images/kupe1.jpg", "/images/kupe2.jpg", "/images/kupe3.jpg"],
    },
    {
      name: "Bileklik",
      images: [
        "/images/bileklik1.jpg",
        "/images/bileklik2.jpg",
        "/images/bileklik3.jpg",
      ],
    },
  ];

  const famousBrands = ["Gucci", "Chanel", "Prada", "Cartier", "Tiffany"];

  return (
    <div className="store-page-container mx-auto max-w-screen-xl px-4 py-8">
      {/* Ünlü Markalar Bölümü */}
      <section className="famous-brands mb-12">
        <h2 className="mb-6 text-3xl font-bold">Ünlü Markalardan</h2>
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
      {categories.map((category, index) => (
        <section key={index} className="category-section mb-12">
          <h2 className="mb-4 text-2xl font-bold">{category.name}</h2>
          <ProductCardsSwiper imagePaths={category.images} />
        </section>
      ))}
    </div>
  );
}
