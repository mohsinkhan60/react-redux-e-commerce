/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price, isNew }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/details/${id}`}>
      <div
        className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover mb-4"
          />
          {isNew && (
            <span className="absolute top-2 right-2 bg-cyan-400 text-white px-2 py-1 text-xs font-bold rounded">
              New
            </span>
          )}

          {/* Add card text */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white transition-all transition-600 transform ${
              isHovered ? "translate-y-0 mb-3" : "translate-y-full"
            }`}
            style={{ height: "40px" }}
          >
            <div className="flex gap-1">
              <svg
                className="hover:bg-primary bg-black text-white h-[40px] w-10"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              <p className="bg-[#4E4E4E] hover:bg-primary flex-1 font-semibold text-white text-center h-[40px] flex items-center justify-center">
                Add card
              </p>
              <svg
                className="hover:bg-primary bg-black text-white h-[40px] w-10"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

const TabButton = ({ label, isActive, onClick }) => (
  <button
    className={`px-4 py-2 font-medium ${
      isActive ? "text-gray-800 border-b-2 border-gray-800" : "text-gray-500"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const Divider = () => (
  <div className="flex items-center justify-center w-full my-8">
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

export const Collection = () => {
  const [activeTab, setActiveTab] = useState("Best Seller");

  const BestSeller = [
    {
      id: 1,
      name: "Cold Crewneck Sweater",
      price: 70.3,
      image: "/home/shop-1.jpg",
    },
    {
      id: 2,
      name: "Multi-Way Ultra Crop Top",
      price: 50.0,
      image: "/home/shop-2.jpg",
      isNew: true,
    },
    { id: 3, name: "Side-Tie Tank", price: 40.0, image: "/home/shop-3.jpg" },
    {
      id: 4,
      name: "Cold Crewneck Sweater",
      price: 60.3,
      image: "/home/shop-4.jpg",
    },
  ];
  const NewArrival = [
    {
      id: 1,
      name: "Multi-Way Ultra Crop Top",
      price: 50.0,
      image: "/home/shop-1.jpg",
      isNew: true,
    },
    {
      id: 2,
      name: "Cold Crewneck Sweater",
      price: 70.3,
      image: "/home/shop-5.jpg",
    },

    { id: 3, name: "Side-Tie Tank", price: 40.0, image: "/home/shop-6.jpg" },
    {
      id: 4,
      name: "Cold Crewneck Sweater",
      price: 60.3,
      image: "/home/shop-4.jpg",
    },
  ];
  const TopRatted = [
    {
      id: 1,
      name: "Multi-Way Ultra Crop Top",
      price: 50.0,
      image: "/home/shop-1.jpg",
      isNew: true,
    },
    {
      id: 2,
      name: "Cold Crewneck Sweater",
      price: 70.3,
      image: "/home/shop-7.jpg",
    },

    {
      id: 3,
      name: "Cold Crewneck Sweater",
      price: 60.3,
      image: "/home/shop-34.jpg",
    },
    { id: 4, name: "Side-Tie Tank", price: 40.0, image: "/home/shop-36.jpg" },
  ];

  return (
    <section className="container sm:px-6 lg:px-8 py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Our Top Collection
      </h2>
      <p className="text-center text-gray-600 mb-8">
        There are some products that we featured for you to choose your best
      </p>
      <Divider />
      <div className="flex justify-center space-x-4 mb-8">
        <TabButton
          label="Best Seller"
          isActive={activeTab === "Best Seller"}
          onClick={() => setActiveTab("Best Seller")}
        />
        <TabButton
          label="New Arrivals"
          isActive={activeTab === "New Arrivals"}
          onClick={() => setActiveTab("New Arrivals")}
        />
        <TabButton
          label="Top Rate"
          isActive={activeTab === "Top Rate"}
          onClick={() => setActiveTab("Top Rate")}
        />
      </div>
      {activeTab === "Best Seller"
        ? "Best Seller"
        : activeTab === "New Arrivals"
        ? "New Arrival"
        : "Top Ratted"}

      {activeTab === "Best Seller" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BestSeller.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      ) : activeTab === "New Arrivals" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {NewArrival.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TopRatted.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Collection;