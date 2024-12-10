export default function Index() {
  return (
    <div className="flex space-x-4">
      {/* Decor 2 */}
      <div className="h-auto w-1/3">
        <img
          src="/decor/logodecor2.png"
          alt="Decor 4"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Decor 4 */}
      <div className="h-auto w-1/3">
        <img
          src="/decor/decor5.jpg"
          alt="Decor 5"
          className="h-auto w-full object-cover"
        />
      </div>

      {/* Decor 3 */}
      <div className="h-auto w-1/3">
        <img
          src="/decor/decor4.jpg" // Eğer varsa üçüncü görselin yolu
          alt="Decor 3"
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
