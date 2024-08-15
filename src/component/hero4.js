import React from "react";
import { FaChevronRight } from "react-icons/fa";
import imag6 from '../image/visit1.jpg'
const Hero4 = () => {
  return (
    <>
      <div className="w-full bg-[#F2FBF9] lg:flex">
        <div className="lg:w-[48%] w-full  p-5 ">
          <h1 className="text-[40px] p-5  font-bold">ESSENTIAL RESOURCES</h1>
          <p className="text-[gray]  p-5">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
          </p>
          <div className=" flex my-3 items-center justify-around hover:bg-[#DFF1EC]">
            <div className=" w-[80%]  ">
              <p className="text-[22px] font-bold ">First year students</p>
              <p className="text-[gray] text-[18px] mt-5">
                Integer efficitur tellus metus, sed feugiat leo posuere ac.
                Morbi vitae tincidunt mi, et malesuada massa.
              </p>
            </div>
            <div className="w-[60px] h-[60px] rounded-full border border-green-900 flex items-center  justify-center">
            <FaChevronRight />
            </div>
          </div>
          <div className=" flex items-center my-3 justify-around  hover:bg-[#DFF1EC]">
            <div className=" w-[80%] ">
              <p className="text-[22px] font-bold ">Tuition & fees</p>
              <p className="text-[gray] text-[18px] mt-5">
                Integer efficitur tellus metus, sed feugiat leo posuere ac.
                Morbi vitae tincidunt mi, et malesuada massa.
              </p>
            </div>
            <div className="w-[60px] h-[60px] rounded-full border border-green-900 flex items-center  justify-center">
            <FaChevronRight />
            </div>
          </div>
          <div className="flex items-center my-3 justify-around hover:bg-[#DFF1EC]">
            <div className=" w-[80%]">
              <p className="text-[22px] font-bold ">International students</p>
              <p className="text-[gray] text-[18px] mt-5">
                Integer efficitur tellus metus, sed feugiat leo posuere ac.
                Morbi vitae tincidunt mi, et malesuada massa.
              </p>
            </div>
            <div className="w-[60px] h-[60px] rounded-full border border-green-900 flex items-center  justify-center">
            <FaChevronRight />
            </div>
          </div>
        </div>
        <div className="lg:w-[52%]  w-full">
            <img src={imag6} alt=""/>
        </div>
      </div>
    </>
  );
};
export default Hero4;
