import { useDispatch, useSelector } from "react-redux";
import ProductRow from "../components/Heart/ProductRow";
import { removeFromFavorite } from "../store/slices/Cart";

export const Heart = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cart.favorites);

  const handleRemove = (id) => {
    dispatch(removeFromFavorite(id));
  };

  return (
    <div className="py-8 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex items-center py-4 px-8 bg-gray-50 border-b">
          <div className="flex-grow">
            <h2 className="text-lg font-medium text-gray-700">PRODUCT</h2>
          </div>
          <div className="w-24 text-center">
            <h2 className="text-lg font-medium hidden sm:flex text-gray-700">PRICE</h2>
          </div>
          <div className="w-16 text-right">
            <h2 className="text-lg font-medium text-gray-700">REMOVE</h2>
          </div>
        </div>

        {favorites.length > 0 ? (
          favorites.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              onRemove={handleRemove}
            />
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No favorites added.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Heart;
