"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { testimonials } from "@/Data/data";
import Image from "next/image";

const CustomerSays = () => {
  return (
    <>
      <div className="bg-appColor-secondary/60 p-5 lg:py-20">
        <h3 className="text-white uppercase font-bold text-4xl lg:text-5xl tracking-wide text-center">
          client says
        </h3>
        <div className="mt-10 lg:mt-20 overflow-hidden">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {testimonials.map((client, index) => (
              <SwiperSlide key={index} className="p-5 lg:p-10 rounded-3xl bg-white">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-lg lg:text-2xl font-normal text-center text-appColor-secondary app-text">{client.comment}</p>
                  <div className="mt-5 lg:mt-10 flex flex-col items-center justify-center">
                    <Image
                      src={client.image}
                      alt="client-image"
                      width={100}
                      height={100}
                      className="rounded-full object-cover mb-5 border-2"
                    />
                    <h5 className="font-semibold capitalize text-base lg:text-xl text-appColor-secondary app-text">{client.name}</h5>
                    <p className= "text-appColor-secondary text-sm lg:text-base app-text">{client.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CustomerSays;
