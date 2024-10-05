import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Heart from "./pages/Heart";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
import LoginLayout from "./layout/LoginLayout";
import Login from "./pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root Routes */}
        <Route path="/" element={<RootLayout />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="heart" element={<Heart />} />
          <Route path="details/:id" element={<Detail />} />
        </Route>
        <Route path="error" element={<Error />} />
      </Routes>


              {/* Login  */}
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="login" index={true} element={<Login />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
