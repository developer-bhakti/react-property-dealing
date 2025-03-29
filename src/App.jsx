import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Landliders from "./components/Landliders";
import MyProject from "./components/MyProject";
import Blog from "./components/Blog";
import InteriorProducts from "./components/InteriorProducts";
import Customer from "./components/Customer";
import Dream from "./components/Dream";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Landliders />
      <About />
      <Rooms />
      <MyProject />
      <Blog />
      <InteriorProducts />
      <Customer />
      <Dream />
    </div>
  );
};

export default App;
