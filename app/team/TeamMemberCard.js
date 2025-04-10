// /components/TeamMemberCard.js
import Image from "next/image";

// Helper function to get a simple placeholder background color based on country code
// You might replace this with actual flag images later
const getFlagPlaceholderStyle = (country) => {
  // Basic example, expand as needed
  switch (country?.toUpperCase()) {
    case "USA":
      return (
        <Image
          src={"/images/flags/USA.png"}
          width={50}
          height={50}
          alt="usa flag"
          className="object-cover w-full h-full"
        ></Image>
      );
    case "ESP":
      return (
        <Image
          src={"/images/flags/ESP.png"}
          width={50}
          height={50}
          alt="spain flag"
          className="object-cover w-full h-full"
        ></Image>
      );
    case "UAE":
      return (
        <Image
          src={"/images/flags/UAE.png"}
          width={50}
          height={50}
          alt="uae flag"
          className="object-cover w-full h-full"
        ></Image>
      );
    case "MEX":
      return (
        <Image
          src={"/images/flags/MEX.png"}
          width={50}
          height={50}
          alt="mexico flag"
          className="object-cover w-full h-full"
        ></Image>
      );
    default:
      return { backgroundColor: "#4A5568" }; // Gray fallback
  }
};

const TeamMemberCard = ({ member }) => {
  const flagStyle = getFlagPlaceholderStyle(member.country);

  return (
    <div className="bg-black rounded-lg shadow-lg text-white overflow-hidden w-full max-w-sm mx-auto">
      {" "}
      {/* Adjust max-w as needed */}
      <div className="relative h-64 sm:h-72 flex justify-between">
        {" "}
        {/* Adjust height as needed */}
        {/* Background Image */}
        <Image
          src={member.imageUrl}
          alt={`Photo of ${member.name}`}
          layout="fill" // Use fill to cover the container
          objectFit="contain" // Cover the area, might crop
          objectPosition="center top" // Focus on the top part of the image
          className="z-0" // Ensure image is behind positioned elements
        />
        {/* Flag and Title Overlay */}
        <div className="absolute top-4 right-4 z-10 flex flex-col items-center space-y-2">
          {/* Circular Flag Placeholder */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-clip flex items-center justify-center text-xs font-bold border-2 border-white"
            // Apply generated background
          >
            {flagStyle}
            {/* Optionally display country code if background isn't enough */}
            {/* <span className="text-black mix-blend-difference">
              {member.country}
            </span> */}
          </div>
          {/* Title (CTO, CEO, etc.) */}
          <p className="font-ethn text-sm sm:text-sm font-bold uppercase text-shadow-sm w-min text-center">
            {" "}
            {/* Added text-shadow */}
            {member.title}{" "}
            {/* Display only the first part like CTO/CEO if needed */}
          </p>
        </div>
      </div>
      {/* Content Below Image */}
      <div className="p-4 pt-0">
        {" "}
        {/* Reduced top padding */}
        {/* Separator Line */}
        <hr className="border-t-4 border-white mb-3" />
        {/* Name */}
        <h3 className="font-ethn text-xl sm:text-2xl font-bold uppercase tracking-wide mb-2 text-left">
          {" "}
          {/* Centered Name */}
          {member.name}
        </h3>
        {/* Bio Points */}
        <div className="text-left text-sm text-gray-300 space-y-1">
          {" "}
          {/* Centered Description */}
          {/* Using the first bio point as the primary role description */}
          {member.bio && member.bio.length > 0 && <p>{member.bio[0]}</p>}
          {/* You can add more bio points here if needed, or perhaps in a modal/tooltip */}
        </div>
      </div>
    </div>
  );
};

// Helper for simple text shadow (add to your global CSS or keep inline)
// You might need to define this utility if you don't have it
// .text-shadow-sm { text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5); }

export default TeamMemberCard;
