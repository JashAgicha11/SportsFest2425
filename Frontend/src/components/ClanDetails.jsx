import React from "react";
import Navbar from "./Navbar";
import useStore from "../store/store";


const ClanDetails = ({ clan }) => {
  const {setMenuOpen} = useStore();
  return (
    <div className="w-full min-h-max bg-[#171923] flex flex-col items-center">
      <div className="w-full sticky  scroll-p-10 top-0 h-[12vh]">
        <Navbar selected={clan} bg={clan} />
      </div>
      <div onClick={() => setMenuOpen(false)} className="w-[90%] sm:my-[5rem] flex flex-col gap-5 sm:gap-10 justify-around items-center">
        <div className="w-full h-[90vh] sm:h-[70vh] flex flex-col sm:flex-row justify-around items-center">
          <div className="sm:w-[30%] w-[80%] h-[45%]  sm:h-[100%] bg-white rounded-[2rem]"></div>
          <div className="sm:w-[30%] w-[80%] h-[45%] sm:h-[100%] bg-white rounded-[2rem]"></div>
        </div>
        <div className="sm:w-[70%] w-[90%] h-[85vh] sm:h-[55vh] flex flex-col sm:flex-row justify-around items-center ">
          <div className="w-[80%] sm:w-[40%] h-[45%] sm:h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[80%] sm:w-[40%] h-[45%] sm:h-[100%] bg-white rounded-[2rem]"></div>
        </div>
        <div className="w-[85%] h-[150vh] sm:w-full sm:h-[45vh] flex flex-col sm:flex-row justify-around items-center ">
          <div className="w-[80%] h-[23%] sm:w-[22%] sm:h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[80%] h-[23%] sm:w-[22%] sm:h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[80%] h-[23%] sm:w-[22%] sm:h-[100%] bg-white rounded-[2rem]"></div>
          <div className="w-[80%] h-[23%] sm:w-[22%] sm:h-[100%] bg-white rounded-[2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default ClanDetails;
