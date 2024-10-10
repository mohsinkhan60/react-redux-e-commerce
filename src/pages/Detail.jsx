import {
  HeartIcon,
  MagnifyingGlassIcon,
  MinusIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaVimeoV } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage } from "../../firebase";
import { addToCart, addToFavorite } from "../store/slices/Cart";

const getBookById = async (id) => {
  const docRef = doc(db, "Products", id);
  const result = await getDoc(docRef);
  return result.data(); // Return only the data
};

const getImageUrl = (path) => {
  return getDownloadURL(ref(storage, path));
};

const Detail = () => {
  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    getBookById(id).then((value) => {
      setData(value);
    });
  }, [id]);

  useEffect(() => {
    if (data && data.image) {
      getImageUrl(data.image).then((url) => setURL(url));
    }
  }, [data]);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (data) {
      dispatch(addToCart({ ...data, price: data.price * quantity }));
      toast.success("Your Product added to cart.");
    }
  };

  const handleAddFavourite = (e) => {
    e.preventDefault();
    if (data) {
      dispatch(addToFavorite(data));
      toast.success("Your Favorite Product added.");
    }
  };

  return (
    <div className="py-8 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex items-center justify-center bg-gray-100 relative">
          <img
            src={url || "/placeholder.svg"}
            alt={data?.name}
            className="w-1/2 h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{data?.name}</h1>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600">(5 Reviews)</span>
          </div>
          <p className="text-2xl font-bold text-gray-800 mb-4">${data?.price}</p>
          <p className="text-gray-600 mb-4">{data?.description}</p>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button onClick={decrementQuantity} className="p-2">
                <MinusIcon className="h-4 w-4 text-gray-600" />
              </button>
              <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
              <button onClick={incrementQuantity} className="p-2">
                <PlusIcon className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-gray-800 text-white px-6 py-2 rounded"
            >
              Add to cart
            </button>
            <button onClick={handleAddFavourite} className="border border-gray-300 p-2 rounded">
              <HeartIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button className="border border-gray-300 p-2 rounded">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          <div className="mb-4">
            <p className="text-gray-600">SKU: 05</p>
            <p className="text-gray-600">Category: Accessories</p>
            <p className="text-gray-600">Tags: glasses, t-shirts, watches</p>
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
