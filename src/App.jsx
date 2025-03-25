import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Rooms from "./components/Rooms";
import Landliders from "./components/Landliders";
import MyProject from "./components/MyProject";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Landliders />
      <About />
      <Rooms />
      <MyProject />
      {/* <Blog /> */}
    </div>
  );
};

export default App;
