import "./App.css";
import Banner from "./components/Banner/Banner";
import Business from "./components/Business/Business";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Body from "./components/body/Body";

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Hero />
      <Products />
      <Banner/>
      <Business/>
      <Footer/>
    </>
  );
}

export default App;
