import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../store/store'



const Navbar = ({selected,bg}) => {
  
  const navigate = useNavigate()
  // const {selected,setSelected} = useStore()
  const handleNavigate = (path) =>{
    // setSelected(label)
    navigate(path)
  }
  // useEffect(() => {
  //   const savedSelected = localStorage.getItem("selected");
  //   if (savedSelected) {
  //     setSelected(savedSelected); 
  //   }
  // }, [setSelected]);

  // useEffect(() => {
  //   if (selected) {
  //     localStorage.setItem("selected", selected);
  //   }
  // }, [selected]);

  return (
    <>
    <div className='min-w-full h-full rounded-b-lg bg-[#161926] border-b-2 border-[#2D3748] drop-shadow-2xl invert-0 flex justify-around items-center text-2xl text-white font-clash static'>
      <h2 className='cursor-pointer hover:text-white-400' onClick={()=>handleNavigate("/clans")}>Clans</h2>
      <h2 className='cursor-pointer hover:text-white-400' onClick={()=>handleNavigate("/leaderboard")}>Leaderboard</h2>
      <h2 className='cursor-pointer hover:text-white-400 text-4xl font-trench' onClick={()=>handleNavigate("/")}>Sports Fest</h2>
      <h2 className='cursor-pointer hover:text-white-400' onClick={()=>handleNavigate("/fixtures")}>Fixtures</h2>
      <h2 className='cursor-pointer hover:text-white-400' onClick={()=>handleNavigate("/about")}>About Us</h2>
    </div>
    <div className='w-full flex justify-center items-center h-[60%] static'>
        <div className={`h-full border-2 border-[#3f4755] drop-shadow-lg border-t-0 w-[20%] bg-[#202B38] bg-${bg} flex justify-center items-center rounded-b-[2.5rem]`}>
          <h2 className='text-white text-[1.8rem] w-full text-center tracking-widest font-stencil'>{selected}</h2>
        </div>
    </div>
    </>
  )
}

export default Navbar
