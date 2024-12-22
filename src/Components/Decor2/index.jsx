export default function Index() {
  return (
    <div className="hidden w-full sm:grid grid-cols-3 gap-6 ">
      {/* Decor 2 */}
      <div className="max-w-[480px] w-full">
        <img
          src="/decor/logodecor2.png"
          alt="Decor 4"
          className="h-auto w-full object-cover aspect-square"
        />
      </div>

      {/* Decor 4 */}
      <div className="max-w-[480px] w-full ">
        <img
          src="/decor/decor5.jpg"
          alt="Decor 5"
          className="h-auto w-full object-cover aspect-square "
        />
      </div>

      {/* Decor 3 */}
      <div className="max-w-[480px] w-full">
        <img
          src="/decor/decor4.jpg" // Eğer varsa üçüncü görselin yolu
          alt="Decor 3"
          className="h-auto w-full object-cover aspect-square"
        />
      </div>
    </div>
  );
}
