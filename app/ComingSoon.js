"use client";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/emailList", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    console.log("got a response", res.status, res.body);
    const data = await res.json();
    console.log("data in client", data);
    setMessage(data.message || data.error);
  };

  return (
    <section className="relative h-screen w-screen px-4 lg:px-24 flex lg:items-center lg:pt-0 pt-24 overflow-hidden ">
      <Image
        src={"/images/AlexMadridBlack.png"}
        className="w-full h-full hidden lg:block object-cover translate-x-24"
        fill
        alt="Gap year program background hidden "
      />
      <Image
        src={"/images/AlexMadridBlackMobile.png"}
        className="w-full h-full lg:hidden object-cover"
        fill
        alt="Gap year program background "
      />
      <div className="w-full absolute bottom-0 left-0 h-full bg-gradient-to-t from-black to-transparent to-10%" />
      <Image
        src={"/images/LogoWhite.png"}
        className=" object-contain relative mr-10 "
        width={190}
        height={180}
        alt="Gap year program background "
      />
      <div className="relative text-white w-full gap-8">
        <p className="font-ethn  lg:text-3xl font-thin">DREAM DARE DEFY</p>
        <h1 className="lg:text-4xl text-2xl font-ethn lg:w-4/6">
          The most exciting football programs, coming soon!
        </h1>
        <p className="lg:w-3/5 mt-2 lg:mt-4 lg:text-lg text-sm ">
          Join the waiting list to save your spot and be informed of the latest
          updates!
        </p>

        <form className="flex gap-4 mt-2 lg:mt-4" onSubmit={handleSubmit}>
          <input
            name="email"
            placeholder="Email"
            className="px-4 w-[20vw] text-black"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-3 px-3 lg:px-8 font-ethn bg-white font-light text-black lg:text-xl hover:scale-105 transition-all duration-300"
          >
            submit
          </button>
        </form>
        {message && (
          <p className="text-white flex gap-2">
            <AlertTriangle />
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
