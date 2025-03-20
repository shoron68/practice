import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import "./style.css";
import Container from './Container';
import pubg from "../assets/pubg.avif";

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
                        <div className="flex justify-between">
                            <div className="w-[45%]">
                                <img src={pubg} className='w-full rounded-2xl object-fill' alt="" />
                            </div>
                            <div className="w-[50%]">
                                <div className="pt-[100px]">
                                    <h2 className='text-[24px] text-[#6756C0]'>Action And Adventure</h2>
                                    <h1 className='text-[52px] uppercase'>Go Ninja</h1>
                                    <p className='text-[16px] w-[73%] font-normal'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-between">
                            <div className="w-[45%]">
                                <img src={pubg} className='w-full rounded-2xl object-fill' alt="" />
                            </div>
                            <div className="w-[50%]">
                                <div className="pt-[100px]">
                                    <h2 className='text-[24px] text-[#6756C0]'>Action And Adventure</h2>
                                    <h1 className='text-[52px] uppercase'>Go Ninja</h1>
                                    <p className='text-[16px] w-[73%] font-normal'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex justify-between">
                            <div className="w-[45%]">
                                <img src={pubg} className='w-full rounded-2xl object-fill' alt="" />
                            </div>
                            <div className="w-[50%]">
                                <div className="pt-[100px]">
                                    <h2 className='text-[24px] text-[#6756C0]'>Action And Adventure</h2>
                                    <h1 className='text-[52px] uppercase'>Go Ninja</h1>
                                    <p className='text-[16px] w-[73%] font-normal'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                                    </p>
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
