const showcaseImages = [
  "showcase/jewelry1.jpg",
  "showcase/jewelry2.jpg",
  "showcase/jewelry3.jpg",
];

export default function Showcase() {
  return (
    <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-center gap-6 py-10 md:justify-between">
      {showcaseImages.map((path, index) => (
        <figure
          key={index}
          className="relative max-w-[400px] overflow-hidden rounded-md md:max-w-[220px] lg:max-w-[300px] xl:max-w-[400px]"
        >
          <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-end justify-center bg-black/40 py-10"></div>
          <img
            src={path}
            alt={`Showcase Image ${index}`}
            className="aspect-[8/9] cursor-pointer object-cover transition-transform duration-500 hover:scale-125"
          />
        </figure>
      ))}
    </div>
  );
}
