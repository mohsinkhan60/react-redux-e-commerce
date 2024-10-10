/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc } from "firebase/firestore";
import { StarIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaVimeoV } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getImageUrl } from "./Products";

const getBookById = async (id) => {
   const docRef = doc(db, "Products", id);
   const result = await getDoc(docRef)
   return result;
}
export const ProductDetail = () => {
   const params = useParams()
const [data, setData] = useState()
const [url, setURL] = useState()
   useEffect(() => {
      getBookById(params.id).then((value) => setData(value.data()))
   },[])
   useEffect(() => {
      if(data){
         const imageurl = data.image
         getImageUrl(imageurl).then((url) => setURL(url))
      }
   })

   // console.log(data)
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
       <h1 className="text-3xl font-bold text-gray-800 mb-2">
         {data?.name}
       </h1>
       <div className="flex items-center mb-2">
         {[...Array(5)].map((_, i) => (
           <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
         ))}
         <span className="ml-2 text-gray-600">(5 Reviews)</span>
       </div>
       <p className="text-2xl font-bold text-gray-800 mb-4">
         ${data?.price}
       </p>
       <p className="text-gray-600 mb-4">
         {data?.description}
       </p>
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
  )
}
export default ProductDetail