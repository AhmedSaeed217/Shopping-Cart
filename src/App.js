import "./App.css";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import ImgSlider from "./Components/ImgSlider/ImgSlider";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import { CartProvider } from "./Context/CartContext";
function App() {
  return (
    <CartProvider>
      <Navbar />
      <ImgSlider />
      <Features />
      <Products />
      <Footer />
    </CartProvider>
  );
}

export default App;
