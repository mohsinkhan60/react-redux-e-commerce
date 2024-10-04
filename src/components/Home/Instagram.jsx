/* eslint-disable react/prop-types */

const InstagramImage = ({ src, alt }) => (
  <div className="relative overflow-hidden group">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black gap-6 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white font-bold text-[2rem]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        <path strokeWidth={2}  />
        <path d="M8 12h.01" />
        <path d="M12 12h.01" />
        <path d="M16 12h.01" />
      </svg>
    </div>
  </div>
);

const Divider = () => (
  <div className="flex items-center justify-center w-full my-6">
    <div className="border-t border-gray-300 flex-grow"></div>
    <div className="mx-4">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0L13.09 6.26L20 7.27L15 12.14L16.18 19.02L10 15.77L3.82 19.02L5 12.14L0 7.27L6.91 6.26L10 0Z"
          fill="#D1D5DB"
        />
      </svg>
    </div>
    <div className="border-t border-gray-300 flex-grow"></div>
  </div>
);

export const Instagram = () => {
  const images = [
    { src: "/home/instagram-1.jpg", alt: "Fashion image 1" },
    { src: "/home/instagram-2.jpg", alt: "Fashion image 2" },
    { src: "/home/instagram-3.jpg", alt: "Fashion image 3" },
    { src: "/home/instagram-4.jpg", alt: "Fashion image 4" },
    { src: "/home/instagram-5.jpg", alt: "Fashion image 5" },
    { src: "/home/instagram-6.jpg", alt: "Fashion image 6" },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Follow Us On <span className=" text-black px-2">Instagram</span>
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Excepteur sint occaecat cupidatat
      </p>
      <Divider />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <InstagramImage key={index} {...image} />
        ))}
      </div>
    </section>
  );
};
export default Instagram;
