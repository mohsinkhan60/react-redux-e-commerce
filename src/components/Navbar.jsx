/* eslint-disable react/prop-types */

import { signOut } from "firebase/auth";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/slices/Auth";

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative px-3 py-2 text-sm font-medium hover:text-primary"
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const product = useSelector((state) => state.cart?.products);
  const favorite = useSelector((state) => state.cart.favorites);

  const logout = async (e) => {
    e.preventDefault;
    try {
      await signOut(auth);
      dispatch(removeUser());
      navigate("/auth");
    } catch (error) {
      console.log("Error during sign out...");
    }
  };

  return (
    <nav className="bg-white shadow-sm h-24 items-center flex sticky top-0 left-0 w-full z-[50000]">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800"
            >
              Castro<span className="text-primary">.</span>
            </Link>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <div className="hidden sm:flex items-center">
            <button className="p-2 hover:text-primary">
              <Search className="w-5 h-5" />
            </button>
            <NavLink to="/heart">
              <button className="p-2 hover:text-primary">
                <Heart className="w-5 h-5" />
                <span
                  className={`absolute top-1 right-2 bg-pritext-primary ${
                    favorite?.length > 0 ? "bg-red-500 text-white" : <></>
                  } text-xs w-4 h-4 rounded-full flex items-center justify-center`}
                >
                  {favorite?.length > 0 ? favorite?.length : <></>}
                </span>
              </button>
            </NavLink>

            <div className="relative inline-block">
              <button
                className="p-2 hover:text-primary"
                onClick={() => setShowTooltip(!showTooltip)}
              >
                <User className="w-5 h-5" />
              </button>

              {showTooltip && (
                <div className="bg-slate-400 rounded-md w-32 absolute top-10 left-1/2 transform -translate-x-3/4">
                  <button
                    onClick={logout}
                    className="w-full text-left flex justify-center hover:bg-gray-900 hover:text-white text-black text-sm rounded py-1 px-2"
                  >
                    Logout
                  </button>

                  <button
                    onClick={() => {
                      navigate("/all-products");
                      setShowTooltip(false);
                    }}
                    className="w-full text-left hover:bg-gray-900 flex justify-center hover:text-white text-black text-sm rounded py-1 px-2 mt-1"
                  >
                    All Product
                  </button>

                  <button
                    onClick={() => {
                      navigate("/add-product");
                      setShowTooltip(false);
                    }}
                    className="w-full text-left hover:bg-gray-900 flex justify-center hover:text-white text-black text-sm rounded py-1 px-2 mt-1"
                  >
                    Add Product
                  </button>
                 
                </div>
              )}
            </div>

            <NavLink to="/cart">
              <button className="p-2 hover:text-primary relative">
                <ShoppingCart className="w-5 h-5" />
                <span
                  className={`absolute -top-1 -right-1 bg-pritext-primary ${
                    product?.length > 0 ? " bg-red-500 text-white" : <></>
                  } text-xs w-4 h-4 rounded-full flex items-center justify-center`}
                >
                  {product?.length > 0 ? product?.length : <></>}
                </span>
              </button>
            </NavLink>
          </div>

          <div className="flex items-center sm:hidden">
            <div className="flex sm:items-center">
              <button className="p-2 hover:text-primary">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-primary">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 hover:text-primary">
                <User className="w-5 h-5" />
              </button>
              <NavLink to="/cart">
                <button className="p-2 hover:text-primary relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 bg-pritext-primary bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
              </NavLink>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pritext-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-x-0 sm:hidden bottom-0 top-20 bg-white z-50 flex flex-col h-1/2 transform transition-transform duration-300 ease-in-out">
          <div className="flex-grow flex flex-col pt-2 pb-3 space-y-4 text-center">
            <NavLink to="/" className="text-lg font-medium">
              Home
            </NavLink>
            <NavLink to="/shop" className="text-lg">
              Shop
            </NavLink>
            <NavLink to="/about" className="text-lg">
              About
            </NavLink>
            <NavLink to="/contact" className="text-lg">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
