import Image from "next/image";
import Link from "next/link";
import React from "react";
import Banner from "../components/Banner";
import "./styles.css";

import ApplicationProcess from "./Applications";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import ImagesSection from "./ImagesSection";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const metadata = {
  title: "Master's Degree & Football Program in Spain | Pro-Vía Academy",
  description:
    "Earn a Master's Degree while continuing your football career in Spain. Improve your Spanish, compete at a high level, and gain valuable global career opportunities through Pro-Vía Academy's exclusive two-year program.",
  keywords:
    "Master's degree Spain, study in Spain, football and education, sports management MBA, soccer in Spain, Spanish language course, TEFL certification, train and study abroad, football university program, Pro-Vía Academy",
};

const Shield = (props) => {
  return (
    <svg
      id="Layer_2"
      data-name="Layer 2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 281.62 411.09"
      {...props}
    >
      <defs>
        <style>
          {
            "\n      .cls-1 {\n        fill: #fff;\n      }\n\n      .cls-2 {\n        opacity: .13;\n      }\n    "
          }
        </style>
      </defs>
      <g id="Layer_1-2" data-name="Layer 1">
        <g className="cls-2">
          <g>
            <polygon
              className="cls-1"
              points="90.76 403.09 8.71 321.04 8.02 8 273.62 8 273.62 320.62 191.16 403.09 90.76 403.09"
            />
            <path d="M265.62,16v301.31l-77.78,77.78h-93.77l-77.37-77.37-.67-301.72h249.59M281.62,0H0l.02,10.66.69,309.31v4.39s3.11,3.1,3.11,3.1l80.51,80.51,3.11,3.11h107.03l3.11-3.11,80.92-80.92,3.11-3.11V0h0Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

// const content = [
//   {
//     title: "Authentic Spanish Football",
//     description:
//       "Experience football at its highest level by training and competing with established Spanish clubs in official league matches. Our players are fully immersed in the fast-paced, technical, and tactical style of Spanish football, gaining real match experience that prepares them for the demands of U.S. college soccer.",
//     content: (
//       <Image
//         fill
//         src={"/images/trescantos-club-futbol-base-01-1719e788.webp"}
//         className="object-contain"
//         alt="authentic spanish football"
//       />
//     ),
//   },
//   {
//     title: "Specialized Training",
//     description:
//       "Train like a pro with UEFA-certified coaches who tailor sessions to refine technical skills, tactical awareness, and physical conditioning. With a focus on speed of play, positional intelligence, and adaptability, our program ensures players develop the attributes college coaches seek.",
//     content: (
//       <Image
//         fill
//         src={"/images/IMG_5122.JPG"}
//         className="object-contain"
//         alt="specialized training"
//       />
//     ),
//   },
//   {
//     title: "Player Profile and Development",
//     description:
//       "Every athlete undergoes continuous assessment and performance tracking to highlight strengths and areas for improvement. Our Sporting Directors work closely with players to build standout profiles for U.S. college recruitment, providing video analysis, scouting reports, and personalized guidance.",
//     content: (
//       <Image
//         fill
//         src={"/images/playerProfileCrop.png"}
//         className="object-contain"
//         alt="player profile and development"
//       />
//     ),
//   },
//   {
//     title: "Holistic Wellness Approach",
//     description:
//       "Success on the field starts with well-being off the field. Our program provides access to expert physiotherapists, mental performance coaches, sports nutritionists, and strength specialists, ensuring players maintain peak physical and mental condition throughout their journey.",
//     content: (
//       <Image
//         fill
//         src={"/images/playerProfile.png"}
//         className="object-contain"
//         alt="holistic wellness approach"
//       />
//     ),
//   },
//   {
//     title: "Quality Education",
//     description:
//       "Stay academically on track while pursuing your football ambitions. Players complete a university-level Spanish language course worth 18 ECTS credits, gaining an academic advantage and cultural fluency that sets them apart in both soccer and education.",
//     content: (
//       <Image
//         fill
//         src={"/images/quality-education.png"}
//         className="object-contain"
//         alt="quality education"
//       />
//     ),
//   },
//   {
//     title: "Top University/Club Connections",
//     description:
//       "Leverage our deep-rooted network in both the U.S. college system and professional football. With strong ties to D1 programs, scouts, and European clubs, we create pathways for players to advance their careers at the collegiate or professional level.",
//     content: (
//       <Image
//         fill
//         src={"/images/university-club-connections.png"}
//         className="object-contain"
//         alt="top university and club connections"
//       />
//     ),
//   },
// ];

const content = [
  {
    title: "Compete in Spanish Football",
    description:
      "Continue playing at a high level while earning your master’s degree. Train and compete with established Spanish clubs in official league matches, gaining real game experience that enhances your tactical awareness, technical skills, and professional opportunities.",
    content: (
      <Image
        fill
        src={"/images/trescantos-club-futbol-base-01-1719e788.webp"}
        className="object-contain"
        alt="compete in spanish football"
      />
    ),
  },
  {
    title: "Advanced Training with UEFA Coaches",
    description:
      "Work with top UEFA-certified coaches who refine your technical skills, tactical understanding, and physical conditioning. Our structured training approach prepares you for success at the professional and semi-professional level while balancing academic commitments.",
    content: (
      <Image
        fill
        src={"/images/IMG_5122.JPG"}
        className="object-contain"
        alt="advanced training with UEFA coaches"
      />
    ),
  },
  {
    title: "Master’s Degree & Career Development",
    description:
      "Pursue a Master’s Degree in Sports Management, Business Administration, or Teaching Spanish as a Foreign Language while developing key skills for future career paths. Our dual-focus program ensures academic and athletic growth, providing a foundation for post-playing careers in coaching, business, or education.",
    content: (
      <Image
        fill
        src={"/images/quality-education.png"}
        className="object-contain"
        alt="master’s degree and career development"
      />
    ),
  },
  {
    title: "Spanish Language & TEFL Certification",
    description:
      "Immerse yourself in Spanish culture with a structured language course preparing you for official Instituto Cervantes certification. Additionally, earn a TEFL qualification, equipping you with teaching skills that open doors to international career opportunities.",
    content: (
      <Image
        fill
        src={"/images/spanish-language-learning.png"}
        className="object-contain"
        alt="spanish language and TEFL certification"
      />
    ),
  },
  {
    title: "Comprehensive Athlete Support",
    description:
      "Stay at peak performance with expert physiotherapists, sports psychologists, nutritionists, and strength coaches. Our holistic wellness approach ensures that you balance your academic workload while maintaining top athletic form.",
    content: (
      <Image
        fill
        src={"/images/playerProfile.png"}
        className="object-contain"
        alt="comprehensive athlete support"
      />
    ),
  },
  {
    title: "Pathways to Professional & Collegiate Football",
    description:
      "Leverage our network of professional clubs, university programs, and international scouts. Whether you aim to play at a higher level in Spain, transition to U.S. college soccer, or explore career opportunities in sports and education, we provide the connections to make it happen.",
    content: (
      <Image
        fill
        src={"/images/university-club-connections.png"}
        className="object-contain"
        alt="pathways to professional and collegiate football"
      />
    ),
  },
];
const IncludedItemsCol3 = [
  {
    title: "Accommodation",
    items: [
      "Fully furnished modern housing",
      "24//7 security and emergency support",
      "Access to gym and common areas",
      "Laundry services",
      "Wi-Fi and utilities included",
      "Proximity to training facilities and city amenities",
      "Proximity to world-class public transport",
    ],
  },

  {
    title: "Health & Safety",
    items: [
      "Health insurance coverage",
      "Access to medical support and physiotherapy",
      "24/7 emergency assistance",
    ],
  },
  {
    title: "Transportation",
    items: [
      "Airport pick-up and drop-off",
      "Local transportation for matches",
      "Unlimited use public transport cards",
    ],
  },
];
const IncludedItemsCol2 = [
  {
    title: "Education",
    items: [
      "Master’s Degree of your choice (Teaching Spanish, MBA, or Sports Management)",
      "Spanish Language and Cultural Course – Intensive program for language mastery",
      "TEFL Course – Teaching qualification for global career opportunities",
      "Advanced tactical and technical football workshops",
      "Workshops on leadership, management, and professional development",
      "Career mentorship for pathways in sports, business, and education",
    ],
  },
  {
    title: "Meals",
    items: [
      "Nutritious meal plans designed for athletes",
      "Daily breakfast, lunch, and dinner",
      "Personalized dietary accommodations",
    ],
  },
];
const IncludedItems = [
  {
    title: "Football",
    items: [
      "Assessment and placement with Spanish teams",
      "Individualized training plans",
      "Access to high-level training facilities",
      "Strength and conditioning sessions",
      "Continuos performance tracking and development",
      "Exposure to scouts and professional networks",
      "Video analysis and performance feedback",
      "Regularly updated public player profile",
    ],
  },
  {
    title: "Cultural Experience",
    items: [
      "Excursions and sightseeing in Spain",
      "Opportunities to attend professional matches",
      "Immersive cultural experiences",
    ],
  },

  {
    title: "VISA",
    items: [
      "Visa processing fees",
      "Complete guidance throughout the visa process",
      "TIE (residence card) acquirement after arrival in Spain",
      "Assistance with required documentation",
    ],
  },
];
export default function page() {
  return (
    <main className="relative w-screen overflow-x-clip">
      {/*Hero Section */}
      <section className="relative h-screen w-screen px-4 lg:px-24 flex lg:items-center lg:pt-0 pt-24 overflow-y-hidden ">
        <Image
          src={"/images/seniorB.jpg"}
          className="w-full h-full hidden lg:block object-cover "
          fill
          alt="Gap year program background hidden "
        />
        <Image
          src={"/images/AlexMadridBlackMobile.png"}
          className="w-full h-full lg:hidden object-cover"
          fill
          alt="Gap year program background "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black "></div>
        <div className="w-full absolute bottom-0 left-0 h-full bg-gradient-to-t from-black to-transparent to-10%" />
        <div className="relative text-white w-full gap-4">
          <p className="font-ethn  lg:text-2xl font-thin">DREAM DARE DEFY</p>
          <h1 className="lg:text-5xl text-2xl font-ethn lg:w-4/6">
            The Ultimate Football Post-Grad Experience
          </h1>
          <p className="lg:w-3/5 mt-2 lg:mt-4 lg:text-lg text-sm hidden lg:block">
            Take your football career and education to the next level with
            Pro-Viá Academy&apos;s exclusive Master&apos;s Program in Spain.
            Over two academic years in Madrid, youD&apos;ll earn a Master&apos;s
            Degree, improve your Spanish language skills, and train at a high
            level to stay competitive in football. With additional
            certifications like TEFL and Spanish proficiency from the Instituto
            Cervantes, you&apos;ll gain the tools to open global career
            opportunities—on and off the pitch.
          </p>
          <p className="lg:w-3/5 mt-2 lg:mt-4 lg:text-lg text-sm lg:hidden">
            Take your football career and education to the next level with
            Pro-Viá Academy&apos;s exclusive Master&apos;s Program in Spain.
            Over two academic years in Madrid, you&apos;ll earn a Master&apos;s
            Degree, improve your Spanish language skills, and train at a high
            level to stay competitive in football. With additional
            certifications like TEFL and Spanish proficiency from the Instituto
            Cervantes, you&apos;ll gain the tools to open global career
            opportunities—on and off the pitch.
          </p>
          <div className="flex gap-4 mt-2 lg:mt-4">
            {/* <Link
              href={"#about"}
              className="py-3 px-3 lg:px-8 font-ethn border-2 border-white font-thin  lg:text-xl"
            >
              Learn More
            </Link> */}
            <Link
              href={"/apply"}
              className="py-3 px-3 lg:px-8 font-ethn bg-white font-light text-black lg:text-xl hover:scale-105 transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
      {/*About Section */}
      <section className="lg:h-screen w-screen relative lg:py-0 py-10 flex items-center justify-center flex-col-reverse lg:flex-row px-4 lg:px-0">
        <Image
          src={"/images/background2.png"}
          className="w-full h-full hidden lg:block"
          fill
          alt="Gap year program background hidden"
        />
        <Image
          src={"/images/Maskgroup.png"}
          className=" lg:hidden object-contain "
          width={250}
          height={150}
          alt="Gap year program background "
        />
        <div className="relative text-white lg:ml-[45vw] lg:mb-24 mb-8 text-center lg:text-left">
          <h2 className="lg:text-5xl text-xl font-ethn ">
            What is the Pro-Viá Academy Master&apos;s Program?
          </h2>
          <p className="lg:mr-10 mt-2 lg:mt-4 lg:text-2xl text-md font-light">
            Pro-Viá Academy&apos;s Master&apos;s Program in Spain is designed
            for passionate footballers who want to pursue higher education,
            immerse themselves in Spanish culture, and continue competing at a
            high level. Over two academic years in Madrid, you&apos;ll
            experience the perfect balance of academics and athletics.
          </p>
          <p className="font-semibold mt-4 text-2xl">
            Master&apos;s Degree of Your Choice - Choose from
          </p>
          <ul className="flex gap-4">
            <li className="flex-1 ">
              Master in Teaching Spanish as a Foreign Language
            </li>
            <li className="flex-1 ">Master in Business Administration (MBA)</li>
            <li className="flex-1 ">
              {" "}
              Master in Sports Management (MBA Sports)
            </li>
          </ul>
        </div>
      </section>

      <Banner
        images={[
          "/images/clubs/leganes.png",
          "/images/clubs/RM.png",
          "/images/clubs/sslr.png",
        ]}
      />
      {/*OPTION 1 With sticky scroll */}
      {/* <h2 className="font-ethn lg:text-5xl text-xl text-white px-4 lg:px-24 mt-24 mb-5">
        Why Choose Pro-Vía Academy&apos;s Gap-Year Program
      </h2>
      <section className="w-screen hidden lg:block">
        <StickyScroll content={content} />{" "}
      </section> */}

      <section className="w-screen relative h-max flex flex-col">
        <h2 className="font-ethn lg:text-4xl text-xl text-white px-4 lg:px-24 mt-24 lg:mb-10 mb-4 relative">
          Why Choose Pro-Vía Academy&apos;s Master&apos;s Program
        </h2>
        <div className="w-full relative flex-1 flex lg:flex-row flex-col px-4 lg:px-24 pb-40">
          <Image
            src={"/images/Bg2.png"}
            fill
            className="object-cover"
            alt="section background"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black to-40%" />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-black to-10%" />

          <p className="lg:w-[45%] text-xl text-white relative lg:mb-0 mb-2">
            Pro-Vía Academy&apos;s Master&apos;s Program is a unique opportunity
            to continue developing as a footballer while earning a prestigious
            graduate degree. Designed for athletes who want to balance
            high-level competition with academic excellence, this program
            prepares you for careers in sports management, coaching, business,
            or education—all while immersing you in the vibrant culture of
            Madrid.
          </p>
          <Accordion
            type="single"
            collapsible
            className=" flex-1 relative text-white"
          >
            {content.map((item, index) => {
              return (
                <AccordionItem value={item.title} key={item.title + index}>
                  <AccordionTrigger className="text-white bg-black hover:bg-white hover:text-black p-4 text-xl active:bg-white active:text-black">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="p-4 text-black bg-white text-lg">
                    {item.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Link
            href={"#about"}
            className="lg:w-max w-full bg-white text-center text-black hover:bg-black hover:border-white border-black border-2 hover:text-white py-4 px-8 text-xl font-ethn absolute bottom-8 right-24"
          >
            Download the <br />
            Program Brochure
          </Link>
        </div>
      </section>
      <ImagesSection />
      {/* <DetailsAccordion /> */}
      <section className="lg:w-[calc(100vw-12rem)] w-[calc(100vw-2rem)]  overflow-hidden lg:mx-24 lg:my-24 mx-4  flex flex-col items-center bg-white text-black p-4 lg:p-8 rounded-md">
        <h2 className="lg:text-4xl text-xl font-ethn text-left w-full">
          What&apos;s Included in the Master&apos;s Program
        </h2>
        <div className="w-full px-4 flex gap-4 flex-col lg:flex-row">
          <div className="flex flex-col  gap-y-4 gap-x-2  max-w-full lg:max-w-[25vw] mt-10">
            {IncludedItems.map((item, index) => (
              <div className="flex-col flex" key={item.title + index}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.items.map((item, index) => (
                  <p
                    className="text-lg flex gap-2 text-wrap "
                    key={item + index}
                  >
                    <Shield className="w-5 h-5 " />
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col  gap-y-4 gap-x-2  max-w-full lg:max-w-[25vw] mt-10">
            {IncludedItemsCol2.map((item, index) => (
              <div className="flex-col flex" key={item.title + index}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.items.map((item, index) => (
                  <p
                    className="text-lg flex gap-2 text-wrap "
                    key={item + index}
                  >
                    <Shield className="w-5 h-5 " />
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col  gap-y-4 gap-x-2  max-w-full lg:max-w-[25vw] mt-10">
            {IncludedItemsCol3.map((item, index) => (
              <div className="flex-col flex" key={item.title + index}>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                {item.items.map((item, index) => (
                  <p
                    className="text-lg flex gap-2 text-wrap "
                    key={item + index}
                  >
                    <Shield className="w-5 h-5 " />
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*Application Process */}
      <ApplicationProcess />
    </main>
  );
}
