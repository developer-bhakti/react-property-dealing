import React from "react";
import customer1 from "../assets/customer1.png";
import customer2 from "../assets/customer2.png";

const Customer = () => {
  return (
    <div className="my-36">
      <div>
        <h1 className="font-medium text-4xl text-[#241330] text-center mb-7">
          Our Happy Customers
        </h1>
        <p className="font-normal text-[18px] text-center items-center mb-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet <br />
          luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor
          purus non enim
        </p>
      </div>

      <div className="flex flex-col my-7 mx-56">
        <img className="w-[1228px] h-[536px]" src={customer1} alt="customer1" />
        <div className="flex flex-col items-center justify-center -mt-66">
          <img
            className="w-[148px] h-[148px] border rounded-full z-10"
            src={customer2}
            alt=""
          />
          <div className="bg-white pt-16 pb-3 px-6 max-w-xl text-center -mt-16">
            <p className="font-normal text-xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </p>
            <span className="font-semibold text-[22px] text-black">-Jeo Stanlee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
