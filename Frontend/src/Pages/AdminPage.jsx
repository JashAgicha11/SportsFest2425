import React, { useEffect, useState } from 'react';

const AdminPage = () => {
  const [clans, setClans] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    fetch('/api/leaderboard')
      .then((res) => res.json())
      .then((data) => setClans(data));
  }, []);

  const updatePoints = (id) => {
    fetch(`/api/admin/update-points/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ points }),
    })
      .then((res) => res.json())
      .then(() => {
        setClans((prev) =>
          prev.map((clan) =>
            clan._id === id ? { ...clan, points: clan.points + points } : clan
          )
        );
      });
  };

  return (
    <div className="w-full h-[100vh] bg-[#171923] text-white">
      <h1 className="text-2xl font-bold p-5">Admin Panel</h1>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th>Clan Name</th>
            <th>Points</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clans.map((clan) => (
            <tr key={clan._id}>
              <td>{clan.name}</td>
              <td>{clan.points}</td>
              <td>
                <input
                  type="number"
                  value={points}
                  onChange={(e) => setPoints(parseInt(e.target.value))}
                  className="w-20 p-1"
                />
                <button
                  onClick={() => updatePoints(clan._id)}
                  className="ml-2 bg-blue-500 px-3 py-1 rounded"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
