import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import useStore from "../store/store";

const ClanUpdateModal = ({ isOpen, onClose, updateLeaderboard }) => {
  const { setToastr } = useStore();
  const [clan, setClan] = useState({
    Clan: "",
    PlusPoints: "",
    MinusPoints: "",
  });

  const [selectedClan, setSelectedClan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dataEmpty = () => {
    setClan({
      Clan: "",
      PlusPoints: "",
      MinusPoints: "",
    });
    setSelectedClan("");
  };

  const handleClose = () => {
    dataEmpty();
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClan({ ...clan, [name]: value });
  };

  const handleInputColor = (e) => {
    const clanValue = e.target.value;
    setSelectedClan(clanValue);
    setClan((prevClan) => ({ ...prevClan, Clan: clanValue }));
  };

  const getBackgroundClass = (clan) => {
    switch (clan) {
      case "Titans":
        return "bg-Titans";
      case "Mavericks":
        return "bg-Mavericks";
      case "Predators":
        return "bg-Predators";
      case "Warriors":
        return "bg-Warriors";
      default:
        return "bg-gray-400";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const updatedClan = {
      clanName: clan.Clan,
      action: clan.PlusPoints ? "increase" : "decrease",
      points: parseInt(clan.PlusPoints || clan.MinusPoints, 10),
    };

    try {
      const response = await axios.post(
        "https://sports-fest2425.vercel.app/api/leaderboard/update",
        updatedClan
      );

      setToastr("Clan updated successfully");

      if (updateLeaderboard) {
        updateLeaderboard(response.data.leaderboard);
      }

      handleClose();
    } catch (error) {
      console.error("Error updating clan points:", error);
      setToastr("Failed to update points. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-poppins">
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="sm:w-[60%] sm:h-[60%] w-[80%] h-[70%] z-10 flex justify-around items-center flex-col rounded-2xl">
        <span className="w-full h-[100%] flex justify-center items-center flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-bg-blue p-6 w-[100%] flex flex-col gap-3 h-full rounded-md shadow-md overflow-y-auto overflow-hidden"
          >
            <span className="flex justify-center pl-5 h-[15%] tracking-wide static items-center bg-nav-blue font-clash rounded-md border-2 border-[#3f4755]">
              <h2 className="text-base sm:text-2xl text-nowrap text-white font-bold w-full flex justify-center">
                Update the Points of the Clan
              </h2>
              <Button onClick={handleClose}>
                <CloseIcon className="text-white" />
              </Button>
            </span>
            <form
              onSubmit={handleSubmit}
              className="sm:h-4/5 h-[70%] flex flex-col justify-center items-center sm:gap-5  gap-10"
            >
              <div className="sm:w-[62%] h-1/5 sm:h-1/5 w-[90%] flex justify-center items-center">
                <select
                  name="Clan"
                  value={selectedClan}
                  onChange={handleInputColor}
                  className={`w-full h-12 text-white pl-3 rounded-lg text-xl sm:text-xl border-2 border-[#3f4755] ${getBackgroundClass(
                    selectedClan
                  )}`}
                  required
                >
                  <option className="bg-gray-400 text-black" value="" disabled>
                    Select a Clan
                  </option>
                  <option className="bg-Titans " value="Titans">Titans</option>
                  <option className="bg-Mavericks" value="Mavericks">Mavericks</option>
                  <option className="bg-Predators" value="Predators">Predators</option>
                  <option className="bg-Warriors" value="Warriors">Warriors</option>
                </select>
              </div>
              <div className="sm:w-full w-[90%] h-[15%] flex flex-col sm:flex-row justify-center items-center gap-3 text-black placeholder:text-black">
                <input
                  type="number"
                  className="sm:w-[30%] w-full h-full p-3 rounded-lg bg-gray-400 placeholder:text-slate-600 border-2 border-[#3f4755] sm:text-lg text-sm"
                  placeholder="Increase Points"
                  name="PlusPoints"
                  value={clan.PlusPoints}
                  onChange={handleInputChange}
                  min="0"
                />
                <input
                  type="number"
                  className="sm:w-[30%] w-full h-full p-3 rounded-lg bg-gray-400 placeholder:text-slate-600 border-2 border-[#3f4755] sm:text-lg text-sm"
                  placeholder="Decrease Points"
                  name="MinusPoints"
                  value={clan.MinusPoints}
                  onChange={handleInputChange}
                  min="0"
                />
              </div>
              <div className="flex justify-center sm:pt-0 pt-5">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </motion.div>
        </span>
      </div>
    </div>
  );
};

export default ClanUpdateModal;
