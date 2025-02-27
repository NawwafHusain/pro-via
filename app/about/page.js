"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const statmentRef = useRef([]);
  const wordRef = useRef([]);
  const conatiner1Ref = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);
  const image2Ref = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const container3Ref = useRef(null);
  const CTARef = useRef([]);
  const CTARefconatiner = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(statmentRef.current, {
      scrollTrigger: {
        trigger: conatiner1Ref.current,
        start: "top 80%",
        end: "bottom 80%",
      },
      stagger: 0.1,
      opacity: 0,
      y: 100,
      duration: 1,
    });
    gsap.from(wordRef.current, {
      scrollTrigger: {
        trigger: conatiner1Ref.current,
        start: "top 80%",
        end: "bottom 80%",
      },
      delay: 1,

      opacity: 0,
      y: 100,
      duration: 1,
    });
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 100%",
        scrub: true,
      },
      opacity: 0,
      y: 100,
      duration: 1,
    });

    gsap.from(CTARef.current, {
      scrollTrigger: {
        trigger: CTARefconatiner.current,
        start: "top 80%",
        end: "bottom 80%",
      },
      stagger: 0.1,
      opacity: 0,
      y: 100,
      duration: 1,
    });

    gsap.from(missionRef.current, {
      scrollTrigger: {
        trigger: container3Ref.current,
        start: "top 100%",
        end: "bottom 50%",
        scrub: true,
      },
      y: "200%",
    });
    gsap.from(visionRef.current, {
      scrollTrigger: {
        trigger: container3Ref.current,
        start: "top 100%",
        end: "bottom 50%",
        scrub: true,
      },
      y: "400%",
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: container3Ref.current,
        start: "top 100%",
        end: "bottom 50%",
        scrub: true,
      },
      y: "100%",
    });
    gsap.from(image2Ref.current, {
      scrollTrigger: {
        trigger: container3Ref.current,
        start: "top 100%",
        end: "bottom 50%",
        scrub: true,
      },
      y: "-100%",
    });
  });
  return (
    <main className="w-screen  ">
      <section
        className="w-screen h-[80vh] flex flex-col justify-center items-center text-center text-white"
        ref={conatiner1Ref}
      >
        <p
          className="lg:text-3xl text-xl"
          ref={(e) => (statmentRef.current[0] = e)}
        >
          Welcome, to those who{" "}
          <span
            className="font-ethn lg:text-6xl text-3xl"
            ref={(e) => (wordRef.current[0] = e)}
          >
            DREAM
          </span>{" "}
          bigger
        </p>
        <p
          className="lg:text-3xl text-xl"
          ref={(e) => (statmentRef.current[1] = e)}
        >
          Who aren&apos;t afraid to sacrifice, to struggle, to grow
        </p>
        <p
          className="lg:text-3xl text-xl"
          ref={(e) => (statmentRef.current[2] = e)}
        >
          Welcome, to those who{" "}
          <span
            className="font-ethn lg:text-6xl text-3xl"
            ref={(e) => (wordRef.current[1] = e)}
          >
            DARE
          </span>{" "}
          to push beyond their limits
        </p>
        <p
          className="lg:text-3xl text-xl"
          ref={(e) => (statmentRef.current[3] = e)}
        >
          Who known what it means to win -
        </p>
        <p
          className="lg:text-3xl text-xl"
          ref={(e) => (statmentRef.current[4] = e)}
        >
          And are willing to fail a thousand times to feel that victory again
        </p>
        <p
          className="lg:text-3xl text-xl"
          ref={(e) => (statmentRef.current[5] = e)}
        >
          Welcome, to those who{" "}
          <span
            className="font-ethn lg:text-6xl text-3xl"
            ref={(e) => (wordRef.current[2] = e)}
          >
            DEFY
          </span>{" "}
          Expectations ...{" "}
        </p>
      </section>
      <section className="w-screen text-white lg:pb-[50vh]" ref={titleRef}>
        <p className="lg:text-5xl text-2xl text-center ">Welcome to</p>
        <h1 className="lg:text-8xl text-5xl font-ethn text-center font-bold">
          Pro-Vía <br />
          <span className="font-light">Academy</span>
        </h1>
      </section>
      <section
        className="w-screen relative flex flex-col gap-24 lg:h-[100vh]"
        ref={container3Ref}
      >
        <Image
          src="/images/group.jpg"
          alt="image"
          width={1000}
          height={1000}
          className="lg:w-[40vw] hidden lg:block aspect-auto object-contain pl-10  absolute top-24 left-24 opacity-30"
          ref={imageRef}
        />
        <Image
          src="/images/team2.jpeg"
          alt="image"
          width={800}
          height={800}
          className="lg:w-[30vw] hidden lg:block aspect-auto object-contain pl-10  absolute bottom-24 right-24 opacity-30"
          ref={image2Ref}
        />
        <div
          className="flex flex-col gap-2 text-white lg:pl-[45vw] lg:pr-10 relative pl-4 pr-2"
          ref={missionRef}
        >
          <h2 className="lg:text-5xl text-2xl font-ethn">Our Mission</h2>
          <p className="lg:text-2xl text-lg">
            At Pro-Vía Academy, our mission is to empower elite student-athletes
            to achieve their fullest potential on and off the field. By
            providing world-class soccer experience, academic enrichment, and
            cultural immersion in Spain, we cultivate the skills, discipline,
            and global perspective necessary to succeed in collegiate,
            professional, and life endeavors.
          </p>
        </div>
        <div
          className="flex flex-col gap-2 text-white lg:pr-[45vw] lg:pl-10 relative  pl-4 pr-2"
          ref={visionRef}
        >
          <h2 className="lg:text-5xl text-2xl font-ethn">OUR VISION</h2>
          <p className="lg:text-2xl text-lg">
            To be the premier global destination for aspiring elite soccer
            players, cultivating extraordinary talent, academic growth, and
            cultural awareness through a transformative residency experience.
          </p>
        </div>
      </section>
      <section
        className="w-screen text-white pb-[30vh] flex flex-col items-center z-20 relative pt-[20vh]"
        ref={CTARefconatiner}
      >
        <p
          className="lg:text-8xl text-4xl text-center font-ethn  "
          ref={(e) => {
            CTARef.current[0] = e;
          }}
        >
          Join Us
        </p>
        <div
          className="flex gap-4 mt-2 lg:mt-4"
          ref={(e) => {
            CTARef.current[1] = e;
          }}
        >
          {/* <Link
              href={"#about"}
              className="py-3 px-3 lg:px-8 font-ethn border-2 border-white font-thin  lg:text-xl"
            >
              Learn More
            </Link> */}
          <Link
            href={"/programs"}
            className="py-3 px-3 lg:px-8  font-ethn bg-white font-light text-black lg:text-3xl  hover:scale-105 transition-all duration-300"
          >
            Find the Program for you
          </Link>
        </div>
      </section>
    </main>
  );
}
