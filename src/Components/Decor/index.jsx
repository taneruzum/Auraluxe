const HighJewelrySection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Üst Başlık ve Görsel */}
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          {/* Sol Resim */}
          <div className="w-full lg:w-1/4">
            <img
              src="/decor/decor1.jpg"
              alt="Decorative jewelry"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Dörtlü Görsel Grid */}
          <div className="grid w-full grid-cols-2 gap-2 lg:w-1/4">
            <img
              src="/decor/banner-01.jpg"
              alt="Banner 1"
              className="h-full w-full rounded-lg object-cover"
            />
            <img
              src="/decor/decor2.jpg"
              alt="Decor 2"
              className="h-full w-full rounded-lg object-cover"
            />
            <img
              src="/decor/decor3.jpg"
              alt="Decor 3"
              className="h-full w-full rounded-lg object-cover"
            />
            <img
              src="/decor/subbanner-01.jpg"
              alt="Sub Banner 1"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          {/* Ortalanmış ve Daha Büyük Logo */}
          <div className="flex w-full items-center justify-center lg:w-2/4">
            <img
              src="/decor/logodecor.png"
              alt="Decor Logo"
              className="h-auto w-3/4 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighJewelrySection;
