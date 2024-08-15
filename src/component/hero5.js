import React from "react";
import img6 from "../image/class-img1.jpg";
import img7 from "../image/class-img2.jpg";
import img8 from "../image/class-img3.jpg";
const Hero5 = () => {
  return (
    <>
      <div className="w-full border pb-10">
        <div className="flex w-[90%]  m-auto justify-between mt-20">
          <p className="text-[35px] font-bold">TOP STORIES</p>
          <button className="text-lg  text-green-950 border-b-2 border-green-950 ">
            Learn More
          </button>
        </div>
        <div className="w-[90%]  flex flex-wrap  my-5 m-auto gap-10 justify-between">
          <div className="lg:w-[30%] md:w-[46%] w-full  ">
            <div className="">
              <img className="w-full" src={img6} alt="" />
            </div>
            <p className="text-center text-2xl font-bold text-gray-600 p-5">
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories
            </p>
          </div>
          <div className="lg:w-[30%] md:w-[46%] w-full">
            <div className=" ">
              <img className="w-full" src={img7} alt="" />
            </div>
            <p className="text-center text-2xl font-bold text-gray-600 p-5">
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories
            </p>
          </div>
          <div className="lg:w-[30%] md:w-[46%] w-full">
            <div className="">
              <img className="w-full" src={img8} alt="" />
            </div>
            <p className="text-center text-2xl font-bold text-gray-600 p-5">
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero5;
