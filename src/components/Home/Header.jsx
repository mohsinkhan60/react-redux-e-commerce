/* eslint-disable react/prop-types */
import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';

const NavigationArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="p-2 bg-white hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
    aria-label={`Navigate ${direction}`}
  >
    {direction === 'left' ? <ArrowLeft className="w-6 h-6" /> : <ArrowRight className="w-6 h-6" />}
  </button>
);

export const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const handleExplore = () => {
    console.log('Explore button clicked');
  };

  const handleNavigation = (direction) => {
    setCurrentSlide((prev) => {
      if (direction === 'left') {
        return prev === 1 ? totalSlides : prev - 1;
      } else {
        return prev === totalSlides ? 1 : prev + 1;
      }
    });
  };

  return (
    <div className="relative overflow-hidden bg-[#EDF0F5] h-svh container mx-auto">
      <div className="max-w-7xl mx-auto">
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
                    onClick={handleExplore}
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
      <div className="lg:absolute  mt-0 lg:mt-14 lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className=" w-full h-screen lg:object-fill object-contain  sm:h-screen md:h-96 lg:w-2/3 lg:h-2/3"
          src={`/home/header${currentSlide}.png`}
          alt={`Slide ${currentSlide}`}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4">
        <div className="text-xl font-semibold mr-2 ml-36 text-gray-600">
          {[1, 2, 3].map((num) => (
            <span key={num} className={num === currentSlide ? 'text-red-500' : 'text-black-400'}>
              {num.toString().padStart(2, '0')}
              {num !== 3 && ' / '}
            </span>
          ))}
        </div>
        <div className="flex mb-56 mr-28 space-x-2">
          <NavigationArrow direction="left" onClick={() => handleNavigation('left')} />
          <NavigationArrow direction="right" onClick={() => handleNavigation('right')} />
        </div>
      </div>
    </div>
  );
};

export default Header;
