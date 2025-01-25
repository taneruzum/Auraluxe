
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ProductCardsSwiper from "@/Components/ProductCardsSwiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/api/forProduct";
import { formatPrice, getImageFromBase64 } from "@/utils";

const famousBrands = [
  "Gucci",
  "Chanel",
  "Prada",
  "Cartier",
  "Tiffany",
  "Louis Vuitton",
];

export default function MagazaPage() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.data);
        //console.log(response.data);
        // Kategorileri belirle
        const uniqueCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (error) {
        console.error('Ürünler alınamadı:', error);
      }
    };

    fetchProducts();
  }, []);


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
      {loading ? (<div className="flex w-full flex-col gap-12">
        {Array(3).fill().map((_, index) => (
          <section key={index} className="category-section">
            <h2 className="mb-4 text-2xl font-semibold uppercase text-gray-900">
              <div className="h-6 bg-gray-300 rounded w-1/3 animate-pulse"></div>
            </h2>
            <div className="flex gap-4">
              {Array(4).fill().map((_, index) => (
                <div key={index} className="w-full h-64 bg-gray-300 rounded animate-pulse"></div>
              ))}
            </div>
          </section>
        ))}
      </div>) : (
        <div className="flex w-full flex-col gap-12">
          {categories.map((category, index) => (
            <section key={index} className="category-section">
              <h2 className="mb-4 text-2xl font-semibold uppercase text-gray-900">
                {category}
              </h2>
              <ProductCardsSwiper
                product={products
                  .filter(product => product.category === category)
                  .map(product => ({
                    image: getImageFromBase64(product.image),
                    name: product.name,
                    price: formatPrice(product.price)
                  }))}
              />
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
