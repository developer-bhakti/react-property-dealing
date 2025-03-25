// import React, { useDebugValue } from "react";
import mainabout from "../assets/mainabout.png";

const About = () => {
  return (
    <div className="mx-5 my-10">
    <div className="flex justify-end items-center mt-16 ">
      
      <div className=" text-center bg-white/60 py-20 px-20 z-10 -mr-70  w[898px] h-[808px]">
        <p className="font-medium text-4xl text-[#241330] mb-2">
          Make your dream interior in
        </p>
        <span className="justify-center text-center font-medium text-5xl text-[#241330] flex mb-10">
          3 easy steps
        </span>
        <span className="font-semibold text-4xl text-[#4B2A63] mb-4">
          Explore
        </span>
        <p className="font-normal text-[18px] text-black mb-10">
          Explore more than just modular design ideas with our experts.
        </p>
        <span className="font-semibold text-4xl text-[#4B2A63]">Design</span>
        <p className="font-normal text-[18px] text-black mb-10">
          Complete the designs with painting, flooring and other decor
          solutions
        </p>
        <span className="font-semibold text-4xl text-[#4B2A63]">Move-in</span>
        <p className="font-normal text-[18px] text-black">
          Move in with ease, with our hassle-free civil work and installation
          services.
        </p>
      </div>
      <div className="">
        <img
          className="w-[1386px] h-[924px]"
          src={mainabout}
          alt="mainAbout"
        />
      </div>
    </div>
   
  </div>
 
  );
};

export default About;
