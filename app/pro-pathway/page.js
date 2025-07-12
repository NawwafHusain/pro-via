import Image from "next/image";
import { Ethnocentric } from "next/font/google";
import Link from "next/link";

export default function ProPathway() {
  return (
    <main className="min-h-screen max-w-screen overflow-x-hidden ">
        <section className="w-full lg:px-24 px-4 lg:h-screen h-[150vh]   flex flex-col justify-start lg:justify-center pt-16 lg:pt-0 relative">
          <Image src="/images/AlexMadridBlack.png" alt="Pro-Pathway" fill className="object-cover hidden lg:block" />
          <Image
                src="/images/AlexMadridMobile.png"
                width={1000}
                height={3000}
                alt="hero"
                className="object-cover h-full top-0 object-right block lg:hidden absolute left-0"
              />
            <h1 className={`font-ethn text-5xl font-bold lg:text-white text-black mb-4 relative`}>Pro-Pathway <br/>
            Program</h1>
            <p className="text-lg lg:text-white text-black relative lg:w-[50vw]">
              The Pro-Pathway is a 28-day program that blends elite training with direct exposure to Spanish football clubs. Elevate your skills, compete alongside Spanish players, and open doors to professional football opportunities.
            </p>
            <Link href="#apply" className="bg-white text-black px-4 py-2 w-max font-ethn   mt-8 text-xl relative">Apply Now</Link>
        </section>
        <section className="w-full lg:px-24 px-4 flex lg:flex-row flex-col gap-4 py-10 ">
            
            <h2 className={` flex-1 font-ethn text-5xl font-bold text-white mb-4`}> What does the Pro-Pathway include?</h2>
            
            <div className="flex-1">
                <ul className="flex flex-col gap-4 text-black bg-white rounded-3xl px-4 lg:px-8 py-10 disc">
                    <li className="flex gap-1 flex-col">
                        <h3 className="text-2xl font-bold">Daily Training</h3>
                        <p>Experience professional-level training with our expert coaches and staff.</p>
                    </li>
                    <li className="flex gap-1 flex-col">
                        <h3 className="text-2xl font-bold">Competition</h3>
                        <p>Participate in local and regional freindly competitions to showcase your skills and build your experience.</p>
                    </li>
                    <li className="flex gap-1 flex-col">
                        <h3 className="text-2xl font-bold">Play infront of pro-scouts</h3>
                        <p>Play infront of pro-scouts to showcase your skills and build your experience.</p>
                    </li>
                    <li className="flex gap-1 flex-col">
                        <h3 className="text-2xl font-bold">Pro-Trial</h3>
                        <p>If you are selected, you will receive a pro-trial with a professional club to showcase your skills and build your experience.</p>
                    </li>
                    
                    
                </ul>
          </div>
        </section>
        <section id="apply" className="w-full lg:px-24 px-4 pt-28 mb-24">
            <h2 className={`font-ethn text-5xl font-bold text-white mb-16`}>Choose Your Start Date</h2>
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:gap-4 ">
        <div className="flex-1 relative bg-gradient-to-b from-gray-100 from-40% to-transparent rounded-t-3xl flex flex-col text-black  items-center pt-10 gap-2 pb-24">
          <h1 className="text-4xl font-bold">August 2025</h1>
          <p className="text-base">August 2 - August 30</p>
<div className="w-full px-10 mt-10">
    <p className="text-red-500 font-bold">SLOTS FULL</p>
<button disabled className="border-black border-2 text-xl text-black px-4 py-2 font-bold w-full disabled:opacity-50">
            Sign Up
          </button>
</div>
          
        </div>
        <div className="flex-1 relative bg-gradient-to-b from-gray-100 from-40% to-transparent rounded-t-3xl flex flex-col text-black items-center pt-10 gap-2 pb-24">
          <h1 className="text-4xl font-bold">October 2025</h1>
          <p className="text-base">october 15th - November 12th</p>
          <div className="w-full px-10 mt-10">
    <p className="text-red-500 font-bold">SLOTS FULL</p>
<button disabled className="border-black border-2 text-xl text-black px-4 py-2 font-bold w-full disabled:opacity-50">
            Sign Up
          </button>
</div>
        </div>
        <div className="flex-1 relative bg-gradient-to-b from-gray-100 from-40% to-transparent rounded-t-3xl flex flex-col text-black items-center  pt-10 gap-2 pb-24">
          <h1 className="text-4xl font-bold">March 2026</h1>
          <p className="text-base">March 16th - April 12th</p>
          <div className="w-full px-10 mt-10">
    <p className="text-red-500 text-transparent"> . </p>
<button disabled className="border-black border-2 text-xl text-black px-4 py-2 font-bold w-full disabled:opacity-50">
            Comming Soon
          </button>
</div>
        </div>
      </div>
        </section>
   
    </main>
  );
}
