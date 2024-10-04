import "./App.css";
import Features from "./Components/Features/Features";
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
    </div>
  );
}

export default App;
