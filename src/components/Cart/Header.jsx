/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/slices/Cart";
import { ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { getImageUrl } from "../Shop/Header";

const ProductRow = ({ product, dispatch }) => {
  const [URL, setURL] = useState(null);

  useEffect(() => {
    if (product) {
      const imageurl = product.image;
      getImageUrl(imageurl).then((url) => setURL(url));
    }
  }, [product]);

  return (
    <div className="flex items-center py-4 border-b p-2 sm:p-8">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={URL}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-700">{product.name}</h3>
        <p className="text-sm text-gray-500">Color: {product.color}</p>
        <p className="text-sm text-gray-500">Size: {product.size}</p>
      </div>
      <div className="text-center w-24">
        <p className="text-lg font-medium hidden sm:flex text-gray-700">
          ${product.price}
        </p>
      </div>
      <div className="flex items-center justify-center w-32">
        <button
          onClick={() => dispatch(decrementQuantity(product.id))}
          className="text-gray-500 hidden sm:flex hover:text-gray-700"
        >
          <MinusIcon className="h-5 w-5" />
        </button>
        <span className="mx-2 w-8 hidden sm:flex text-center">
          {product.quantity.toString().padStart(2, "0")}
        </span>
        <button
          onClick={() => dispatch(incrementQuantity(product.id))}
          className="text-gray-500 hidden sm:flex hover:text-gray-700"
        >
          <PlusIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="text-center w-24">
        <p className="text-lg font-medium text-gray-700">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>
      <div className="w-16 text-right">
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className="text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const List = ({ totalQuantity }) => {
  return (
    <div className="flex items-center justify-center md:justify-end px-0 md:px-44 p-4">
      <div className="bg-white rounded-lg md:border p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          PAYMENT DETAILS
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Shipping</span>
            <span className="text-gray-800">$15.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Total Quantity</span>
            <span className="text-gray-800">{totalQuantity}</span>
          </div>
        </div>
        <Link to="/shop">
          <button className="inline-flex mt-7 items-center justify-center rounded-md text-sm font-medium text-white bg-black hover:bg-black/90 transition-colors h-10 px-4 py-2 w-full sm:w-auto">
            <ShoppingCartIcon className="mr-2 h-4 w-4" />
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalQuantity = cart.products
    ? cart.products.reduce((acc, product) => acc + (product.quantity || 0), 0)
    : 0;

  const totalPrice = cart.products
    ? cart.products.reduce(
        (acc, product) => acc + (product.price * product.quantity || 0),
        0
      )
    : 0;

  return (
    <div className="py-8 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      {cart.products && cart.products.length > 0 ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex items-center py-4 px-8 bg-gray-50 border-b">
            <div className="flex-grow">
              <h2 className="text-lg font-medium text-gray-700">PRODUCT</h2>
            </div>
            <div className="w-24 text-center">
              <h2 className="text-lg font-medium hidden sm:flex text-gray-700">
                PRICE
              </h2>
            </div>
            <div className="w-32 text-center">
              <h2 className="text-lg font-medium hidden sm:flex text-gray-700">
                QUANTITY
              </h2>
            </div>
            <div className="w-24 text-center">
              <h2 className="text-lg font-medium text-gray-700">TOTAL</h2>
            </div>
            <div className="w-16 text-right">
              <h2 className="text-lg font-medium text-gray-700">REMOVE</h2>
            </div>
          </div>
          {cart.products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              dispatch={dispatch}
            />
          ))}
          <List totalQuantity={totalQuantity} />
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex items-center py-4 px-8 bg-gray-50 border-b">
            <div className="flex-grow">
              <h2 className="text-lg font-medium text-gray-700">No Products</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;