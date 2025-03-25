import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const MyProject = () => {
  return (
    <div className="flex mt-10">
      <div className="flex mt-10 py-10 px-20 z-10">
        <img className="w-[377px] h-[379px]" src={project1} alt="project1" />
        <img className="w-[382px] h-[189px]" src={project2} alt="project1" />
        <img className="w-[385px] h-[194px]" src={project3} alt="project1" />
        <img className="w-[378px] h-[379px]" src={project4} alt="project1" />
      </div>
      <div className="flex">
      <div className="w-[997px] h-[519px]  text-center bg-white py-10 px-20 z-10 -mr-70">
        <span className="font-medium text-4xl items-center flex flex-col mb-5">Our Projects</span>
        <p className="font-normal text-[18px] items-center text-black mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla
        </p>
        <p className="font-normal text-[18px] items-center text-black mb-7">
          magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
          elementum facilisis leo, vel fringilla est ullamcorper eget nulla
        </p>
        <div className="items-center">
          <button className="w-[270px] h-[80px] bg-[#4B2A63] text-2xl font-semibold text-white">View all</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProject;
