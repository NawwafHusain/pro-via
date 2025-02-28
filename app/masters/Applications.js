"use client";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef } from "react";

export default function ApplicationProcess() {
  const containerRef = useRef();
  const stepRef = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(stepRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 70%",
        toggleActions: "play none none none",
        //markers: true,
      },
      stagger: 0.1,
      opacity: 0,
      y: 20,
    });
  });
  return (
    <section className="w-screen lg:px-24 px-4 py-4 lg:py-24 flex flex-col items-center bg-black text-white">
      <h2
        className="lg:text-4xl text-2xl font-ethn lg:text-center lg:mb-16 mb-8"
        ref={containerRef}
      >
        The Application Process
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-between w-full lg:h-[50vh] gap-10 relative">
        <div
          ref={(e) => (stepRef.current[0] = e)}
          className="bg-[#565656] flex flex-col justify-start flex-1 h-full relative card lg:text-center px-4 pb-4 pt-4 lg:pb-24 lg:pt-10 lg:shadow-none shadow-md shadow-white"
        >
          <span className="font-ethn lg:text-8xl  text-5xl mb-10 mt-5">1</span>

          <p className="text-sm">
            <span className="text-lg font-semibold">Application</span>
            <br />
            Submit your application and supporting documents. Our team will
            review your application and notify you of the outcome.
          </p>
        </div>
        <div
          ref={(e) => (stepRef.current[1] = e)}
          className="bg-[#565656] flex flex-col  justify-start flex-1 h-full relative card lg:text-center px-4 pb-4 pt-4 lg:pb-24 lg:pt-10 lg:shadow-none shadow-md shadow-white"
        >
          {" "}
          <span className="mb-10 mt-5 font-ethn lg:text-8xl text-5xl ">2</span>
          <p className="text-sm">
            <span className="text-lg font-semibold">Enrollment</span>
            <br />
            Receive your acceptance letter and start the visa process
          </p>
        </div>
        <div
          ref={(e) => (stepRef.current[2] = e)}
          className="bg-[#565656] flex flex-col  justify-start flex-1 h-full relative card lg:text-center px-4 pb-4 pt-4 lg:pb-24 lg:pt-10 lg:shadow-none shadow-md shadow-white"
        >
          {" "}
          <span className="mb-10 mt-5 font-ethn lg:text-8xl text-5xl ">3</span>
          <p className="text-sm">
            <span className="text-lg font-semibold">Arrival</span>
            <br />
            Arrive in Madrid on Aug 10th where we will pick you up and help you
            get adjusted
          </p>
        </div>
        <div
          ref={(e) => (stepRef.current[3] = e)}
          className="bg-[#565656] flex flex-col  justify-start flex-1 h-full relative card lg:text-center px-4 pb-4 pt-4 lg:pb-24 lg:pt-10 lg:shadow-none shadow-md shadow-white"
        >
          {" "}
          <span className="mb-10 mt-5 font-ethn lg:text-8xl text-5xl ">4</span>
          <p className="text-sm">
            <span className="text-lg font-semibold">Development</span>
            <br />
            Our sport directors will be creating development plans for each
            player and monitor their development
          </p>
        </div>
        <div
          ref={(e) => (stepRef.current[4] = e)}
          className="bg-[#565656] flex flex-col  justify-start flex-1 h-full relative card lg:text-center px-4 pb-4 pt-4 lg:pb-24 lg:pt-10 lg:shadow-none shadow-md shadow-white"
        >
          {" "}
          <span className="mb-10 mt-5 font-ethn lg:text-8xl text-5xl ">5</span>
          <p className="text-sm">
            <span className="text-lg font-semibold">Commitment</span>
            <br />
            Our Sport directors in the USA will market your player profile and
            help you get commitments at top Universities or pro teams.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent to-25% hidden lg:block" />
      </div>
      <Link href={"/gap-year/apply"} className="mt-10 lg:mb-0 mb-10">
        <button className="bg-white text-black px-8 py-4 font-ethn text-2xl mt-10">
          Apply Now
        </button>
      </Link>
    </section>
  );
}
