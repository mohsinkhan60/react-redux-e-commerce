import { collection, doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { UploadCloudIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaPlus, FaTags } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db, storage, updateProductPost, updateUserData } from "../../firebase"; // Ensure this path is correct
import { getImageUrl } from "../components/Shop/Header";

export const AddProduct = () => {
  const { id } = useParams();
  console.log(id);
  const [isDisabled, setIsDisabled] = useState(false);
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    price: "",
    description: "", // Added description to state
    date: Date.now(),
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  const handleCreateListing = async (image, name, price, description) => {
    // Include description
    try {
      const imageRef = ref(
        storage,
        `uploads/images/${Date.now()}_${image.name}`
      );
      const uploadResult = await uploadBytes(imageRef, image);

      const productDocRef = doc(collection(db, "Products"));
      await setDoc(productDocRef, {
        id: productDocRef.id,
        image: uploadResult.ref.fullPath,
        name,
        price,
        description, // Save description to Firestore
        date: new Date(),
      });
    } catch (error) {
      console.error("Error uploading image or creating document:", error);
      throw error; // Re-throw to catch in handleSubmit
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);

    try {
      await handleCreateListing(
        formData.image,
        formData.name,
        formData.price,
        formData.description
      );

      toast.success("Listing created successfully!");

      setFormData({
        image: null,
        name: "",
        price: "",
        description: "",
        date: Date.now(),
      });

      navigate("/shop");
    } catch (error) {
      console.error("Error creating listing:", error);
      toast.error("Error creating listing. Please try again.");
    } finally {
      setIsDisabled(false);
    }
  };

  useEffect(() => {
    const getProductDetails = async () => {
      const response = await updateUserData(id);

      const url = await getImageUrl(response?.image || response?.imageURL).then(
        (url) => url
      );

      console.log(url);

      setFormData({
        ...formData,
        image: url || response?.image || response?.imageURL || "",
        name: response?.name || "",
        price: response?.price || "",
        description: response?.description || "",
        date: Date.now(),
      });
    };
    getProductDetails();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setFormData]);

  const handleEdit = async (e) => {
    e.preventDefault();
    await updateProductPost(id, formData);
    navigate("/shop");
  };

  return (
    <div className="container mx-auto p-4 pt-20 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">{id ? "Edit" : "Add"} Product</h1>
      <form className="space-y-6">
        <div className="flex items-center justify-center bg-white p-4 relative w-80 max-w-md h-64 mx-auto">
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 z-10"
            accept="image/jpeg, image/png"
            required
          />
          {formData.image ? (
            <img
            src={
              typeof formData?.image === "object"
                ? URL.createObjectURL(formData?.image)
                : formData?.image
            }
              alt="Uploaded Preview"
              className="w-80 max-w-md h-64 object-cover p-2 border"
            />
          ) : (
            <div className="w-80 max-w-md h-64 border-2 border-dashed rounded-lg p-4 flex flex-col items-center justify-center text-center cursor-pointer transition-colors relative">
              <UploadCloudIcon className="size-8" />
              <p className="text-lg font-semibold text-gray-700 mb-2">
                Drag your image here, or Browse
              </p>
              <p className="text-sm text-gray-500">
                Support JPG, PNG, JPEG files
              </p>
            </div>
          )}
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter product name"
            required
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <FaTags className="inline mr-2" />
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter price"
              required
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              <FaTags className="inline mr-2" />
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter description"
              required
              rows={4}
            />
          </div>
        </div>

        <div>
          <button
            onClick={id ? handleEdit : handleSubmit}
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isDisabled}
          >
            <FaPlus className="mr-2" />
            {id ? "Edit" : "Add"} Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
