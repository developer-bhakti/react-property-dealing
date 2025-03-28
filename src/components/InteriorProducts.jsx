import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";

const InteriorProducts = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center text-center mt-16">
        <h1 className="font-medium text-4xl text-[#241330]">Our Interior Design Products</h1>
      </div>
      <div className="mt-10 ">
         <img className="w-[313px] h-[331px] "  src={product1} alt="" />
      </div>
      <div className="">
        <img className="w-[318px] h-[330px]" src={product2} alt="" />
      </div>
      <div className="flex w-full object-cover">
        <img className="w-[452px] h-[676px]" src={product3} alt="" />
      </div>
      <div className="">
        <img className="w-[330px] h-[331px]" src={product4} alt="" />
      </div>
      <div className="">
        <img className="w-[330px] h-[330px]" src={product5} alt="" />
      </div>
      <div className="">
        <img className="w-[451px] h-[676px]" src={product6} alt="" />
      </div>
      </div>
  );
};

export default InteriorProducts;
