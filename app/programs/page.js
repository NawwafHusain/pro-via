import React from "react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    image: "/images/hero.jpg",
    hook: "The Pro-Vía Academy",
    title: "Gap Year Program",
    duration: "Aug-May",
    description:
      "Join Pro-Viá Academy's elite ten-month residency in Madrid, where ambition meets opportunity. Train with world-class coaches, compete in top Spanish leagues, and enrich...",
    link: "/gap-year",
  },
  {
    image: "/images/chile.jpg",
    hook: "The Pro-Vía Academy",
    title: "Masters Program",
    duration: "Aug-May",
    description:
      " join Pro-Viá Academy's elite two-year program in Madrid, where ambition meets opportunity. Train with world-class coaches, compete in top Spanish leagues, and enrich...",
    link: "/masters",
  },
];

export default function Page() {
  return (
    <main className=" px-4 lg:px-24  relative bg-black py-10 w-screen overflow-hidden">
      <h1
        className={`text-2xl lg:text-5xl font-ethn  mt-4 text-white relative`}
      >
        Find the Right <br /> Program for You
      </h1>
      <section className="w-full flex flex-col py-10 gap-10 ">
        {programs.map((program, index) => (
          <div
            className="relative lg:p-5 flex flex-col lg:flex-row items-center justify-between lg:items-end  lg:h-[70vh] text-white rounded-sm "
            key={index}
          >
            <Image
              src={program.image}
              fill
              alt="hero"
              className="object-cover hero-carousel-item"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black lg:from-0% from-40% "></div>
            <div className="flex flex-col lg:gap-2 gap-1 lg:pt-10 lg:pb-10 lg:pl-10 pl-4 pt-24 relative">
              <p className="text-xl">{program.hook}</p>
              <h2 className={`font-ethn text-xl lg:text-5xl`}>
                {program.title}
              </h2>
              <p className="lg:w-[60%] lg:text-base text-sm">
                {program.description}
              </p>
            </div>
            <div className="flex gap-1 relative lg:py-10 lg:pr-10 py-4">
              <Link
                href={program.link}
                className="w-max py-3 px-3 lg:px-5 font-ethn border-2 border-white font-thin  lg:text-lg"
              >
                Learn More
              </Link>
              <Link
                href={"/apply"}
                className="w-max py-3 px-3 lg:px-5 font-ethn bg-white font-light text-black lg:text-lg hover:scale-105 transition-all duration-300"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

const longTerm = [
  {
    title: "Full Season Residency",
    duration: "Aug-May",
    image: "/images/temp.png",
    link: "full-season-residency",
    included: [
      "Registration in official Spanish league",
      "High-level on field team training",
      "Variety of off-field training 2 times a week",
      "Gym access",
      "League games",
      "Potential of advancing to semi-pro team (TERCERA RFEF or higher)",
      "Match and Training recordings",
      "Player profile and CV creation",
      "Personal development plan",
      "Full kit (bag, training, travel, game and heavy coat)",
      "Airport Pick up and Drop off",
      "Transportation to and from trainings",
      "Accommodation",
      "Meal Plan",
    ],
    options: ["Housing", "level of education (if any)"],
    price: "€10,000",
  },
  {
    title: "Full Season Residency",
    duration: "Aug-May",
    image: "/images/temp.png",
    included: [
      "Registration in official Spanish league",
      "High-level on field team training",
      "Variety of off-field training 2 times a week",
      "Gym access",
      "League games",
      "Potential of advancing to semi-pro team (TERCERA RFEF or higher)",
      "Match and Training recordings",
      "Player profile and CV creation",
      "Personal development plan",
      "Full kit (bag, training, travel, game and heavy coat)",
      "Airport Pick up and Drop off",
      "Transportation to and from trainings",
      "Accommodation",
      "Meal Plan",
    ],
    options: ["Housing", "level of education (if any)"],
    price: "€10,000",
  },
];
