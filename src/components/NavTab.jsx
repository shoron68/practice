import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Container from "./Container";
import pug from "../assets/pubg.avif";

const tabData = [
    { id: "all", label: "All" },
    { id: "action", label: "Action" },
    { id: "adventure", label: "Adventure" },
    { id: "arcade", label: "Arcade" },
    { id: "puzzle", label: "Puzzle" },
];

const NavTab = () => {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="bg-[#0E1115]">
            <Container className="py-[129px]">
                <div className="text-center">
                    <h2 className="text-[42px] text-[#fff] font-josefin font-bold">
                        Featured Game
                    </h2>
                </div>

                <div className="bg-[#212121] py-[20px] w-[80%] mx-auto">
                    <ul className="flex flex-wrap justify-center text-[24px] font-bold text-center">
                        {tabData.map((tab) => (
                            <li key={tab.id} className="me-2 px-[30px]" role="presentation">
                                <button
                                    className={`inline-block text-[24px] font-bold ${
                                        activeTab === tab.id ? "text-blue-500" : "text-[#fff]"
                                    }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

            
                <div id="default-tab-content" className="pt-[62px]">
                    <AnimatePresence mode="wait" >
                        {activeTab === "all" && (
                            <motion.div 
                                key="all"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="grid grid-cols-4 grid-rows-1 gap-x-8 gap-y-5">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i} className="">
                                            <img src={pug} className="rounded-2xl" alt="" />
                                            
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center gap-x-8 mt-8">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="w-[25%]">
                                            <img src={pug} className="rounded-2xl" alt="" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === "action" && (
                            
                                <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i}>
                                            <img src={pug} className="rounded-2xl" alt="" />
                                        </div>
                                    ))}
                                </div>
                            
                        )}

                        {activeTab === "adventure" && (
                            
                                <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                                    {[...Array(4)].map((_, i) => (
                                        <div key={i}>
                                            <img src={pug} className="rounded-2xl" alt="" />
                                        </div>
                                    ))}
                                </div>
                            
                        )}

                        {activeTab === "arcade" && (
                            <motion.div 
                                key="arcade"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                                    <div className="col-start-2 col-span-1 flex justify-center">
                                        <img src={pug} className="rounded-2xl" alt="" />
                                    </div>
                                    <div className="col-start-3 col-span-1 flex justify-center relative group  ">
                                        <img src={pug} className="rounded-2xl" alt="" />
                                        
                                    </div>
                                </div>
                                
                            </motion.div>
                        )}

                        {activeTab === "puzzle" && (
                            <motion.div 
                                key="puzzle"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                                    <div className="col-start-2 col-span-1 flex justify-center">
                                        <img src={pug} className="rounded-2xl" alt="" />
                                    </div>
                                    <div className="col-start-3 col-span-1 flex justify-center">
                                        <img src={pug} className="rounded-2xl" alt="" />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Container>
        </div>
    );
};

export default NavTab;
