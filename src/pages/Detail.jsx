import {
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaVimeoV,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { products } from "../data/Products";
import { addToCart } from "../store/slices/cartSlice";

export const Detail = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const [productDetails, setProductDetails] = useState({});

  const handleAddToCart = (e, productDetails) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(productDetails));
    alert("Product added successfully");
  };

  useEffect(() => {
    const data = products.find((product) => product.id.toString() === id);
    setProductDetails(data);
  }, [id]);

  return (
    <div className="py-8 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex items-center justify-center bg-gray-100 relative">
          <img
            src={productDetails?.image || "/placeholder.svg"}
            alt={productDetails?.name}
            className="w-1/2 h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {productDetails?.name}
          </h1>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600">(5 Reviews)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-4">
            ${productDetails?.price?.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-4">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. sed ut perspic atis
            unde omnis iste natus error sit voluptam accusan enim ipsam voluptam
            quia voluptas sit aspern odit aut fugit.
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Armchair chair is made.</li>
            <li>Used on the seat and backrest.</li>
            <li>Solid wood and chipboard.</li>
          </ul>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button onClick={decrementQuantity} className="p-2">
                <MinusIcon className="h-4 w-4 text-gray-600" />
              </button>
              <span className="px-4 py-2 border-x border-gray-300">
                {productDetails?.quantity}
              </span>
              <button onClick={incrementQuantity} className="p-2">
                <PlusIcon className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <button
              onClick={(e) => handleAddToCart(e, productDetails)}
              className="bg-gray-800 text-white px-6 py-2 rounded"
            >
              Add to cart
            </button>
            <button className="border border-gray-300 p-2 rounded">
              <HeartIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="border border-gray-300 p-2 rounded">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">SKU: 05</p>
            <p className="text-gray-600">Category: Accessories</p>
            <p className="text-gray-600">Tags: glasses,t-shirts,watches</p>
          </div>
          <div>
            <p className="text-gray-800 font-semibold mb-2">Follow Us:</p>
            <div className="flex gap-2">
              <FaFacebookF className="text-gray-600 h-5 w-5" />
              <FaTwitter className="text-gray-600 h-5 w-5" />
              <FaVimeoV className="text-gray-600 h-5 w-5" />
              <FaGooglePlusG className="text-gray-600 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detail;
