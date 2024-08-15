import React from "react";
import img9 from '../image/brand1 (2).png'
import img10 from '../image/brand2 (2).png'
import img11 from '../image/brand3 (2).png'
const Hero6 = () => {
  return (
    <>
      <div className="w-full border-gray-500  border-t">
        <div className="w-[50%] m-auto mt-20 ">
          <h1 className="text-[40px] text-gray-700 font-bold text-center">
            OUR PERTNERS
          </h1>
          <p className="text-[gray] text-center text-[18px] mt-5">
            Maecenas felis felis, vulputate sit amet mauris et, semper aliquam
            ligula. Integer efficitur tellus metus, sed feugiat leo posuere.
          </p>
        </div>

        <div className="w-max flex-wrap  flex gap-5 m-auto   my-10 ">
            <img className="md:block  hidden"  src={img9} alt=""/>
            <img className="md:block  hidden" src={img10} alt=""/>
            <img src={img11} alt=""/>
            <img  src={img10} alt=""/>
        </div>
      </div>
    </>
  );
};
export default Hero6;
