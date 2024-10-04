export const TotalPrice = () => {
   return (
     <div className="flex items-center justify-center md:justify-end px-0 md:px-44 p-4">
       <div className="bg-white rounded-lg md:border p-6 w-full max-w-md">
         <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">PAYMENT DETAILS</h2>
         <div className="space-y-3">
           <div className="flex justify-between items-center">
             <span className="text-gray-500">Cart Subtotal</span>
             <span className="text-gray-800">$155.00</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="text-gray-500">Shipping</span>
             <span className="text-gray-800">$15.00</span>
           </div>
           <div className="flex justify-between items-center">
             <span className="text-gray-500">VAT</span>
             <span className="text-gray-800">$00.00</span>
           </div>
           <div className="border-t border-gray-200 pt-3 mt-3">
             <div className="flex justify-between items-center">
               <span className="text-gray-500 font-medium">Order Total</span>
               <span className="text-red-500 font-medium">$170.00</span>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
 };
 
 export default TotalPrice;
 