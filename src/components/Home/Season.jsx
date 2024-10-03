import { ArrowRight } from "lucide-react";

export const Season = () => {
  return (
   <div className="relative w-full h-auto md:h-[400px] lg:h-[500px] overflow-hidden bg-blue-50">
   <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
     <div className="bg-[#FFFFFF] p-6 md:p-8 lg:p-12 rounded-lg shadow-lg w-full">
       <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 text-center">
         End of Season Clearance Sale
       </h1>
       <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700 mb-4 text-center">
         Up to 50%
       </p>
       <p className="text-gray-600 mb-6 text-center">
         Welcome to the new range of shaving products from master barber. We
         have over three decades of experience in the male grooming industry.
       </p>
       <div className="flex justify-center">
         <button className="bg-gray-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold flex items-center hover:bg-gray-800 transition duration-300">
           Shop Now
           <ArrowRight className="ml-2 h-5 w-5" />
         </button>
       </div>
     </div>
   </div>
 </div>
  );
};
export default Season;
