import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ClanBox from "../components/clanBox";
import { useNavigate } from "react-router-dom";


const Clans = () => {
  return (
    <div className="w-full h-[100vh] bg-[#171923]">
      <div className="w-full h-[12%] sticky top-0">
        <Navbar selected={"Clans"}/>
      </div>
      <div className="h-[60%] max-w-full flex flex-wrap gap-5 relative  top-[6rem] justify-center items-center">

          <ClanBox colour={`Titans`} ClanName={"Titans"} />
          <ClanBox colour={"Mavericks"} ClanName={"Mavericks"} />
          <ClanBox colour={"Predators"} ClanName={"Predators"} />
          <ClanBox colour={"Warriors"} ClanName={"Warriors"} />

      </div>
    </div>
  );
};

export default Clans;
