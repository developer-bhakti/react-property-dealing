import React from "react";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";
import mainabout from "../assets/mainabout.png";

const About = () => {
  return (
    <div className="flex justify-center items-center">
      <span className="font-medium text-2xl ">Why LAND Interiors</span>
      <div className="flex justify-between items-center gap-10 ">
        <img
          className="w-[68px] h-[68px] top-[1247px] left-[431px] "
          src={about1}
          alt="icon"
        />
        <p className="w-[111px] h-[54px] top-[1344px] left-[916px] font-medium text-[#000000]">
          50 days or we pay you rent
        </p>
        <img
          className="w-[72px] h-[72px] top-[1245px] left-[936px]"
          src={about2}
          alt="icon"
        />
        <p className="w-[111px] h-[54px] top-[1344px] left-[916px] font-medium text-[#000000]">
          1500+happy customer
        </p>
        <img
          className="w-[62px] h-[62px] top-[1255px] left-[1445px]"
          src={about3}
          alt="icon"
        />
        <p className="w-[111px] h-[54px] top-[1344px] left-[916px] font-medium text-[#000000]">
          300+ design experties
        </p>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-[1386px] h-[924px] top-[1508px] left-[534px]" src={mainabout} alt="main" />
      </div>
      <div>
        <span>What We do ?</span>
      </div>
    </div>
    
  );
};

export default About;
