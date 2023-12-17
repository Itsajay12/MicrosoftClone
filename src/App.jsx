import "./App.css";
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
    </>
  );
}

export default App;
