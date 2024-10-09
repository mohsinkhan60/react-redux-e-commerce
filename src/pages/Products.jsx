/* eslint-disable react/prop-types */
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import { toast } from "react-toastify";
import { addToCart } from "../store/slices/Cart";
import { useDispatch } from "react-redux";
import { getDownloadURL, ref } from "firebase/storage";

// Function to fetch products from Firestore
const ListProducts = async () => {
  const productsCollection = collection(db, "Products");
  const productSnapshot = await getDocs(productsCollection);
  return productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Return an array of product objects
};

const getImageUrl = (path) => {
   return getDownloadURL(ref(storage, path))
}

// ProductCard Component
const ProductCard = ({ id, image, name, price }) => {
   const [url, setURL] = useState()
   useEffect(() => {
      getImageUrl(image).then((url) => setURL(url))
   },[])
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e, productDetails) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(productDetails));
    toast.success("Your product has been added to the cart.");
  };

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
              <button 
                onClick={(e) => handleAddToCart(e, { image, name, price })} 
                className="bg-[#4E4E4E] hover:bg-primary flex-1 font-semibold text-white text-center h-[40px] flex items-center justify-center"
              >
                Add To Cart
              </button>
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
        <p className="text-gray-600">${price}</p>
      </div>
    </Link>
  );
};

// Products Component
export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productData = await ListProducts();
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl sm:px-7 lg:px-10 container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
