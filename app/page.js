import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

import ContactForm from "./components/contactForm";

const programs = [
  {
    title: "Pro-Pathway Program",
    description:
      "Enjoy authentic Spanish football while exposing yourself to professional teams in Spain.",
    CarouselImage: "/images/AlexMadridBlack.png",
    CarouselMobileImage: "/images/AlexMadridBlackMobile.png",

    ProgramImage: "/images/IMG_5122.JPG",
    button1Link: "/pro-pathway",
    button1Text: "Learn More",
    button2Link: "/pro-pathway#apply",
    button2Text: "Apply Now",
  },
  {
    title: "Spanish Football Experience",
    description:
      "Ecperince real spanish football, this entry program prepares you for the next level of your football career.",
    CarouselImage: "/images/hero.jpg",
    ProgramImage: "/images/trescantos.webp",
    
    button2Text: "Coming Soon",
    button2Link: "#",
  },
];

export default function Home() {
  return (
    <main>
      <section className="w-screen h-[90vh] py-10">
        <Carousel className="w-full h-full text-white lg:px-24 px-4 relative mt-4">
          <CarouselContent className="-m-4 lg:-ml-24 h-full relative ">
            {/* <CarouselItem className="relative p-5 flex flex-col lg:flex-row lg:justify-between justify-end items-center lg:items-end pl-4 lg:pl-24  h-full ">
              <Image
                src={"/images/hero.jpg"}
                fill
                alt="hero"
                className="object-cover hero-carousel-item"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black "></div>
              <div className="flex flex-col gap-2  py-4 lg:py-10 lg:pl-10 pl-4 relative">
                <p className="text-xl">The Pro-Vía Academy</p>
                <h2 className={`font-ethn text-2xl lg:text-5xl`}>
                  Gap Year Program
                </h2>
                <p className="lg:w-[60%] w-[100%]">
                  Join Pro-Viá Academy&apos;s elite ten-month residency in
                  Madrid, where ambition meets opportunity. Train with
                  world-class coaches, compete in top Spanish leagues, and
                  enrich...{" "}
                </p>
              </div>
              <div className="flex gap-1 relative lg:py-10 lg:pr-10 ">
                <Link
                  href={"/gap-year"}
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
            </CarouselItem>
            <CarouselItem className="relative p-5 flex flex-col lg:flex-row lg:justify-between justify-end items-center lg:items-end pl-4 lg:pl-24  h-full ">
              <Image
                src={"/images/chile.jpg"}
                fill
                alt="hero"
                className="object-cover hero-carousel-item lg:content-center object-right"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black "></div>
              <div className="flex flex-col gap-2 py-4 lg:py-10 lg:pl-10 pl-4 relative">
                <p className="text-xl">The Pro-Vía Academy</p>
                <h2 className={`font-ethn text-2xl lg:text-5xl`}>
                  Masters Program
                </h2>
                <p className="lg:w-[60%] w-[100%]">
                  Join Pro-Viá Academy&apos;s elite two-year program in Madrid,
                  where ambition meets opportunity. Train with world-class
                  coaches, compete in top Spanish leagues, and enrich...{" "}
                </p>
              </div>
              <div className="flex gap-1 relative lg:py-10 lg:pr-10 ">
                <Link
                  href={"/masters"}
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
            </CarouselItem> */}
            {programs.map((program, index) => (
              <CarouselItem
                key={index}
                className="relative p-5 flex flex-col lg:flex-row lg:justify-between lg:justify-end items-center lg:items-end pl-4 lg:pl-24  h-full "
              >
                <Image
                  src={program.CarouselImage}
                  fill
                  alt="hero"
                  className="object-cover  lg:content-center object-right hidden lg:block"
                />
                <Image
                  src={program.CarouselMobileImage || program.CarouselImage}
                  fill
                  alt="hero"
                  className="object-cover  lg:content-center object-right block lg:hidden"
                />
                {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b  lg:bg-gradient-to-r from-black "></div>
                <div className="flex flex-col gap-2 py-4 lg:py-10 lg:pl-10 pl-4 relative">
                  <p className="text-xl">The Pro-Vía Academy</p>
                  <h2 className={`font-ethn text-2xl lg:text-5xl`}>
                    {program.title}
                  </h2>
                  <p className="lg:w-[60%] w-[100%]">{program.description}</p>
                </div>
                <div className="flex gap-1 relative lg:py-10 lg:pr-10 ">
                  {console.log("program", program.title, "  link", program.button1Link)}
                  {program.button1Link && (
                    
                    <Link
                      href={program.button1Link}
                      className="w-max py-3 px-3 lg:px-5 font-ethn border-2 border-white font-thin  lg:text-lg"
                    >
                      {program.button1Text}
                    </Link>
                  )}

                  {program.button2Text && program.button2Link && (
                    
                    <Link
                      href={program.button2Link}
                      className="w-max py-3 px-3 lg:px-5 font-ethn bg-white font-light text-black lg:text-lg hover:scale-105 transition-all duration-300"
                    >
                      {program.button2Text}
                    </Link>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="top-1/2 -translate-y-1/2 right-4 lg:right-24 z-10 " />
          <CarouselPrevious className="top-1/2 -translate-y-1/2 left-4 lg:left-24 z-10 " />
        </Carousel>
      </section>
      <section className="bg-white w-screen py-8 lg:py-16 lg:px-24 px-4">
        <h2 className="font-ethn lg:text-5xl text-3xl">Why Pro-Vía Academy?</h2>
        <div className="flex flex-col-reverse lg:flex-row justify-between mt-8 ">
          <div className="lg:w-[70%] flex flex-col lg:justify-between items-center gap-y-10 lg:gap-y-0 lg:items-end pr-4">
            <p className="text-lg lg:mt-0 mt-4">
              At Pro-Vía Academy, our mission is to empower elite
              student-athletes to achieve their fullest potential on and off the
              field. By providing world-class football experience, academic
              enrichment, and cultural immersion in Spain, we cultivate the
              skills, discipline, and global perspective necessary to succeed in
              collegiate, professional, and life endeavors.
            </p>
            <Link
              href={"/about"}
              className="w-max py-3 px-3 lg:px-5 font-ethn bg-white border-black border-2 hover:bg-black hover:text-white font-light text-black lg:text-lg hover:scale-105 transition-all duration-300"
            >
              Our Mission and Vision
            </Link>
          </div>

          <Image
            src={"/images/group.jpg"}
            width={500}
            height={500}
            alt="why"
            className="object-cover h-[60vh] hero-container-image"
          />
        </div>
      </section>
      <section className="relative  flex flex-col lg:px-24 lg:py-16 py-8 px-4 lg:h-auto  box-content gap-4 lg:gap-10  ">
        <h2 className={`font-ethn text-white lg:text-5xl text-3xl relative`}>
          Our Programs
        </h2>
        <div className="w-full flex lg:flex-row flex-col justify-between gap-8 lg:h-[40vh] ">
          {programs.map((program, index) => (
            program.button1Link ? (  <Link
              key={index}
              href={program.button1Link || "#"}

              className=" hover:scale-105 transition-all  duration-300 flex-1 overflow-clip items-center rounded-xl px-4 lg:px-10 text-center shadow-white shadow-sm text-white flex justify-end lg:gap-4 gap-2 pb-4 pt-24 lg:pt-0 lg:pb-10 flex-col relative"
            >
              <Image
                fill
                className="object-cover"
                src={program.ProgramImage}
                alt={program.title}
              />
              <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent from-30% " />
              <h3 className={`relative font-ethn text-xl lg:text-4xl`}>
                {program.title}
              </h3>
              <p className="relative text-sm lg:text-base">
                {program.description}
              </p>
            </Link>):(  <div
              key={index}

              className=" hover:scale-105 transition-all  duration-300 flex-1 overflow-clip items-center rounded-xl px-4 lg:px-10 text-center shadow-white shadow-sm text-white flex justify-end lg:gap-4 gap-2 pb-4 pt-24 lg:pt-0 lg:pb-10 flex-col relative"
            >
              <Image
                fill
                className="object-cover"
                src={program.ProgramImage}
                alt={program.title}
              />
              <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent from-30% " />
              <h3 className={`relative font-ethn text-xl lg:text-4xl`}>
                {program.title}
              </h3>
              <p className="relative text-sm lg:text-base">
                {program.description}
              </p>
            </div>)
          
          ))}

          {/* <Link
            href="/gap-year"
            className=" hover:scale-105 transition-all  duration-300 flex-1 overflow-clip items-center rounded-xl px-4 lg:px-10 text-center shadow-white shadow-sm text-white flex justify-end lg:gap-4 gap-2 pb-4 pt-24 lg:pt-0 lg:pb-10 flex-col relative"
          >
            <Image
              fill
              className="object-cover"
              src="/images/IMG_5122.JPG"
              alt="Football game"
            />
            <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent from-30% " />
            <h3 className={`relative font-ethn text-xl lg:text-4xl`}>
              Gap year Program
            </h3>
            <p className="relative text-sm lg:text-base">
              Join our flagship program and immerse yourself in the world of
              Spanish football for a full season while earning credits towards
              your degree.
            </p>
          </Link>

          <Link
            href="/masters"
            className=" hover:scale-105 transition-all  duration-300 h-full flex-2 lg:w-[35vw] overflow-clip items-center rounded-xl px-4 lg:px-10 text-center shadow-white shadow-sm text-white flex justify-end lg:gap-4 gap-2 pb-4 pt-24 lg:pt-0 lg:pb-10 flex-col relative"
          >
            <Image
              fill
              className="object-cover object-right"
              src="/images/trescantos.webp"
              alt="Tres Cantos vs Athletico Madrid"
            />
            <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent from-30% " />
            <h3 className={`relative font-ethn text-xl lg:text-4xl`}>
              Master&apos;s Program
            </h3>
            <p className="relative text-sm lg:text-base">
              Join our 2-year masters program and immerse yourself in the world
              of Spanish football for a two seasons while earning your masters
              degree!
            </p>
          </Link> */}
          {/* <Link
            href="/programs"
            className=" hover:scale-105 transition-all duration-300 flex-2 text-xl lg:text-4xl overflow-clip items-center rounded-xl px-10 text-center shadow-white shadow-sm text-white flex justify-center gap-4 lg:pt-0 pb-10 pt-10 lg:pb-10 flex-col relative"
          >
            <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-t from-black to-transparent from-30% " />
            <h3 className={`relative font-ethn `}>
              View All <br /> Programs
            </h3>
          </Link> */}
        </div>
      </section>
      <section className="w-screen lg:h-screen py-16 bg-white lg:px-24 px-4 flex flex-col lg:flex-row lg:justify-between">
        <div>
          <h3 className={`relative font-ethn text-4xl`}>Got any question?</h3>
          <p className="mt-2 text-lg">
            <span className="font-medium">Get in touch with us!</span> Fill this
            form or find more ways to contact us{" "}
            <a href="/contact" className="underline">
              here
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-1/2 h-full p-4 ">
          <ContactForm
            color="white"
            inlineOnMobile={true}
            className={"h-[60vh] lg:h-full"}
          />
        </div>
      </section>
    </main>
  );
}
