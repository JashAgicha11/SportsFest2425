import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ClanBox from "../components/ClanBox";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";


const Clans = () => {
  const {setMenuOpen} = useStore();
  return (
    <div className="w-full h-[100vh] bg-[#171923] z-10">
      <div className="w-full h-[12%] sticky top-0 z-50">
        <Navbar selected={"Clans"}/>
      </div>
      <div onClick={() => setMenuOpen(false)} className="h-[40%] sm:h-[60%] bg-[#171923] z-10 max-w-full flex flex-wrap gap-5 relative top-[2rem]  sm:top-[6rem] justify-center items-center">

          <ClanBox colour={`Titans`} ClanName={"Titans"} />
          <ClanBox colour={"Mavericks"} ClanName={"Mavericks"} />
          <ClanBox colour={"Predators"} ClanName={"Predators"} />
          <ClanBox colour={"Warriors"} ClanName={"Warriors"} />

      </div>
    </div>
  );
};

export default Clans;
