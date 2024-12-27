import React from "react";
import Navbar from "./Navbar";

const ClanDetails = ({ clan }) => {
  return (
    <div className="w-full min-h-max bg-[#171923] flex flex-col items-center">
      <div className="w-full static h-[12vh]">
        <Navbar selected={clan} bg={clan} />
      </div>
      <div className="w-[90%] my-[5rem] flex flex-col gap-10 justify-around items-center">
        <div className="w-full h-[70vh] flex justify-around items-center">
          <div className="w-[30%] h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[30%] h-[100%] bg-white rounded-[2rem]"></div>
        </div>
        <div className="w-[70%] h-[55vh] flex justify-around items-center ">
          <div className="w-[40%] h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[40%] h-[100%] bg-white rounded-[2rem]"></div>
        </div>
        <div className="w-full h-[45vh] flex justify-around items-center ">
          <div className="w-[22%] h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[22%] h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[22%] h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[22%] h-[100%] bg-white rounded-[2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default ClanDetails;
