/* eslint-disable react/prop-types */

import { Filter } from "lucide-react";
import { useState } from "react";
import { products } from "../../data/Products";
import { Link } from "react-router-dom";

const Head = () => (
  <div className="flex flex-col md:flex-row justify-between items-center mb-6 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="sm:flex items-center mb-4 md:mb-0 hidden md:block">
      <button className="flex items-center mr-4 text-gray-600 hover:text-gray-800">
        <Filter className="w-5 h-5 mr-2" />
        Filter
      </button>
      <span className="text-gray-600">Showing 1-12 of 50 Results</span>
    </div>
    <div className="flex items-center">
      <div className="mr-4">
        <span className="mr-2 text-gray-600">Short by</span>
        <select className="border rounded p-1">
          <option>9</option>
          <option>12</option>
          <option>24</option>
        </select>
      </div>
      <div className="mr-4">
        <span className="mr-2 text-gray-600">Short by</span>
        <select className="border rounded p-1">
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      {/* <div className="flex">
        <button className="p-2 bg-gray-800 text-white mr-2">
          <Grid className="w-5 h-5" />
        </button>
        <button className="p-2 border">
          <List className="w-5 h-5" />
        </button>
      </div> */}
    </div>
  </div>
);

const ProductCard = ({ id, image, name, price, isNew }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/details/${id}`}>
    <div
      className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={name} className="w-full h-64 object-cover mb-4" />
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
export const Header = () => {
  return (
    <div className="max-w-7xl sm:px-7 lg:px-10 container mx-auto px-4 py-16">
      <Head />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
export default Header;
