import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import useStore from "../store/store";

const ClanUpdateModal = ({ isOpen, onClose }) => {
    const {setToastr} = useStore()
  const [clan, setClan] = useState({
    Clan: "",
    PlusPoints: "",
    MinusPoints: "",
  });

  const dataEmpty = () => {
    setClan({
      Clan: "",
      PlusPoints: "",
      MinusPoints: "",
    });
  };

  const handleClose = () => {
    dataEmpty();
    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClan({ ...clan, [name]: value });
  };

  const [selectedClan, setSelectedClan] = useState("");

  const handleInputColor = (e) => {
    const clanValue = e.target.value;
    setSelectedClan(clanValue);
    setClan((prevClan) => ({ ...prevClan, Clan: clanValue }));
  };

  const getBackgroundClass = (clan) => {
    switch (clan) {
      case "Titans":
        return "bg-Titans"; // Titans color
      case "Mavericks":
        return "bg-Mavericks"; // Mavericks color
      case "Predators":
        return "bg-Predators"; // Predators color
      case "Warriors":
        return "bg-Warriors"; // Warriors color
      default:
        return "bg-gray-400"; // Default color
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedClan = {
      ...clan,
      PlusPoints: parseInt(clan.PlusPoints, 10),
      MinusPoints: parseInt(clan.MinusPoints, 10),
    };
    setToastr("Clan updated successfully");
    console.log(updatedClan);
    handleClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-poppins">
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      <div className="w-[60%] h-[60%] z-10 flex justify-around items-center flex-col rounded-2xl">
        <span className="w-full h-[100%] flex justify-center items-center flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-bg-blue p-6 w-[100%] flex flex-col gap-3 h-full rounded-md shadow-md overflow-y-auto overflow-hidden"
          >
            <span className="flex justify-center pl-5 h-[15%] tracking-wide static items-center bg-nav-blue font-clash rounded-md border-2 border-[#3f4755]">
              <h2 className="text-2xl text-nowrap text-white font-bold w-full flex justify-center">
                Update the Points of the Clan
              </h2>
              <Button onClick={handleClose}>
                <CloseIcon className="text-white" />
              </Button>
            </span>
            <form
              onSubmit={handleSubmit}
              className="h-4/5 flex flex-col justify-center items-center gap-5"
            >
              <div className="w-[62%] h-1/5 flex justify-center items-center">
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
              <div className="w-full h-[15%] flex justify-center items-center gap-3 text-black placeholder:text-black">
                <input
                  type="number"
                  className="w-[30%] h-full p-3 rounded-lg bg-gray-400 placeholder:text-slate-600 border-2 border-[#3f4755] sm:text-lg text-sm"
                  placeholder="Increase Points"
                  name="PlusPoints"
                  value={clan.PlusPoints}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  className="w-[30%] h-full p-3 rounded-lg bg-gray-400 placeholder:text-slate-600 border-2 border-[#3f4755] sm:text-lg text-sm"
                  placeholder="Decrease Points"
                  name="MinusPoints"
                  value={clan.MinusPoints}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                  Submit
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