/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { getImageUrl } from "../Shop/Header";

const ProductRow = ({ product, onRemove }) => {
  const [URL, setURL] = useState(null);

  useEffect(() => {
    if (product && product.image) {
      getImageUrl(product.image).then((url) => setURL(url));
    }
  }, [product]);

  return (
    <div className="flex items-center py-4 border-b p-2 sm:p-8">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <img
          src={URL || "/placeholder.svg"}
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
      <div className="w-16 text-right">
        <button
          onClick={() => onRemove(product.id)}
          className="text-gray-500 hover:text-gray-700"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
