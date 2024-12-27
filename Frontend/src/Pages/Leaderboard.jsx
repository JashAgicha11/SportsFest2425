import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
  const [clans, setClans] = useState([]);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((res) => res.json())
      .then((data) => setClans(data));
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#171923] text-white">
      <Navbar selected="Leaderboard" />
      <div className="container mx-auto p-5">
        <h1 className="text-2xl font-bold">Leaderboard</h1>
        <table className="table-auto w-full mt-5 text-left">
          <thead>
            <tr>
              <th>#</th>
              <th>Clan Name</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {clans.map((clan, index) => (
              <tr key={clan._id}>
                <td>{index + 1}</td>
                <td>{clan.name}</td>
                <td>{clan.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
