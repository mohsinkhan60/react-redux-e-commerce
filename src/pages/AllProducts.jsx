/* eslint-disable react/prop-types */
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { getImageUrl } from "../components/Shop/Header";

const deleteUserData = async (uid) => {
  try {
    await deleteDoc(doc(db, "Products", uid));
  } catch (error) {
    console.error("Error deleting user data from Firestore:", error);
  }
};

const ProductCard = ({ id, image, name, price, onDelete }) => {
  const [url, setURL] = useState();
  
  useEffect(() => {
    const fetchImageUrl = async () => {
      const imageUrl = await getImageUrl(image);
      setURL(imageUrl);
    };
    fetchImageUrl();
  }, [image]);

  const handleDelete = async () => {
    await deleteUserData(id);
    onDelete(id);
  };

  return (
    <div className="flex items-center py-4 border-b p-2 sm:p-8">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
        <img src={url} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-medium text-gray-700">{name}</h3>
      </div>
      <div className="text-center w-24">
        <p className="text-lg font-medium text-gray-700">${price}</p>
      </div>
      <div className="w-16 text-right">
        <button onClick={handleDelete} className="flex text-white p-1 rounded-lg bg-red-500 items-center gap-2">
      <Trash2 className="h-4 w-4" />
      Delete
    </button>
      </div>
    </div>
  );
};

export const AllProducts = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, "Products");
      const productSnapshot = await getDocs(productsCollection);
      const products = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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

  const handleDeleteProduct = (id) => {
    setProductList((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  if (loading) {
    return <div>Loading products...</div>; // Loading indicator
  }

  return (
    <div className="py-8 max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">All Products</h2>
      {productList.map((product) => (
        <ProductCard key={product.id} {...product} onDelete={handleDeleteProduct} />
      ))}
    </div>
  );
};

export default AllProducts;
