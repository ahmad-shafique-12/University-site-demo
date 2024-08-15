import React from "react";
import imag1 from "../image/logo (1).png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <div className="w-full bg-[#32404D]  flex flex-wrap justify-evenly p-4 text-center">
        <div className=" w-max flex items-center">
          <p className="text-[#00B78A] text-lg  ">
            ENDS TOMORROW:
            <span className="text-[#DEE0ED]">
              Join Teachable for $4,800 in bonus content
            </span>
          </p>
        </div>
        <div className=" gap-7 flex lg:my-0 my-5">
          <div className="text-center">
            <p className="text-[#00B78A] text-lg font-extrabold">30</p>
            <p className="text-[#DEE0ED]">Days</p>
          </div>
          <div className=" text-center">
            <p className="text-[#00B78A] text-lg font-extrabold">10</p>
            <p className="text-[#DEE0ED]">hours</p>
          </div>
          <div className=" text-center">
            <p className="text-[#00B78A] text-lg font-extrabold">46</p>
            <p className="text-[#DEE0ED]">Mins</p>
          </div>
          <div className=" text-center">
            <p className="text-[#00B78A] text-lg font-extrabold">01</p>
            <p className="text-[#DEE0ED]">Secs</p>
          </div>

          <button className="text-lg text-white border-b-2 sm:block hidden">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full  flex justify-around p-4 ">
        <div className="flex items-center gap-5 ">
          <div className=" w-max">
            <img src={imag1} alt="" />
          </div>
          <ul className="gap-5 text-[18px] cursor-pointer lg:flex hidden">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="border-black flex items-center gap-5">
          <div className="w-max xl:block hidden">
            <p className="text-[#00B78A] text-lg">
              Call US:
              <span className="text-black text-base">+92 1 23456789</span>
            </p>
          </div>
          <div className=" gap-3 text-[22px] border-l-2 pl-2 cursor-pointer sm:flex hidden">
            <p className="text-[#3B5998] smk duration-500">
              <FaFacebookSquare />
            </p>
            <p className="text-[#3B5998] smk duration-500">
              <FaTwitterSquare />
            </p>
            <p className="text-[#1DA1F2] smk duration-500">
              <FaLinkedin />
            </p>
            <p className="text-[#FF0000] smk duration-500">
              <FaYoutubeSquare />
            </p>
            <p className="text-[#34A853] smk duration-500">
              <FaEnvelope />
            </p>
          </div>
            <p className="text-[#34A853] text-[30px] smk duration-500 lg:hidden block">
              <IoMenu />
            </p>
        </div>
      </div>
    </>
  );
};
export default Navbar;
