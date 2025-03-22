import React from "react";
import Navbar from "./Navbar";
import home from "../assets/home.png";

const Home = () => {
  return (
    <div className="flex justify-start items-center w-full mt-12">
      <div className="">
        <img className="w-[1090px] h-[613px]" src={home} alt="" />
      </div>

      <div className="text-center bg-white/70 py-20 px-20 z-10 -ml-36 ">
        <p className="font-medium text-4xl mb-2">
          Get personalised home interiors
        </p>
        <span className="font-semibold text-5xl text-[#241330]">
          in just 50 days
        </span>
        <button className="bg-[#4B2A63] text-white font-semibold text-3xl mt-9 py-4 px-6 rounded-sm">
          SPEAK WITH A ONLINE CONSULTANT
        </button>
      </div>
    </div>
  );
};

export default Home;
