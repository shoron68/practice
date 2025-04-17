import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
                            <li key={tab.id} className="me-2 px-[30px]">
                                <button
                                    className={`relative inline-block text-[24px] font-bold transition-colors duration-300 ${activeTab === tab.id ? "text-[#7965E3]" : "text-[#888]"
                                        }`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <span className="absolute left-1/2 -translate-x-1/2 bottom-[-20px] h-[4px] w-[150%] rounded-full bg-[#7965E3]"></span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="pt-[62px]">
                    <AnimatePresence mode="wait">
                        {activeTab === "all" && (

                            <motion.div
                                key="all"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                                    <div className="relative group">
                                        <img src={pug} className="rounded-2xl " alt="" />
                                        <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                Play
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <img src={pug} className="rounded-2xl " alt="" />
                                        <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                Play
                                            </button>
                                        </div>
                                    </div>


                                    <div className="relative group">
                                        <img src={pug} className="rounded-2xl " alt="" />
                                        <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                Play
                                            </button>
                                        </div>
                                    </div>


                                    <div className="relative group">
                                        <img src={pug} className="rounded-2xl " alt="" />
                                        <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                Play
                                            </button>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex justify-center gap-x-8 mt-8">
                                    <div className="w-[25%]">
                                        <div className="relative group">
                                            <img src={pug} className="rounded-2xl " alt="" />
                                            <div className="h-[385px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                    Play
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="w-[25%]">
                                        <div className="relative group">
                                            <img src={pug} className="rounded-2xl " alt="" />
                                            <div className="h-[385px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                    Play
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="w-[25%]">
                                        <div className="relative group">
                                            <img src={pug} className="rounded-2xl " alt="" />
                                            <div className="h-[385px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                    Play
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        )}

                        {activeTab === "action" && (
                            <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "adventure" && (
                            <div className="grid grid-cols-4 gap-x-8 gap-y-5">
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <img src={pug} className="rounded-2xl " alt="" />
                                    <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                            Play
                                        </button>
                                    </div>
                                </div>
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
                                        <div className="relative group">
                                            <img src={pug} className="rounded-2xl " alt="" />
                                            <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                    Play
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-start-3 col-span-1 flex justify-center">
                                        <div className="relative group">
                                            <img src={pug} className="rounded-2xl " alt="" />
                                            <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                    Play
                                                </button>
                                            </div>
                                        </div>
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
                                        <div className="relative group">
                                            <img src={pug} className="rounded-2xl " alt="" />
                                            <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                    Play
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-start-3 col-span-1 flex justify-center">
                                        <div className="relative group">
                                            <img src={pug} className="rounded-2xl " alt="" />
                                            <div className="h-[360px] w-full bg-[rgba(0,0,0,0.26)] absolute top-0 left-0 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="py-[15px] px-[40px] bg-[#6349DE] rounded-2xl text-[20px] text-[#fff]  cursor-pointer ">
                                                    Play
                                                </button>
                                            </div>
                                        </div>
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
