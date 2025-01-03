import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";


const Navbar = ({ selected, bg }) => {
  const {menuOpen, setMenuOpen} = useStore();
  const navigate = useNavigate();
  // const {selected,setSelected} = useStore()
  const handleNavigate = (path) => {
    // setSelected(label)
    navigate(path);
    setMenuOpen(false);
  };
  return (
    <>
      <div className="md:hidden">
        <Button onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon />
        </Button>
      </div>
      <div
        className={`w-[35%] z-50 h-screen left-0 sm:static sm:min-w-full sm:h-full rounded-b-lg bg-[#161926] border-b-2 border-[#2D3748] drop-shadow-2xl sm:invert-0 flex transition-transform transform duration-200 ${
          menuOpen ? "flex-col " : "flex-row hidden md:flex"
        } sm:justify-around gap-8  sm:items-center text-lg sm:text-2xl text-white font-clash pl-4 pt-3 sm:pt-0 sm:pl-0`}
      >
       
        <h2
          className="cursor-pointer hover:text-white-400"
          onClick={() => handleNavigate("/clans")}
        >
          Clans
        </h2>
        <h2
          className="cursor-pointer hover:text-white-400 z-50"
          onClick={() => handleNavigate("/leaderboard")}
        >
          Leaderboard
        </h2>
        <h2
          className="cursor-pointer hover:text-white-400 md:text-4xl sm:font-trench"
          onClick={() => handleNavigate("/")}
        >
          Sports Fest
        </h2>
        <h2
          className="cursor-pointer hover:text-white-400"
          onClick={() => handleNavigate("/fixtures")}
        >
          Fixtures
        </h2>
        <h2
          className="cursor-pointer hover:text-white-400"
          onClick={() => handleNavigate("/about")}
        >
          About Us
        </h2>
      </div>
      <div className=" sm:w-full w-[50%] left-[25%] absolute top-0 sm:static  flex justify-center items-center h-[50%] sm:h-[60%]">
        <div
          className={`h-full border-2 border-[#3f4755] drop-shadow-lg border-t-0 w-fit sm:w-[22%] ${
            bg ? `bg-${bg}` : "bg-[#202B38]"
          } flex justify-center items-center rounded-b-3xl sm:rounded-b-[2.5rem]`}
        >
          <h2 className="text-white uppercase font-extrabold text-[1.4rem] px-5 sm:px-0 sm:text-[1.8rem] w-full text-center tracking-widest font-stencil">
            {selected}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
