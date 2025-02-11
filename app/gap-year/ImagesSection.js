"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function ImagesSection() {
  const [football, setFootball] = useState(true);
  const footballPhotos = [];
  const residencePhotos = [
    "/images/MiCampus/1.png",
    "/images/MiCampus/2.png",
    "/images/MiCampus/3.png",
    "/images/MiCampus/4.png",
    "/images/MiCampus/5.png",
    "/images/MiCampus/6.png",
    "/images/MiCampus/7.png",
    "/images/MiCampus/8.png",
    "/images/MiCampus/9.png",
    "/images/MiCampus/10.png",
    "/images/MiCampus/11.png",
    "/images/MiCampus/12.png",
    "/images/MiCampus/13.png",
    "/images/MiCampus/14.png",
    "/images/MiCampus/15.png",
    "/images/MiCampus/16.png",
  ];
  return (
    <section className="w-screen h-screen flex flex-col  bg-black py-24">
      <div className="w-full flex flex-col lg:flex-row px-24">
        <button
          className={`${
            football
              ? "bg-white text-black border-white"
              : "text-white border-white"
          } border-2 flex-1 py-10`}
          onClick={() => setFootball(true)}
        >
          Football
        </button>
        <button
          className={`${
            !football
              ? "bg-white text-black border-white"
              : "text-white border-white"
          } border-2  flex-1`}
          onClick={() => setFootball(false)}
        >
          Residence
        </button>
      </div>
      <Carousel className="w-full flex-1 justify-self-stretch px-24 mt-20">
        <CarouselContent className="-ml-4 ">
          {football
            ? footballPhotos.map((photo, index) => (
                <CarouselItem className="pl-4 basis-1/3  " key={index}>
                  <div className="bg-white rounded-md flex-1 aspect-square pl-4" />
                </CarouselItem>
              ))
            : residencePhotos.map((photo, index) => (
                <CarouselItem className="pl-4 basis-1/3  " key={index}>
                  {/*put images here*/}
                  <div className="bg-white rounded-md flex-1 aspect-square pl-4 relative overflow-hidden">
                    <Image
                      src={photo}
                      alt={`residence photo #${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
          <CarouselItem className="pl-4 basis-1/3  ">
            <div className="bg-white rounded-md flex-1 aspect-square pl-4" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-white left-20 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="bg-white  right-20 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
}
