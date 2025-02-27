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
  const footballPhotos = [
    "/images/trescantos.webp",
    "/images/IMG_5122.JPG",
    "/images/chile.jpg",
    "/images/team2.jpeg",
    "/images/group.jpg",
  ];
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
      <div className="w-full flex flex-row lg:px-24 px-4 relative">
        <div
          className={`lg:w-[calc(50%-6rem)] w-[calc(50%-1rem)] h-full bg-white absolute tabs ${
            football ? "lg:left-24 left-4" : "left-[calc(50%)]"
          } transition-all duration-500`}
        />
        <button
          className={`${
            football ? " text-black " : "text-white "
          }  flex-1 py-10 relative font-ethn text-lg lg:text-2xl`}
          onClick={() => setFootball(true)}
        >
          Football
        </button>
        <button
          className={`${
            !football ? " text-black " : "text-white "
          }   flex-1 relative font-ethn text-lg lg:text-2xl`}
          onClick={() => setFootball(false)}
        >
          Residence
        </button>
      </div>
      <Carousel
        className="w-full flex-1 justify-self-stretch lg:px-24 px-4 mt-10"
        options={{ loop: true }}
      >
        <CarouselContent className="-ml-4 ">
          {football
            ? footballPhotos.map((photo, index) => (
                <CarouselItem className="pl-4 lg:basis-1/3  " key={index}>
                  <div className=" rounded-md flex-1 aspect-square pl-4 relative overflow-hidden">
                    <Image
                      src={photo}
                      alt={`residence photo #${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>{" "}
                </CarouselItem>
              ))
            : residencePhotos.map((photo, index) => (
                <CarouselItem className="pl-4 lg:basis-1/3  " key={index}>
                  {/*put images here*/}
                  <div className=" rounded-md flex-1 aspect-square pl-4 relative overflow-hidden">
                    <Image
                      src={photo}
                      alt={`residence photo #${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white lg:left-20 left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="bg-white  lg:right-20 right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </section>
  );
}
