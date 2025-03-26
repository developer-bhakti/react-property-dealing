import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";

const Blog = () => {
  return (
    <div className="">
       <h1 className="mb-10">blog</h1>
      <div className="">
        <img src={blog1} alt="blog1" />
        <span className="font-medium text-2xl items-centerjustify-center mb-5">
          Modern Interior
        </span>
        <div className="flex gap-6">
          <p className="font-normal text-[17px] text-black  justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
          <span className="font-medium text-2xl items-center justify-center mb-5 ">
            Exterior Project
          </span>
          <p className="font-normal text-[17px] text-black justify-center items-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
          <span className="font-medium text-2xl items-center justify-center mb-5">
            Grey Beauty
          </span>
          <p className="font-normal text-[17px] text-black justify-center items-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>
      </div>
      <div className="flex">
        <div className="flex bg-white flex-col">
          <img
            className="w-[330px] h-[333px] rounded-[10px]"
            src={blog2}
            alt="blog2"
          />
          <span className="font-medium text-2xl items-center mb-5">
            Plantation interior
          </span>
          <p className="font-normal text-[17px] text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>

        <div className="flex bg-white flex-col ">
          <img
            className="w-[330px] h-[333px] rounded-[10px]"
            src={blog3}
            alt="blog3"
          />
          <span className="font-medium text-2xl items-center mb-5">
            Role of furnitures
          </span>
          <p className="font-normal text-[17px] text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          </p>
        </div>
      </div>
      <div className="items-center flex mt-30">
      </div>
      <button className="w-[270px] h-[80px] bg-[#4B2A63] text-white font-semibold text-2xl">View all</button>
    </div>
  );
};

export default Blog;
