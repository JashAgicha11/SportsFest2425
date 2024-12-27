import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import PublicOnlyRoute from "./Utils/PublicOnlyRoute";
import React, { useEffect } from "react";
// pages
import Home from "./Pages/Home";
import LeaderBoard from "./Pages/Leaderboard";
import Clans from "./Pages/Clans";
import AboutUs from "./Pages/AboutUs";
import Fixtures from "./Pages/Fixtures";
import ClanDetails from "./components/ClanDetails";
import AdminLogin from "./components/AdminLogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicOnlyRoute Component={Home} />} />
        <Route
          path="/leaderboard"
          element={<PublicOnlyRoute Component={LeaderBoard} />}
        />
        <Route path="/clans" element={<PublicOnlyRoute Component={Clans} />} />
        <Route
          path="/clans/titans"
          element={
            <PublicOnlyRoute Component={() => <ClanDetails clan="Titans" />} />
          }
        />
        <Route
          path="/clans/mavericks"
          element={
            <PublicOnlyRoute
              Component={() => <ClanDetails clan="Mavericks" />}
            />
          }
        />
        <Route
          path="/clans/predators"
          element={
            <PublicOnlyRoute
              Component={() => <ClanDetails clan="Predators" />}
            />
          }
        />
        <Route
          path="/clans/warriors"
          element={
            <PublicOnlyRoute
              Component={() => <ClanDetails clan="Warriors" />}
            />
          }
        />
        <Route
          path="/about"
          element={<PublicOnlyRoute Component={AboutUs} />}
        />
        <Route
          path="/fixtures"
          element={<PublicOnlyRoute Component={Fixtures} />}
        />
        <Route
          path="/admin/login"
          element={<PublicOnlyRoute Component={AdminLogin} />}
        />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
