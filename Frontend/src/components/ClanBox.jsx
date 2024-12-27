import React from 'react'
import classNames from "classnames";
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';


const ClanBox = ({colour,ClanName}) => {
  const navigate = useNavigate()
  const setClan = useStore((state) => state.setClan); 
  const handleClick = (path) =>{
    navigate(`/clans/${path}`)
    setClan(path)
  }
  return (
    <div onClick={() => handleClick(colour)}   className={classNames(
      "w-[45%] h-[40%] cursor-pointer rounded-md flex justify-start items-center border-black drop-shadow-md",
      {
        "bg-Titans": colour === "Titans",
        "bg-Mavericks": colour === "Mavericks",
        "bg-Predators": colour === "Predators",
        "bg-Warriors": colour === "Warriors",
      }
    )}>
      <h2 className='text-white text-[2.5rem] text-start relative font-clash left-[2rem]'>{ClanName}</h2>
    </div>
  )
}

export default ClanBox
