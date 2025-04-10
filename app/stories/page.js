"use client";
import Image from "next/image";
import "./styles.css";
import PlayerStory from "./PlayerStory";
import { successStories } from "../data/successStories";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

export default function Page() {
  gsap.registerPlugin(ScrollTrigger);
  const containerRef = useRef(null);
  const alexComponents = useRef([]);
  const alexImage = useRef();
  const headerRef = useRef([]);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        stagger: 0.1,
      });
      gsap.from(alexComponents.current, {
        opacity: 0,
        y: 100,
        delay: 1,
        duration: 1,
        stagger: 0.1,
      });
      gsap.from(alexImage.current, {
        opacity: 0,
        x: 300,
        delay: 1,
        duration: 2,
        stagger: 0.1,
      });
      gsap.from(".playersCard", {
        scrollTrigger: {
          trigger: ".playersCard",
          start: "top 80%",
          end: "bottom 50%",
        },
        opacity: 0,
        y: 100,

        duration: 1,
        stagger: 0.1,
      });
    },
    { scope: containerRef.current }
  );
  return (
    <main className="relative w-screen overflow-x-clip">
      <div className="w-screen py-10 bg-black text-white px-4 lg:px-60 text-center">
        <h1
          className="text-center text-3xl lg:text-6xl font-ethn font-bold mt-10 mb-4"
          ref={(e) => (headerRef.current[0] = e)}
        >
          A proven path to success
        </h1>
        <p className="lg:text-xl " ref={(e) => (headerRef.current[1] = e)}>
          Stop wondering &apos;what if?&apos; and start building your
          professional or collegiate future. Pro-Via Academy illuminates the
          path, providing the expert guidance, international exposure, and elite
          development needed to transform potential into tangible success. These
          stories aren&apos;t just inspiration; they are blueprints forged
          through our proven system. Discover how our pathway can elevate your
          game and unlock your highest level.
        </p>
      </div>

      <section className="w-screen lg:h-[90vh] relative bg-white flex flex-col justify-between lg:flex-row  ">
        <div className="flex flex-col flex-1 lg:pt-24 pt-24 pb-0 ">
          <h2
            ref={(e) => {
              alexComponents.current[0] = e;
            }}
            className="lg:text-5xl font-ethn text-3xl bg-black text-white lg:py-8 py-3 pl-4 lg:pl-24 lg:w-[80%] heading-crop relative"
          >
            Alex Araneda
          </h2>
          <p
            ref={(e) => {
              alexComponents.current[1] = e;
            }}
            className="lg:text-5xl text-2xl text-black font-ethn lg:pl-24 pl-4 lg:pr-0  mt-2"
          >
            {" "}
            <span className="lg:text-2xl text-lg">Signed</span>
            <br />
            phoenix rising
          </p>
          <p
            ref={(e) => {
              alexComponents.current[2] = e;
            }}
            className="lg:pl-24 pl-4 lg:pr-0 pr-4 text-xl mt-2"
          >
            Alex navigated the complete Pro-Via pathway, advancing through elite
            development stages including international play, MLS Next Pro, and
            securing multiple professional contracts. Now making an impact with
            <b> Phoenix Rising in the USL Championship</b> after securing a
            trail following his season with Spanish side <i>Tres cantos CDF</i>{" "}
            . His journey exemplifies our proven ability to cultivate talent
            ready for established professional leagues.
          </p>
          <div
            className="flex gap-4 mt-2 lg:mt-4"
            ref={(e) => {
              alexComponents.current[3] = e;
            }}
          >
            <Image
              src={"/images/pRising.png"}
              width={100}
              height={100}
              alt="phoenix rising"
              className="lg:ml-24 ml-4 lg:mr-0 mr-4 mt-8"
            />
          </div>
        </div>
        <Image
          src={"/images/chile.png"}
          className="lg:w-[40vw] lg:h-full lg:mt-16 h-[70vh]  object-contain"
          width={500}
          height={1000}
          alt="Gap year program background hidden"
          ref={alexImage}
        />
        <div className="bg-gradient-to-b from-black to-10% absolute top-0 left-0 w-screen h-full" />

        <div className="bg-gradient-to-t from-black to-10% absolute bottom-0 left-0 w-screen h-full" />
      </section>
      {/* <section className="w-screen lg:h-[90vh] relative  flex flex-col justify-between lg:flex-row-reverse">
        <div className="flex flex-col flex-1 lg:py-24 pt-24 pb-0 mt-10 lg:items-end text-white">
          <h2 className="lg:text-5xl font-ethn text-3xl bg-white text-black lg:py-8 py-3 pl-4 lg:pl-24 lg:w-[80%] heading-crop-white relative">
            Alex Araneda
          </h2>
          <p className="lg:text-5xl text-2xl text-white font-ethn lg:pl-0 pl-4 lg:pr-72  mt-2">
            {" "}
            <span className="lg:text-2xl text-lg">Signed</span>
            <br />
            phoenix rising
          </p>
          <p className="lg:pl-24 pl-4 lg:pr-24 pr-4 text-xl mt-2">
            Alex navigated the complete Pro-Via pathway, advancing through elite
            development stages including international play, MLS Next Pro, and
            securing multiple professional contracts. Now making an impact with
            <b> Phoenix Rising in the USL Championship</b> after securing a
            trail following his season with Spanish side <i>Tres cantos CDF</i>{" "}
            . His journey exemplifies our proven ability to cultivate talent
            ready for established professional leagues.
          </p>
          <div className="flex gap-4 mt-2 lg:mt-4">
            <Image
              src={"/images/pRising.png"}
              width={100}
              height={100}
              alt="phoenix rising"
              className="lg:ml-24 ml-4 lg:mr-0 mr-4 mt-8"
            />
          </div>
        </div>
        <Image
          src={"/images/chile.png"}
          className="lg:w-[40vw] lg:h-full lg:mt-16 h-[70vh]  object-contain"
          width={500}
          height={1000}
          alt="Gap year program background hidden"
        />
        <div className="bg-gradient-to-b from-black to-10% absolute top-0 left-0 w-screen h-full" />
      </section> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 lg:mt-24 px-4 lg:px-24">
        {" "}
        {/* Grid for 1 col mobile, 3 cols desktop */}
        {successStories.map((player) => (
          // Each grid item takes full height in its cell
          <div key={player.name} className="flex">
            <PlayerStory player={player} />
          </div>
        ))}
      </div>
    </main>
  );
}

// Optional: Metadata for App Router (/app/proven-results/page.tsx)
// export const metadata = {
//   title: 'Proven Results - Pro-Via Academy Alumni Success Stories',
//   description: 'Explore the success stories of Pro-Via Academy alumni like Edwin Dominguez, Erik Hernandez, and the Araneda brothers.',
// };
