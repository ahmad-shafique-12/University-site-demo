import React from "react";
import imag3 from "../image/about1 (1).jpg";
const Hero2 = () => {
  return (
    <>
      <div className="w-full bg-[#FCF2EB] p-1 pb-20">
        <div className="w-[90%]   lg:flex  justify-between m-auto mt-20 items-center">
          <div className="lg:w-[40%] w-[90%] m-auto ">
            <img className="w-[100%]" src={imag3} alt="" />
          </div>
          <div className="lg:w-[40%] w-[90%] mt-5  m-auto">
            <h1 className="text-[33px]  font-bold">A COMPREHENSIVE TEACHING APPROACH</h1>
            <p className="text-[gray] text-lg mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              felis felis, vulputate sit amet mauris et, semper aliquam ligula.
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt malesuada massa.
            </p>
            <p className="text-[gray] text-lg mt-10">
              Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
              ligula. Integer efficitur tellus metus, sed feugiat leo posuere
              ac. Morbi vitae tincidunt mi, et malesuada massa.
            </p>

            <button className="text-lg  border-b-2 border-gray-950 mt-5">
            Learn More
          </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero2;
