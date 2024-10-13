/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../../firebase";
import { addToCart } from "../../store/slices/Cart";

const Head = ({ search, setSearch, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-4 pr-4 py-2 hidden md:flex rounded-lg mx-10 border border-gray-300"
      />
      <div className="flex items-center">
        <div className="mr-4">
          <span className="mr-2 text-gray-600">Sort by</span>
          <select
            className="border rounded p-1 cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popularity">Popularity</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export const getImageUrl = (path) => {
  return getDownloadURL(ref(storage, path));
};

const ProductCard = ({ id, image, name, price, isNew }) => {
  const [url, setURL] = useState();
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        const imageUrl = await getImageUrl(image);
        setURL(imageUrl);
      } catch (error) {
        console.error("Error fetching image URL:", error);
      }
    };
    fetchImageUrl();
  }, [image]);

  const handleAddToCart = (e, productDetails) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(productDetails));
    toast.success("Your product has been added to the cart.");
  };

  return (
    <Link to={`/details/${id}`}>
      <div
        className="bg-white p-4 rounded-lg shadow-lg  flex flex-col h-full transition-transform duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img src={url} alt={name} className="w-full h-64 object-cover mb-4" />
          {isNew && (
            <span className="absolute top-2 right-2 bg-cyan-400 text-white px-2 py-1 text-xs font-bold rounded">
              New
            </span>
          )}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white transition-all duration-300 transform ${
              isHovered ? "translate-y-0 mb-3" : "translate-y-full"
            }`}
            style={{ height: "40px" }}
          >
            <div className="flex gap-1">
              <button
                onClick={(e) => handleAddToCart(e, { id, image, name, price })}
                className="bg-[#4E4E4E] hover:bg-primary flex-1 font-semibold text-white text-center h-[40px] flex items-center justify-center"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">${price}</p>
      </div>
    </Link>
  );
};

const Header = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const productsCollection = collection(db, "Products");
    const productSnapshot = await getDocs(productsCollection);
    const products = productSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProductList(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedProducts = [...productList].sort((a, b) => {
    if (sortBy === "priceLow") return a.price - b.price;
    if (sortBy === "priceHigh") return b.price - a.price;
  });

  return (
    <div className="max-w-7xl sm:px-7 lg:px-10 container mx-auto px-4 py-16">
      <Head
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedProducts
          .filter((product) => {
            return (
              search.toLowerCase() === "" ||
              (product.name &&
                product.name.toLowerCase().includes(search.toLowerCase()))
            );
          })
          .map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default Header;
