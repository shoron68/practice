import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import img from "../assets/pubg.avif"
import coc from "../assets/coc.jpg"
import { IoIosArrowForward,IoIosArrowBack  } from "react-icons/io";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} style={{ ...style, display: "block",fontSize:"30px" ,color:"#fff", position:"absolute", bottom:"-120px", right:"280px", border:"1px solid #fff",padding:"8px", borderRadius:"6px" }} onClick={onClick}> <IoIosArrowForward/> </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className} style={{ ...style, display: "block",fontSize:"30px" ,color:"#fff", position:"absolute", bottom:"-120px", right:"350px", border:"1px solid #fff",padding:"8px", borderRadius:"6px"  }} onClick={onClick}> <IoIosArrowBack/> </div>
    );
  }


const Events = () => {
    
   
        var settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]

    }
  return (
    <div className="bg-[#15161C] pt-[124px] pb-[300px] ">
    <div className="slider-container ml-[240px]  top-0 right-0 z-20">
      <Slider {...settings}>
        <div>
          <div className="pl-4">
            <div className=" bg-[#212121] text-white rounded-lg shadow-lg">

      <div className="relative">
        <img
          className=" w-full h-60 object-cover rounded-lg"
          src={img}
          alt="Event"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          Live
        </span>
      </div>

 
      <div className="mt-4 mx-4 pb-[20px]">
        <div className="flex justify-between">
        <span className="inline-block bg-purple-700 px-2 py-1 text-xs font-semibold rounded">
          Nov 5, 2023
        </span>
        <span className="text-yellow-400 font-bold">3000 tk</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">Jeeto.Online Platform Events Title...</h2>
        </div>

 
        <div className="flex justify-between mt-2">
          <div className=" font-medium flex items-center">
           <div className="">
           <div className="w-6 h-6 flex items-center justify-center text-xs mr-2">
              <img src={coc} className='rounded-[2px]' alt="" />
            </div>
           </div>
            <div className=" ml-4">
            <h4>Paperfly</h4>
            <h5 className=" text-[#fff] text-sm">Puzzle</h5>
            </div>
          </div>
          <div className="mt-2 text-sm text-[#fff]">
          <p>
            <span className="font-semibold text-[#7562DA]">Event Start:</span> Nov 11, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Event End:</span> Dec 10, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Total Winners:</span> 10
          </p>
        </div>
        </div>

        <div className="mt-2 text-sm">
          <h3><span className="font-semibold">Entry Cost:</span> <span className="text-yellow-400">30 Tk</span></h3>
          <h4><span className=" font-semibold text-[#7562DA]">Total Participants:</span> <span className="text-[#fff]">600</span></h4>
        </div>

      </div>
    </div>
          </div>
        </div>
        <div>
          <div className="pl-4">
            <div className=" bg-[#212121] text-white rounded-lg shadow-lg ">

      <div className="relative">
        <img
          className=" w-full h-60 object-cover rounded-lg"
          src={img}
          alt="Event"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          Live
        </span>
      </div>

 
      <div className="mt-4 mx-4 pb-[20px]">
        <div className="flex justify-between">
        <span className="inline-block bg-purple-700 px-2 py-1 text-xs font-semibold rounded">
          Nov 5, 2023
        </span>
        <span className="text-yellow-400 font-bold">3000 tk</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">Jeeto.Online Platform Events Title...</h2>
        </div>

 
        <div className="flex justify-between mt-2">
          <div className=" font-medium flex items-center">
           <div className="">
           <div className="w-6 h-6 flex items-center justify-center text-xs mr-2">
              <img src={coc} className='rounded-[2px]' alt="" />
            </div>
           </div>
            <div className=" ml-4">
            <h4>Paperfly</h4>
            <h5 className=" text-[#fff] text-sm">Puzzle</h5>
            </div>
          </div>
          <div className="mt-2 text-sm text-[#fff]">
          <p>
            <span className="font-semibold text-[#7562DA]">Event Start:</span> Nov 11, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Event End:</span> Dec 10, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Total Winners:</span> 10
          </p>
        </div>
        </div>

        <div className="mt-2 text-sm">
          <h3><span className="font-semibold">Entry Cost:</span> <span className="text-yellow-400">30 Tk</span></h3>
          <h4><span className=" font-semibold text-[#7562DA]">Total Participants:</span> <span className="text-[#fff]">600</span></h4>
        </div>

      </div>
    </div>
          </div>
        </div>
        <div>
          <div className="pl-4">
            <div className=" bg-[#212121] text-white rounded-lg shadow-lg ">

      <div className="relative">
        <img
          className=" w-full h-60 object-cover rounded-lg"
          src={img}
          alt="Event"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          Live
        </span>
      </div>

 
      <div className="mt-4 mx-4 pb-[20px]">
        <div className="flex justify-between">
        <span className="inline-block bg-purple-700 px-2 py-1 text-xs font-semibold rounded">
          Nov 5, 2023
        </span>
        <span className="text-yellow-400 font-bold">3000 tk</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">Jeeto.Online Platform Events Title...</h2>
        </div>

 
        <div className="flex justify-between mt-2">
          <div className=" font-medium flex items-center">
           <div className="">
           <div className="w-6 h-6 flex items-center justify-center text-xs mr-2">
              <img src={coc} className='rounded-[2px]' alt="" />
            </div>
           </div>
            <div className=" ml-4">
            <h4>Paperfly</h4>
            <h5 className=" text-[#fff] text-sm">Puzzle</h5>
            </div>
          </div>
          <div className="mt-2 text-sm text-[#fff]">
          <p>
            <span className="font-semibold text-[#7562DA]">Event Start:</span> Nov 11, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Event End:</span> Dec 10, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Total Winners:</span> 10
          </p>
        </div>
        </div>

        <div className="mt-2 text-sm">
          <h3><span className="font-semibold">Entry Cost:</span> <span className="text-yellow-400">30 Tk</span></h3>
          <h4><span className=" font-semibold text-[#7562DA]">Total Participants:</span> <span className="text-[#fff]">600</span></h4>
        </div>

      </div>
    </div>
          </div>
        </div>




        <div>
          <div className="pl-4">
            <div className=" bg-[#212121] text-white rounded-lg shadow-lg ">

      <div className="relative">
        <img
          className=" w-full h-60 object-cover rounded-lg"
          src={img}
          alt="Event"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          Live
        </span>
      </div>

 
      <div className="mt-4 mx-4 pb-[20px]">
        <div className="flex justify-between">
        <span className="inline-block bg-purple-700 px-2 py-1 text-xs font-semibold rounded">
          Nov 5, 2023
        </span>
        <span className="text-yellow-400 font-bold">3000 tk</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">Jeeto.Online Platform Events Title...</h2>
        </div>

 
        <div className="flex justify-between mt-2">
          <div className=" font-medium flex items-center">
           <div className="">
           <div className="w-6 h-6 flex items-center justify-center text-xs mr-2">
              <img src={coc} className='rounded-[2px]' alt="" />
            </div>
           </div>
            <div className=" ml-4">
            <h4>Paperfly</h4>
            <h5 className=" text-[#fff] text-sm">Puzzle</h5>
            </div>
          </div>
          <div className="mt-2 text-sm text-[#fff]">
          <p>
            <span className="font-semibold text-[#7562DA]">Event Start:</span> Nov 11, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Event End:</span> Dec 10, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Total Winners:</span> 10
          </p>
        </div>
        </div>

        <div className="mt-2 text-sm">
          <h3><span className="font-semibold">Entry Cost:</span> <span className="text-yellow-400">30 Tk</span></h3>
          <h4><span className=" font-semibold text-[#7562DA]">Total Participants:</span> <span className="text-[#fff]">600</span></h4>
        </div>

      </div>
    </div>
          </div>
        </div>
        <div>
          <div className="pl-4">
            <div className=" bg-[#212121] text-white rounded-lg shadow-lg ">

      <div className="relative">
        <img
          className=" w-full h-60 object-cover rounded-lg"
          src={img}
          alt="Event"
        />
        <span className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 text-xs font-bold rounded">
          Live
        </span>
      </div>

 
      <div className="mt-4 mx-4 pb-[20px]">
        <div className="flex justify-between">
        <span className="inline-block bg-purple-700 px-2 py-1 text-xs font-semibold rounded">
          Nov 5, 2023
        </span>
        <span className="text-yellow-400 font-bold">3000 tk</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <h2 className="text-lg font-semibold">Jeeto.Online Platform Events Title...</h2>
        </div>

 
        <div className="flex justify-between mt-2">
          <div className=" font-medium flex items-center">
           <div className="">
           <div className="w-6 h-6 flex items-center justify-center text-xs mr-2">
              <img src={coc} className='rounded-[2px]' alt="" />
            </div>
           </div>
            <div className=" ml-4">
            <h4>Paperfly</h4>
            <h5 className=" text-[#fff] text-sm">Puzzle</h5>
            </div>
          </div>
          <div className="mt-2 text-sm text-[#fff]">
          <p>
            <span className="font-semibold text-[#7562DA]">Event Start:</span> Nov 11, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Event End:</span> Dec 10, 2023
          </p>
          <p>
            <span className="font-semibold text-[#7562DA]">Total Winners:</span> 10
          </p>
        </div>
        </div>

        <div className="mt-2 text-sm">
          <h3><span className="font-semibold">Entry Cost:</span> <span className="text-yellow-400">30 Tk</span></h3>
          <h4><span className=" font-semibold text-[#7562DA]">Total Participants:</span> <span className="text-[#fff]">600</span></h4>
        </div>

      </div>
    </div>
          </div>
        </div>


       


        
        
        
        
      </Slider>
    </div>

    </div>
  )
}

export default Events