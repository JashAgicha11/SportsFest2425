// src/components/Leaderboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ClanUpdateModal from "../components/ClanUpdateModal";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isClanUpdateOpen, setisClanUpdateOpen] = useState(false);

  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios
      .get("http://localhost:5000/api/leaderboard")
      .then((response) => {
        setLeaderboard(response.data);
      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#171923] flex flex-col justify-between">
      <div className="w-full h-[12%] sticky top-0">
        <Navbar selected={"LeaderBoard"} />
      </div>
      <div className="min-w-[90vh] flex flex-col justify-center items-center h-[50vh] relative top-[2rem] overflow-hidden border-collapse  rounded-[2rem]">
        <table className="w-[80%] rounded-[2rem] overflow-hidden shadow-xl">
          <thead>
            <tr className="bg-gray-200 w-full  text-gray-800 flex justify-center items-center overflow-hidden rounded-t-[2rem] border-b-2 border-black text-xl">
              <th className=" w-[20%] text-center  px-4 py-3  font-clash">
                Rank
              </th>
              <th className="w-[40%] px-4 py-3 border-x-2 border-black  font-clash text-center">
                Clan
              </th>
              <th className=" w-[40%] px-4 py-3 font-clash text-center">
                Points
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
            {leaderboard.map((clan, index) => (
              <tr
                key={clan._id}
                className={`bg-${clan.name}  hover:text-black   border-b-2 border-black transition-colors flex justify-center items-center w-[100%]`}
              >
                <td className="px-4 py-3 text-3xl  text-white w-[20%] text-center font-medium">
                  {index + 1}
                </td>
                <td className="px-4 py-3 w-[40%] border-x-2 border-black text-3xl font-clash text-center  text-white">
                  {clan.name}
                </td>
                <td className="px-4 py-3 w-[40%] text-3xl font-clash text-center text-white">
                  {clan.points}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="static h-[20vh] flex justify-center">
        <button
          onClick={() => setisClanUpdateOpen(true)}
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white text-xl h-[40%] w-[8%] font-bold py-2 px-4 rounded-md transition duration-300 flex justify-center items-center"
        >
          Update
        </button>
      </div>

      <ClanUpdateModal isOpen={isClanUpdateOpen} onClose={() => setisClanUpdateOpen(false)}/>
    </div>
  );
};

export default Leaderboard;
