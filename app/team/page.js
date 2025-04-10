// For Pages Router: /pages/meet-the-team.js
// For App Router: /app/meet-the-team/page.tsx (or .jsx)
"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import TeamMemberCard from "./TeamMemberCard"; // Adjust import path
import { teamMembers } from "../data/teamMembers"; // Adjust import path

// Optional: Register ScrollTrigger if you want animations on scroll
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);
// ---

export default function MeetTheTeamPage() {
  const container = useRef(null);

  useGSAP(
    () => {
      // console.log('GSAP Hook Running. Targeting:', gsap.utils.toArray('.team-card')); // Debugging line

      gsap.from(".team-card", {
        opacity: 0, // GSAP handles making it initially invisible
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
        // --- Optional: ScrollTrigger ---
        // scrollTrigger: {
        //   trigger: container.current,
        //   start: 'top 80%',
        //   toggleActions: 'play none none none',
        // },
        // --- End Optional: ScrollTrigger ---
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="bg-black min-h-screen pt-24 pb-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-4 font-ethn">
            Bringing The Expertise
          </h1>
          <p className="mt-2 text-lg text-gray-300 max-w-3xl mx-auto">
            With over a century of combined experience in elite football player
            development & advancement, our team is disrupting the US footballer
            pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            // *** REMOVED opacity-0 from here ***
            <div key={member.name} className="team-card relative">
              {" "}
              {/* Let GSAP control initial opacity */}
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Optional: Metadata for App Router
// export const metadata = { ... };
