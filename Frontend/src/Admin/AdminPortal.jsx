import React from 'react';

const AdminPortal = ({ clans, onUpdatePoints, onLogout }) => {
  const handleUpdatePoints = (clanName, points) => {
    onUpdatePoints(clanName, points);
  };

  return (
    <div className="w-full h-screen bg-[#171923] text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Portal</h1>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700"
        >
          Logout
        </button>
      </div>
      <div className="w-full max-w-[800px] bg-[#2D3748] p-6 rounded-lg shadow-md">
        {clans.map((clan) => (
          <div
            key={clan.name}
            className="flex justify-between items-center mb-4 p-4 bg-[#1A202C] rounded-lg"
          >
            <div className="text-lg">{clan.name}</div>
            <div className="flex gap-4 items-center">
              <span className="text-xl">{clan.points}</span>
              <button
                onClick={() => handleUpdatePoints(clan.name, 3)}
                className="px-4 py-2 bg-[#38A169] rounded text-white hover:bg-[#2F855A]"
              >
                +3
              </button>
              <button
                onClick={() => handleUpdatePoints(clan.name, 5)}
                className="px-4 py-2 bg-[#3182CE] rounded text-white hover:bg-[#2B6CB0]"
              >
                +5
              </button>
              <button
                onClick={() => handleUpdatePoints(clan.name, -3)}
                className="px-4 py-2 bg-[#E53E3E] rounded text-white hover:bg-[#C53030]"
              >
                -3
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPortal;
