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
        <h1 className="font-medium text-4xl text-[#241330]">
          Our Interior Design Products
        </h1>
      </div>
      <div className="my-10 columns-1 sm:columns-2 lg:columns-4 mx-7">
        <div className="mb-4 break-inside-avoid">
          <img
            className="w-full h-[420px] object-cover "
            src={product1}
            alt=""
          />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img className="w-full h-[420px]" src={product2} alt="" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img className="w-full h-[850px]" src={product3} alt="" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img className="w-full h-[420px]" src={product4} alt="" />
        </div>
        <div className="mb-4 break-inside-avoid">
          <img className="w-full h-[420px]" src={product5} alt="" />
        </div>
        <div className="mb-4 break-inside-avoid ">
          <img className="w-full h-[850px]" src={product6} alt="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center my-10">
        <p className="font-normal text-[18px] text-black">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet,
          consectetur adipiscing elit ut aliquam, <br />
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          <br />
          porttitor rhoncus dolor purus non enim
        </p>
        <button className="bg-[#4B2A63] text-white font-semibold text-2xl w-[270px] h-[80px] mt-10">
          View all
        </button>
      </div>
    </div>
  );
};

export default InteriorProducts;
