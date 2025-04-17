import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import "./style.css";
import Container from './Container';
import pubg from "../assets/pubg.avif";
import "../index.css"
import { PiGameControllerThin } from "react-icons/pi";



const Slider = () => {
    return (
        <div className="bg-[#000]">
            <Container className="py-[124px]">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Autoplay]} 
                    autoplay={{ 
                        delay: 4000,  
                        disableOnInteraction: false,
                        speed:1000,
                    }}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="flex justify-between ">
                            <div className="w-[45%]">
                                <img src={pubg} className='w-full rounded-2xl object-fill' alt="" />
                            </div>
                            <div className="w-[50%] bg-[#12101C]">
                                <div className="pt-[100px]">
                                    <h2 className='text-[24px] text-[#6756C0]'>Action And Adventure</h2>
                                    <h1 className='text-[52px] uppercase'>Go Ninja</h1>
                                    <p className='text-[16px] w-[73%] font-normal'>
                                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, sunt? Provident aut, quas minima cupiditate veritatis illum! Iste, doloribus. Doloribus aperiam repudiandae molestias ullam doloremque numquam odio quos, culpa asperiores veritatis, inventore minus itaque architecto veniam aspernatur eius quibusdam facilis, neque blanditiis quasi fugiat dolores. Vel fugiat ipsa voluptatibus illum!
                                    </p>
                                    <div className="flex items-center">
                                        <div className="">
                                        <PiGameControllerThin  className='text-[100px] text-[#6756C0] font-light'/>
                                        </div>
                                        <div className=" ml-[40px]">
                                            <h4 className='text-[40px] '>45000</h4>
                                            <h5 className='text-[16px] font-normal'>Game Played</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-between slider2">
                            <div className="w-[45%]">
                                <img src={pubg} className='w-full rounded-2xl object-fill' alt="" />
                            </div>
                            <div className="w-[50%] bg-[#12101C]">
                                <div className="pt-[100px]">
                                    <h2 className='text-[24px] text-[#6756C0]'>Action And Adventure</h2>
                                    <h1 className='text-[52px] uppercase'>Go Ninja</h1>
                                    <p className='text-[16px] w-[73%] font-normal'>
                                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, sunt? Provident aut, quas minima cupiditate veritatis illum! Iste, doloribus. Doloribus aperiam repudiandae molestias ullam doloremque numquam odio quos, culpa asperiores veritatis, inventore minus itaque architecto veniam aspernatur eius quibusdam facilis, neque blanditiis quasi fugiat dolores. Vel fugiat ipsa voluptatibus illum!
                                    </p>
                                    <div className="flex items-center">
                                        <div className="">
                                        <PiGameControllerThin  className='text-[100px] text-[#6756C0] font-light'/>
                                        </div>
                                        <div className=" ml-[40px]">
                                            <h4 className='text-[40px] '>45000</h4>
                                            <h5 className='text-[16px] font-normal'>Game Played</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-between">
                            <div className="w-[45%]">
                                <img src={pubg} className='w-full rounded-2xl object-fill' alt="" />
                            </div>
                            <div className="w-[50%] bg-[#12101C]">
                                <div className="pt-[100px]">
                                    <h2 className='text-[24px] text-[#6756C0]'>Action And Adventure</h2>
                                    <h1 className='text-[52px] uppercase'>Go Ninja</h1>
                                    <p className='text-[16px] w-[73%] font-normal'>
                                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, sunt? Provident aut, quas minima cupiditate veritatis illum! Iste, doloribus. Doloribus aperiam repudiandae molestias ullam doloremque numquam odio quos, culpa asperiores veritatis, inventore minus itaque architecto veniam aspernatur eius quibusdam facilis, neque blanditiis quasi fugiat dolores. Vel fugiat ipsa voluptatibus illum!
                                    </p>
                                    <div className="flex items-center">
                                        <div className="">
                                        <PiGameControllerThin  className='text-[100px] text-[#6756C0] font-light'/>
                                        </div>
                                        <div className=" ml-[40px]">
                                            <h4 className='text-[40px] '>45000</h4>
                                            <h5 className='text-[16px] font-normal'>Game Played</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </div>
    );
}

export default Slider;



// components/GameCardSliderMotion.jsx
// components/GameCardSlider.jsx
// import React, { useState } from "react";
// import pubg from "../assets/pubg.avif";
// import { ChevronLeft, ChevronRight } from "lucide-react"; // Optional: Lucide icons

// const Slider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === 0 ? 1 : 0));
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? 1 : 0));
//   };

//   return (
//     <div className="relative w-full bg-black min-h-screen flex items-center justify-center">
//       {/* Slider wrapper */}
//       <div className="relative w-full max-w-[1400px] px-6 flex justify-center items-center">
//         {/* Left arrow */}
//         <button
//           onClick={handlePrev}
//           className="absolute left-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
//         >
//           <ChevronLeft size={32} />
//         </button>

//         {/* Right arrow */}
//         <button
//           onClick={handleNext}
//           className="absolute right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2"
//         >
//           <ChevronRight size={32} />
//         </button>

//         {/* Slide content */}
//         <div className="flex relative w-full justify-center h-[500px] transition-all duration-500">
//           {/* Only render one section at a time */}
//           {activeIndex === 0 ? (
//             <div className="flex">
//               {/* Card */}
//               <div className="relative w-[500px] h-[600px]">
//                 <img
//                   src={pubg}
//                   className="object-cover w-full h-[500px] rounded-tl-2xl rounded-bl-2xl"
//                   alt="slide1"
//                 />
//               </div>

//               {/* Details */}
//               <div className="bg-[#0e0c1b] text-white pl-[100px] pt-[100px] rounded-tr-2xl rounded-br-2xl w-[900px]">
//                 <p className="text-purple-400 text-[24px] font-semibold">
//                   Action And Adventure
//                 </p>
//                 <h2 className="text-[64px] font-bold">GO NINJA</h2>
//                 <p className="text-gray-300 w-[80%]">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus...
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="flex">
//               {/* Card */}
//               <div className="relative w-[500px] h-[600px]">
//                 <img
//                   src={pubg}
//                   className="object-cover w-full h-[500px] rounded-tl-2xl rounded-bl-2xl"
//                   alt="slide2"
//                 />
//               </div>

//               {/* Details */}
//               <div className="bg-[#0e0c1b] text-white pl-[100px] pt-[100px] rounded-tr-2xl rounded-br-2xl w-[900px]">
//                 <p className="text-purple-400 text-[24px] font-semibold">
//                   Action And Adventure
//                 </p>
//                 <h2 className="text-[64px] font-bold">GO NINJA</h2>
//                 <p className="text-gray-300 w-[80%]">
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus...
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;



