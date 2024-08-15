import React from "react";
import imag4 from "../image/blog1.jpg";
import imag5 from "../image/blog2.jpg";
const Hero3 = () => {
  return (
    <>
      <div className=" pb-20">
        <div className="w-[45%] m-auto mt-20 ">
          <h1 className="text-[40px] font-bold text-center">
            PROGRAMS WE OFFER
          </h1>
          <p className="text-[gray] text-center text-[18px] mt-5">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere ac.
            Morbi vitae tincidunt mi, et malesuada massa.
          </p>
        </div>
        <div className=" w-[90%] md:flex-row flex-col  m-auto flex justify-between mt-10">
          <div className="md:w-[48%] w-[100%] mt-5  border border-gray-800  p-5">
            <img src={imag4} alt="" />
            <h1 className="text-[30px] font-bold mt-5">Faculty of Science</h1>
            <p className="text-[gray] text-[18px] mt-5">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
            </p>
            <button className="text-lg  border-b-2 border-gray-950 mt-5">
            Learn More
          </button>
          </div>
          <div className="md:w-[48%] w-[100%] mt-5 border border-gray-800  p-5">
            <img src={imag5} alt="" />
            <h1 className="text-[30px] font-bold mt-5">Faculty of Science</h1>
            <p className="text-[gray] text-[18px] mt-5">
              Integer efficitur tellus metus, sed feugiat leo posuere ac. Morbi
              vitae tincidunt mi, et malesuada massa. Sed blandit placerat elit
              sit amet condimentum.
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
export default Hero3;
