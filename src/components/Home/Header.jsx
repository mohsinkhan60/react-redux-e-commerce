/* eslint-disable react/prop-types */
import { ArrowUpRight } from 'lucide-react';


export const Header = () => {


  return (
    <div className="relative overflow-hidden bg-[#EDF0F5] h-5/6 container mx-auto">
      <div className="max-w-7xl mx-auto container px-6 sm:px-10 lg:px-20">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block font-medium xl:inline">Up To</span>{' '} <br />
                <span className="block text-primary font-medium xl:inline">50% </span>
                <span className="block text-black-600 font-medium xl:inline">Discount </span>
              </h1>
              <p className="mt-2 text-base font-medium text-black-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Summer Lookbook - 2020
              </p>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                New Modern Stylist Fashionable Men Wear Jeans Shirt.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <button
                    className="w-full flex items-center justify-center px-8 py-3 border border-black text-base font-medium rounded-md text-black bg-transparent hover:bg-black hover:text-white md:py-4 md:text-lg md:px-10"
                  >
                    Explore Now
                    <ArrowUpRight className="ml-2 -mr-1 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute mb-10 lg:mt-14 lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className=" w-full h-screen lg:object-fill object- sm:h-screen md:h-2/3 lg:w-2/3 lg:h-2/3"
          src={`/home/header2.png`}
          alt="img"
        />
      </div>
    </div>
  );
};

export default Header;
