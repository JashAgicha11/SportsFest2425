import React from "react";
import Navbar from "../components/Navbar";
import ConnectBtn from "../components/ConnectBtn";
import { Instagram, Linkedin, Twitter } from "../Assets";
import useStore from "../store/store";

const Home = () => {
  const { setMenuOpen } = useStore();

  return (
    <div className="w-full h-screen bg-[#171923] flex flex-col">
      <div className="w-full h-[12%] sticky top-0 z-50">
        <Navbar selected={"Welcome"} />
      </div>
      <div
        onClick={() => setMenuOpen(false)}
        className="w-full h-[38%] font-clash text-white relative sm:top-[2rem] flex flex-col leading-10 text-2xl justify-center items-center px-4 sm:px-6 md:px-8 text-center"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl">
          Ahmedabad University's
        </h2>
        <h3 className="text-lg sm:text-xl md:text-2xl">The Sports Club</h3>
        <h3 className="text-lg sm:text-xl md:text-2xl">Presents</h3>
        <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] leading-[3rem] sm:leading-[3.5rem] md:leading-[4rem] font-trench">
          "Sports Fest 2025"
        </h1>
      </div>
      <div className="w-full h-[40%]">
        <p className="text-center text-white px-4 sm:px-6 md:px-8">
          {/* Add content here */}
        </p>
      </div>
      <footer className="bg-[#202B38] w-full h-[10%] text-[0.6rem] sm:text-lg font-clash flex sm:flex-row justify-around items-center text-white px-4 sm:px-6 md:px-8">
        <div className="flex flex-col min-w-[31%] w-[33%] justify-center items-center">
          <h2>
            Created By :-{" "}
            <a
              href="https://www.instagram.com/_.jash_.11/"
              target="_blank"
              className="underline text-bold"
            >
              Jash Agicha
            </a>
          </h2>
          <h5 className="text-[0.6rem] sm:text-sm flex flex-col sm:gap-1 sm:flex-row">
            Special Thanks to{" "}
            <a
              href="https://github.com/GANGSTER0910"
              target="_blank"
              className="underline text-bold"
            >
               Harsh Panchal
            </a>
          </h5>
        </div>
        <div className="flex flex-col min-w-[33%] items-center text-center text-[0.6rem] sm:text-2xl">
          <h2>The Sports Club</h2>
          <h3 className="text-xs sm:text-sm">"Faster Smarter Bolder"</h3>
        </div>
        <div className="flex w-[30%] sm:w-[33%] justify-center items-center gap-1 sm:gap-4 overflow-hidden mt-2 sm:mt-0">
          <ConnectBtn
            img={Instagram}
            tag={"Instagram"}
            link={"https://www.instagram.com/ahduni_sportsclub/?hl=en"}
          />
          <ConnectBtn
            img={Linkedin}
            tag={"Linkedin"}
            link={"https://www.linkedin.com/company/the-sports-club/"}
          />
          <ConnectBtn
            img={Twitter}
            tag={"Twitter"}
            link={"https://x.com/ahduni_sports"}
          />
        </div>
      </footer>
    </div>
  );
};

export default Home;
