import React from "react";
import Navbar from "./Navbar";
import useStore from "../store/store";
import { clans } from "../Utils/Index"; // Import the clans data

const ClanDetails = ({ clan }) => {
  const { setMenuOpen } = useStore();
  const clanMembers = clans[clan]; // Dynamically fetch members for the given clan

  // Handle the case where the clan is not found
  if (!clanMembers) {
    return <p className="text-white">Clan not found!</p>;
  }

  return (
    <div className="w-full min-h-max bg-[#171923] flex flex-col items-center">
      {/* Navbar */}
      <div className="w-full sticky scroll-p-10 top-0 h-[12vh] z-50">
        <Navbar selected={clan} bg={clan} />
      </div>

      {/* Clan Content */}
      <div
        onClick={() => setMenuOpen(false)}
        className="w-[90%] sm:my-[5rem] flex flex-col gap-5 sm:gap-10 justify-around items-center"
      >
        {/* Section 1: Leader and Mentor */}
        <div className="w-full h-[90vh] sm:h-[70vh] flex flex-col sm:flex-row justify-around items-center">
          {clanMembers.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className="relative sm:w-[30%] w-[80%] h-[45%] sm:h-[100%] bg-white rounded-[2rem] overflow-hidden"
            >
              <img
                className="object-cover w-full h-full"
                src={member.img}
                alt={member.role}
              />
              <div className="absolute bottom-0 w-full bg-blur text-white backdrop-blur-md flex flex-col items-center">
                <h1 className="text-lg font-semibold">{member.name}</h1>
                <h3 className="text-sm">{member.role}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Co-Leaders */}
        <div className="sm:w-[70%] w-[90%] h-[85vh] sm:h-[55vh] flex flex-col sm:flex-row justify-around items-center">
          {clanMembers.slice(2, 4).map((member, index) => (
            <div
              key={index}
              className="relative w-[80%] sm:w-[40%] h-[45%] sm:h-[100%] bg-white rounded-[2rem] overflow-hidden"
            >
              <img
                className="object-cover w-full h-full"
                src={member.img}
                alt={member.role}
              />
              <div className="absolute bottom-0 w-full bg-blur text-white backdrop-blur-md flex flex-col items-center">
                <h1 className="text-lg font-semibold">{member.name}</h1>
                <h3 className="text-sm">{member.role}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Section 3: Members */}
        <div className="w-[85%] h-[150vh] sm:w-full sm:h-[45vh] flex flex-col sm:flex-row justify-around items-center">
          {clanMembers.slice(4).map((member, index) => (
            <div
              key={index}
              className="relative w-[80%] sm:w-[22%] h-[23%] sm:h-[100%] bg-white rounded-[2rem] overflow-hidden"
            >
              <img
                className="object-cover w-full h-full"
                src={member.img}
                alt={member.role}
              />
              <div className="absolute bottom-0 w-full bg-blur text-white backdrop-blur-md flex flex-col items-center">
                <h1 className="text-lg font-semibold">{member.name}</h1>
                <h3 className="text-sm">{member.role}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClanDetails;
