import React from "react";
import pubg from "../assets/pubg.avif";
import Container from "./Container";

const Download = () => {
  return (
    <div className=" bg-[#000]">
        <Container className="py-[128px]">
        <div 
      className="relative w-full h-[500px] flex overflow-hidden"
    >
      
      
      <div className="relative w-1/3 h-full flex left-[129px] items-center justify-center text-white text-3xl font-bold"
      style={{
        backgroundImage: `url(${pubg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" 
      }}>
      <div
        className="">
        Download
      </div>
     
      </div>

    
     
      
      <div
        className="relative w-1/3 h-full flex items-center justify-center text-white text-3xl font-bold"
        style={{
          backgroundImage: `url(${pubg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "polygon(25% 0, 100% 0, 75% 100%, 0% 100%)"
        }}
      >
        <div className="">
        Play
        </div>
      
      </div>
      

      
      <div
        className="relative w-1/3 h-full flex items-center justify-center text-white text-3xl font-bold right-[129px]"
        style={{
          backgroundImage: `url(${pubg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0% 100%)"
        }}
      >
        <div className="">
        Win
        </div>
      </div>
      

    </div>
    </Container>
    </div>
  );
};

export default Download;
