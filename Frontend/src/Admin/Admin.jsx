import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminPortal from './AdminPortal';
import Leaderboard from '../Pages/Leaderboard';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [clans, setClans] = useState([
    { name: 'Clan A', points: 50 },
    { name: 'Clan B', points: 70 },
    { name: 'Clan C', points: 30 },
    { name: 'Clan D', points: 90 },
  ]);

  const handleLoginSuccess = () => {
    setIsAdmin(true);
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleUpdatePoints = (clanName, points) => {
    setClans((prevClans) =>
      prevClans.map((clan) =>
        clan.name === clanName ? { ...clan, points: clan.points + points } : clan
      )
    );
  };

  return isAdmin ? (
    <AdminPortal
      clans={clans}
      onUpdatePoints={handleUpdatePoints}
      onLogout={handleLogout}
    />
  ) : (
    <AdminLogin onLoginSuccess={handleLoginSuccess} />
  );
};

export default App;
