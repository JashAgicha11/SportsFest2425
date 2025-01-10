import React, { useRef, useEffect } from 'react';
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const ClanBox = ({ colour, ClanName }) => {
  const navigate = useNavigate();
  const setClan = useStore((state) => state.setClan); 
  const boxRef = useRef(null);

  const handleClick = (path) => {
    navigate(`/clans/${path}`);
    setClan(path);
  };

  // useEffect(() => {
  //   // Initial GSAP animation for the box appearance
  //   gsap.fromTo(
  //     boxRef.current,
  //     { opacity: 0, y: 50, scale: 0.9 },
  //     { opacity: 1, y: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
  //   );
  // }, []);

  const handleMouseEnter = () => {
    gsap.to(boxRef.current, {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.7)",
      rotate: 0,
      duration: 0.2,
      ease: "power1.out",
      smoothOrigin: true,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(boxRef.current, {
      scale: 1,
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
      rotate: 0,
      duration: 0.2,
      ease: "power2.inOut",
      smoothOrigin: true,
    });
  };
  useGSAP(() => {
    gsap.fromTo(
      ".Clans",
      {
        opacity: 0,
        x: -50,
        ease: "power2.out", // Smooth easing
      },
      {
        opacity: 1,
        x: 0,
        delay: 0.5,
        stagger: 0.2, // Shorter stagger for a fluid sequence
      }
    );
  }, []);
  

  return (
    <div
      ref={boxRef}
      onClick={() => handleClick(colour)}
      className={classNames(
        "Clans sm:w-[45%] w-[90%] h-[40%] z-10 cursor-pointer rounded-lg text-white flex justify-start items-center border border-opacity-40 drop-shadow-lg transform transition-transform duration-300",
        {
          "bg-Titans ": colour === "Titans",
          "bg-Mavericks ": colour === "Mavericks",
          "bg-Predators": colour === "Predators",
          "bg-Warriors": colour === "Warriors",
        }
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-[2.5rem] text-start relative font-clash left-[2rem]">
        {ClanName}
      </h2>
    </div>
  );
};

export default ClanBox;
