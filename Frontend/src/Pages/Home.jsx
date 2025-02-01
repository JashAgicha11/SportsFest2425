import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import ConnectBtn from "../components/ConnectBtn";
import { Instagram, Linkedin, Twitter } from "../Assets";
import useStore from "../store/store";
import { gsap } from "gsap";

const Home = () => {
  const { setMenuOpen } = useStore();

  useEffect(() => {
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
    );

    gsap.fromTo(
      ".Footer",
      {
        opacity: 0,
        y: 20,
        ease: "power1.inOut",
      },
      {
        opacity: 1,
        y: 0,
        delay: 1,
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".animated-letter",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1, 
        delay:1,
        ease: "power2.out",
      }
    );
  }, []);

  const title = '"Sports Fest 2025"';

  return (
    <div className="w-full overflow-hidden max-h-screen h-screen bg-[#171923] flex flex-col">
      
      <div className="Navbar w-full h-[12%] sticky top-0 z-50">
        <Navbar selected={"Welcome"} />
      </div>

      
      <div
        onClick={() => setMenuOpen(false)}
        className="Navbar w-full h-[38%] font-clash text-white relative sm:top-[2rem] flex flex-col leading-10 text-2xl justify-center items-center px-4 sm:px-6 md:px-8 text-center"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl">Ahmedabad University's</h2>
        <h3 className="text-lg sm:text-xl md:text-2xl">The Sports Club</h3>
        <h3 className="text-lg sm:text-xl md:text-2xl">Presents</h3>
        <h1 className="sports text-ellipsis z-10 text-[2.5rem] sm:text-[3rem] md:text-[4rem] leading-[3rem] sm:leading-[3.5rem] md:leading-[4rem] font-trench">
          {title.split("").map((letter, index) => (
            <span
              key={index}
              className={`animated-letter inline-block ${
                letter === " " ? "w-2" : ""
              }`}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>

      
      <div className="w-full h-[40%] flex justify-center items-center">
        <p className="Navbar text-center text-white px-4 sm:px-6 md:px-8 font-trench mt-3 w-[60%] flex justify-center items-center" >
        This is Sports Fest! It’s not just about the games—it’s about the intensity, the drama, and those match-turning moments that get your heart racing. The rivalries may get heated, the stakes feel high, and every play could change the game. But at the end of it all, it’s about the thrill, the energy, and the pure joy of coming together. Get ready to feel the adrenaline, bring your A-game, and let the fun take over!
        </p>
      </div>

      
      <footer className="Footer bg-[#202B38] w-full h-[10%] text-[0.6rem] sm:text-lg font-clash flex sm:flex-row justify-around items-center text-white px-4 sm:px-6 md:px-8">
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
        <div className="flex flex-col min-w-[33%] items-center text-center text-[1rem] sm:text-2xl">
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
