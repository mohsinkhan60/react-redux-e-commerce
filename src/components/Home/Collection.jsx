/* eslint-disable react/prop-types */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebase";
import { getImageUrl } from "../Shop/Header";

const ProductItem = ({ id, image, name, price }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [url, setURL] = useState();

  useEffect(() => {
    const fetchImageUrl = async () => {
      const imageUrl = await getImageUrl(image);
      setURL(imageUrl);
    };
    fetchImageUrl();
  }, [image]);

  return (
    <Link to={`/details/${id}`}>
      <div
        className="bg-white p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <img src={url} alt={name} className="w-full h-64 object-cover mb-4" />
          <div
            className={`absolute bottom-0 left-0 right-0 bg-white transition-all duration-300 transform ${
              isHovered ? "translate-y-0 mb-3" : "translate-y-full"
            }`}
            style={{ height: "40px" }}
          >
            <div className="flex gap-1">
              <p className="bg-[#4E4E4E] hover:bg-primary flex-1 font-semibold text-white text-center h-[40px] flex items-center justify-center">
                Add to Cart
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600">${price}</p>
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
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, "Products");
      const productSnapshot = await getDocs(productsCollection);
      const products = productSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductList(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedProducts = [...productList].sort((a, b) => {
    if(activeTab ==="Best Seller"){
        return a.price - b.price;
    }
    if(activeTab ==="New Arrivals"){
      return new Date(b.createdAt) - new Date(a.createdAt)
    }
    if(activeTab ==="Top Rate"){
      return b.price - a.price;
    }
    else{
      return 0;
    }

  });

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <section className="container sm:px-6 lg:px-8 py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Top Collection</h2>
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
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Collection;
