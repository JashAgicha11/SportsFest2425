import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ClanUpdateModal from "../components/ClanUpdateModal";
import useStore from "../store/store";

import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isClanUpdateOpen, setisClanUpdateOpen] = useState(false);
  const { isAdminLogin, setisAdminLogin, setMenuOpen } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setisAdminLogin(true);
    } else {
      setisAdminLogin(false);
    }

    axios
      .get("https://sports-fest2425.vercel.app/api/leaderboard")
      .then((response) => {
        const sortedLeaderboard = response.data.sort(
          (a, b) => b.points - a.points
        );
        setLeaderboard(sortedLeaderboard);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  }, [setisAdminLogin]);

  const updateLeaderboard = (updatedLeaderboard) => {
    setLeaderboard(updatedLeaderboard);
  };

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
    );
  }, []);

  return (
    <div  className="max-w-full h-screen bg-[#171923] flex flex-col">
      <div className="Navbar w-full h-[12%] sticky top-0">
        <Navbar selected={"Leaderboard"} />
      </div>
      <div
      onClick={() => setMenuOpen(false)}
        className={`Navbar w-full flex flex-col justify-center items-center sm:[80%] h-[60%] ${
          isAdminLogin ? "mt-20" : "mt-20"
        } overflow-auto`}
      >
        <table className="w-[95%] sm:w-[80%] max-w-[1200px] table-auto overflow-hidden rounded-[2rem] shadow-xl">
          <thead>
            <tr
              onClick={() => navigate("/admin/login")}
              className="bg-gray-200 w-full text-gray-800 flex justify-between items-center overflow-hidden rounded-t-[2rem] border-b-2 border-black text-xl"
            >
              <th className="w-1/4 text-center px-4 py-3 font-clash">Rank</th>
              <th className="w-1/2 px-4 py-3 border-x-2 border-black font-clash text-center">
                Clan
              </th>
              <th className="w-1/4 px-4 py-3 font-clash text-center">Points</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((clan, index) => (
              <tr
                key={clan._id}
                className={`bg-${clan.clanName} hover:text-black border-b-2 border-black transition-colors flex justify-between items-center`}
              >
                <td className="px-4 py-3 text-3xl text-white w-1/4 text-center font-medium">
                  {index + 1}
                </td>
                <td className="px-4 py-3 w-1/2 border-x-2 border-black text-3xl font-clash text-center text-white">
                  {clan.clanName}
                </td>
                <td className="px-4 py-3 w-1/4 text-3xl font-clash text-center text-white">
                  {clan.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {isAdminLogin && (
        <div className="h-[20%] flex justify-center">
          <button
            onClick={() => setisClanUpdateOpen(true)}
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white text-xl sm:h-[40%] h-[30%] w-[30%] sm:w-[8%] font-bold py-2 px-4 rounded-md transition duration-300 flex justify-center items-center"
          >
            Update
          </button>
        </div>
      )}
      <ClanUpdateModal
        isOpen={isClanUpdateOpen}
        onClose={() => setisClanUpdateOpen(false)}
        updateLeaderboard={updateLeaderboard}
      />
    </div>
  );
};

export default Leaderboard;
