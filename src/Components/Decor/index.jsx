const HighJewelrySection = () => {
  return (
    <section className="w-full bg-white py-16">
        {/* Üst Başlık ve Görsel */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Sol Resim */}
          <div className="max-w-[425px] w-full ">
            <img
              src="/decor/decor1.jpg"
              alt="Decorative jewelry"
              className="h-full w-full object-cover aspect-square"
            />
          </div>

          {/* Dörtlü Görsel Grid */}
          <div className="grid max-w-[425px] w-full grid-cols-2 gap-2">
            <img
              src="/decor/banner-01.jpg"
              alt="Banner 1"
              className="h-full w-full rounded-lg object-cover aspect-square"
            />
            <img
              src="/decor/decor2.jpg"
              alt="Decor 2"
              className="h-full w-full rounded-lg object-cover aspect-square"
            />
            <img
              src="/decor/decor3.jpg"
              alt="Decor 3"
              className="h-full w-full rounded-lg object-cover aspect-square"
            />
            <img
              src="/decor/subbanner-01.jpg"
              alt="Sub Banner 1"
              className="h-full w-full rounded-lg object-cover aspect-square"
            />
          </div>

          {/* Ortalanmış ve Daha Büyük Logo */}
          <div className="max-w-[480px] flex w-full items-center justify-center">
            <img
              src="/decor/logodecor.png"
              alt="Decor Logo"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
    </section>
  );
};

export default HighJewelrySection;
