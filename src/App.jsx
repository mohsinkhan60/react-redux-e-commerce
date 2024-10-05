import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
import About from "./pages/About";
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

      {/* Auth  */}
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index={true} element={<Auth />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
