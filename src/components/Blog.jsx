import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";

const Blog = () => {
  return (
    <div>
      <div className="mb-10 ml-9">
        <h1 className="font-medium text-4xl text-[#241330]">Blog</h1>
      </div>

      <div className="flex gap-9 ml-9">
        <div className="mb-7">
          <img
            className="w-[329.98px] h-[333px] rounded-[10px] mb-4"
            src={blog1}
            alt=""
          />
          <span className="font-medium text-2xl text-black">
            Modern Interior
          </span>
          <p className="font-normal text-[17px] text-black mt-4">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,
          </p>
        </div>

        <div className="">
          <img
            className="w-[329.98px] h-[333px] rounded-[10px] mb-4"
            src={blog2}
            alt=""
          />
          <span className="font-medium text-2xl text-black">
            Exterior Project
          </span>
          <p className="font-normal text-[17px] text-black mt-4">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,
          </p>
        </div>

        <div>
          <img
            className="w-[329.98px] h-[333px] rounded-[10px] mb-4"
            src={blog3}
            alt=""
          />
          <span className="font-medium text-2xl text-black">Grey Beauty</span>
          <p className="font-normal text-[17px] text-black mt-4">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,
          </p>
        </div>

        <div>
          <img
            className="w-[330px] h-[333px] rounded-[10px] mb-4"
            src={blog4}
            alt=""
          />
          <span className="font-medium text-2xl text-black">
            Plantation interior
          </span>
          <p className="font-normal text-[17px] text-black mt-4">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,
          </p>
        </div>
        <div>
          <img
            className="w-[330px] h-[333px] rounded-[10px] mb-4"
            src={blog5}
            alt=""
          />
          <span className="font-medium text-2xl text-black ">
            Role Of Furnitures
          </span>
          <p className="font-normal text-[17px] text-black mt-4">
            Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit ut <br /> aliquam,
          </p>
        </div>
      </div>
      <div className="items-center justify-center text-center mt-6">
        <button className="bg-[#4B2A63] text-white font-semibold text-2xl w-[270px] h-[80px]">View all</button>
      </div>
    </div>
  );
};

export default Blog;
