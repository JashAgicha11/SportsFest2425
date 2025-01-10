import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ClanBox from "../components/ClanBox";
import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const Clans = () => {

  useGSAP(() => {
    gsap.fromTo(
      ".Navbar",
      {
        opacity: 0,
        y: -20,
        ease: "power1.inOut",
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 0.2,
      }
    ),
    gsap.fromTo(
      ".Clans",
      {
        opacity: 0,
        x: -20,
        ease: "power1.inOut",
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        stagger: 0.2,
      }
    );
  }, []);
  
  const {setMenuOpen} = useStore();
  return (
    <div className=" w-full h-[100vh] bg-[#171923] z-10">
      <div className="Navbar w-full h-[12%] sticky top-0 z-50">
        <Navbar selected={"Clans"}/>
      </div>
      <div onClick={() => setMenuOpen(false)} className=" h-[40%] sm:h-[60%] bg-[#171923] z-10 max-w-full flex flex-wrap gap-5 relative top-[2rem]  sm:top-[6rem] justify-center items-center">

          <ClanBox colour={`Titans`} ClanName={"Titans"} />
          <ClanBox colour={"Mavericks"} ClanName={"Mavericks"} />
          <ClanBox colour={"Predators"} ClanName={"Predators"} />
          <ClanBox colour={"Warriors"} ClanName={"Warriors"} />

      </div>
    </div>
  );
};

export default Clans;
