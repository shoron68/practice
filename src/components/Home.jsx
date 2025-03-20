import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[#000] w-full h-100vh py-[100px] flex justify-center'>
            <ul className='text-center'>
            <Link to="/faq"> <li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center '>FAQ</li></Link>
                <Link to="/events"><li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'>Events</li></Link>
                <Link to="/download"><li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'>Download</li></Link>
                <Link to="/navtab"><li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'>NavTab</li></Link>
                <Link to="/slider"><li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'>Slider</li></Link>
            </ul>
    </div>
  )
}

export default Home