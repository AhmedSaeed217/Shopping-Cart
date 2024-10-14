import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { CartProvider } from "./Context/CartContext";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
