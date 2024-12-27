import React from 'react'
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div className='w-full h-[100vh] bg-[#171923]'>
      <div className='w-full h-[12%]'>
        <Navbar selected={"Welcome"} />
      </div>
      <div className='w-full h-[38%] font-clash text-white relative top-[2rem] flex flex-col leading-10 text-2xl justify-center items-center'>
        <h2>Ahmedabad University's</h2>
        <h3>The Sports Club</h3>
        <h3>Presents</h3>
        <h1 className='text-[4rem] leading-[4rem] font-trench'>"Sports Fest 2025"</h1>
      </div>
      <div className='w-full h-[40%]'>
        <p></p>
      </div>
      <footer className='bg-[#202B38] w-full h-[10%] text-lg font-clash flex flex-col justify-center items-center text-white'>
        <h2>Created By :- Jash Agicha</h2>
        <h2>The Sports Club</h2>
      </footer>

      
    </div>
  )
}

export default Home
