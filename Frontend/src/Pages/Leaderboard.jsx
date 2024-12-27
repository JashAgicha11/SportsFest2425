// src/components/Leaderboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Fetch leaderboard data from the backend
    axios.get("http://localhost:5000/api/leaderboard")
      .then(response => {
        setLeaderboard(response.data);
      })
      .catch(error => {
        console.error("Error fetching leaderboard data:", error);
      });
  }, []);

  return (
    <div className='w-full h-[100vh] bg-[#171923]'>
      <div className="w-full h-[12%] sticky top-0">
        <Navbar selected={"leaderBoard"}/>
      </div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-lg font-semibold text-left">Rank</th>
            <th className="px-4 py-2 text-lg font-semibold text-left">Clan</th>
            <th className="px-4 py-2 text-lg font-semibold text-left">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((clan, index) => (
            <tr key={clan._id} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{clan.name}</td>
              <td className="px-4 py-2">{clan.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
