import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
// import { Volleyball } from "../Assets";
import { fixtures } from "../Utils/Index";
import useStore from "../store/store";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



const Fixtures = () => {
  const { setMenuOpen } = useStore();
  const fixtureRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      fixtureRefs.current,
      {
        opacity: 0,
        x: (index) => (index % 2 === 0 ? -100 : 100), // Alternate left/right
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.2, // Delay between boxes
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div className="w-full flex flex-col bg-[#171923]">
      {/* Navbar */}
      <div className="Navbar z-10 w-full h-[12vh] sm:mb-[5rem] sticky top-0">
        <Navbar selected={"Fixtures"} />
      </div>

      {/* Fixtures Section */}
      <div
        onClick={() => setMenuOpen(false)}
        className="w-full flex flex-col gap-4 mb-[5rem] items-center text-white font-clash text-lg "
      >
        {fixtures.map((fixture, index) => (
          <div
            key={index}
            ref={(el) => (fixtureRefs.current[index] = el)} // Attach refs dynamically
            className="sm:w-full w-[80%] px-10 md:w-[60%] border-2 border-[#3d4d5f] h-auto p-4 bg-[#202B38] flex flex-col md:flex-row items-center md:justify-between rounded-2xl gap-4"
          >
            {/* Fixture Image */}
            <img
              className="w-[30%] md:w-[8%] h-auto object-contain"
              src={fixture.img}
              alt={`${fixture.game} illustration`}
            />

            {/* Fixture Details */}
            <div className="flex flex-col w-full md:w-[80%] gap-2 items-center">
              <h2 className="text-xl text-center  sm:text-start w-full ">
                {fixture.game}
              </h2>
              <div className="flex flex-col md:flex-row justify-between w-[100%] sm:w-[90%] items-center ">
                <h2 className="text-sm md:text-base w-[100%] text-center sm:w-1/2 gap-5">
                  <span>Date:</span> {fixture.date}
                </h2>
                <h2 className="text-sm md:text-base w-[100%] text-center sm:w-1/2">
                  <span>Number of Teams:</span> {fixture.teams}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fixtures;
