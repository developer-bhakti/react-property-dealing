import React from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";

const Rooms = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <span className="font-medium text-4xl text-black">What we do ?</span>
      </div>
      <div className="flex justify-around items-center mt-10">
        <div className="">
          <img className="w-[286px] h-[340px] rounded-xl" src={one} alt="1" />
          <p className="font-semibold text-2xl text-[#4B2A63] text-center mt-4">
            Modular Kitchen
          </p>
        </div>

        <div className="flex justify-around items-center">
          <div className="">
            <img className="w-[286px] h-[340px] rounded-xl" src={two} alt="2" />
            <p className="font-semibold text-2xl text-[#4B2A63]  text-center mt-4">
              Bedroom
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center">
          <div className="">
            <img
              className="w-[286px] h-[340px] rounded-xl"
              src={three}
              alt="3"
            />
            <p className="font-semibold text-2xl text-[#4B2A63] text-center mt-4">
              Living room
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div>
            <img
              className="w-[286px] h-[340px] rounded-xl"
              src={four}
              alt="4"
            />
            <p className="font-semibold text-2xl text-[#4B2A63]  text-center mt-4">
              Home office
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 text-center justify-center">
        <p className="font-normal text-[18px] text-black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna <br />
          fringilla urna, porttitor rhoncus dolor purus non enim praesent
          elementum facilisis leo, vel fringilla est ullamcorper <br />
          eget nulla
        </p>
      </div>
    </div>
  );
};

export default Rooms;
