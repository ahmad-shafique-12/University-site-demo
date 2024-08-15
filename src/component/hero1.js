import React from "react";
import img2 from "../image/h1_hero1 (1).jpg";

const Hero1 = () => {
  return (
    <>
      <div className="w-full h-[110vh] border relative">
        <img
          className="w-full h-full object-cover  absolute"
          src={img2}
          alt=""
        />
        <div className=" lg:w-[45%]  w-[90%]  absolute top-[20%] left-[5%] ">
          <p className="text-[#FFFFFF] font-bold text-[24px]">EDUCATION $ SCHOOL</p>
          <h1 className="lg:text-[54px]  text-2xl mt-5 leading-normal  font-bold text-[#FFFFFF]">SHOWCASE COURSES, EVENTS AND MOVE!</h1>
          <p className="text-[#ffffff] text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>

          <button className="bg-[#00B072]  text-[18px] my-5 text-[#ffffff] p-4 cursor-pointer hover:bg-transparent hover:border">Get Started Now</button>
        </div>
      </div>
    </>
  );
};
export default Hero1;
