import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
import AddProduct from "./pages/AddProduct";
import { Auth } from "./pages/Auth";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import Heart from "./pages/Heart";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

export const App = () => {
  
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} position="top-right" />
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="heart" element={<Heart />} />
          <Route path="details/:id" element={<Detail />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
        <Route path="error" element={<Error />} />
        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
