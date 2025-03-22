import React, { useDebugValue } from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import mainabout from "../assets/mainabout.png";

const About = () => {
  return (
    <div className="py-20 px-10 ">
      <h1 className="font-medium text-4xl text-center my-5">Why LAND Interiors</h1>
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center justify-center gap-5 ">
          <img className="w-[68px] h-[68px]" src={about1} alt="1" />
          <p className="font-normal text-xl text-center">50 days or we <br /> pay you rent</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 ">
          <img className="w-[68px] h-[68px]" src={about2} alt="2" />
          <p className="font-normal text-xl text-center">1500+happy <br />customers</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 ">
          <img className="w-[68px] h-[68px]" src={about3} alt="3" />
          <p className="font-normal text-xl text-center">300+ design <br /> experties</p>
        </div>
      </div>
    </div>
  );
};

export default About;
