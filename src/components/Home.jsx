import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-[#000] w-full h-100vh py-[100px] flex justify-center'>
            <ul className='text-center'>
                <li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center '><Link to="/faq">FAQ</Link></li>
                <li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'><Link to="/events">Events</Link></li>
                <li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'><Link to="/download">Download</Link></li>
                <li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'><Link to="/navtab">NavTab</Link></li>
                <li className='text-[#000] font-bold text-[24px] h-[50px] w-[200px] bg-[#FFCD00] flex justify-center  items-center  my-[20px]'><Link to="/slider">Slider</Link></li>
            </ul>
    </div>
  )
}

export default Home