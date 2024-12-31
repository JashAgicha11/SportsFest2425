import React from "react";
import Navbar from "../components/Navbar";
import ConnectBtn from "../components/ConnectBtn";
import { Instagram, Linkedin, Twitter } from "../Assets";

const Home = () => {
  return (
    <div className="w-full h-[100vh] bg-[#171923]">
      <div className="w-full h-[12%]">
        <Navbar selected={"Welcome"} />
      </div>
      <div className="w-full h-[38%] font-clash text-white relative top-[2rem] flex flex-col leading-10 text-2xl justify-center items-center">
        <h2>Ahmedabad University's</h2>
        <h3>The Sports Club</h3>
        <h3>Presents</h3>
        <h1 className="text-[4rem] leading-[4rem] font-trench">
          "Sports Fest 2025"
        </h1>
      </div>
      <div className="w-full h-[40%]">
        <p></p>
      </div>
      <footer className="bg-[#202B38] w-full h-[10%] text-lg font-clash flex justify-around items-center text-white">
        <div className="flex flex-col">
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
          <h5 className="text-sm">
            Special Thanks to{" "}
            <a href="https://github.com/GANGSTER0910" target="_blank" className="underline text-bold">Harsh Panchal</a>
          </h5>
        </div>
        <div className="flex flex-col text-2xl justify-center items-center">
          <h2>The Sports Club</h2>
          <h3 className="text-sm">"Faster Smarter Bolder"</h3>
        </div>
        <div className="flex gap-4 overflow-hidden">
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
