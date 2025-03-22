import React from "react";
import logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <div className="bg-[#F8F8F8] pb-10">
      <div className="h-5 w-20 pt-4 ">
        <img className="" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-end mb-10 gap-7 mr-8 mt-5">
        <span className="text-[#451A64] font-medium mb-5">Join as Design Expert</span>
        <span className="text-[#451A64] font-medium mb-5">Partner With LAND Interiors</span>
      </div>
      <div className="flex item-center justify-center gap-10 ">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Studio">Studio</a>
        <a href="#Blog">Blog</a>
        <a href="#Contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
