import "./App.css";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import ImgSlider from "./Components/ImgSlider/ImgSlider";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ImgSlider />
      <Features />
      <Products />
      <Footer/>
    </div>
  );
}

export default App;
