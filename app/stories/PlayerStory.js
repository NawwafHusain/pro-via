// /components/PlayerStory.js
import Image from "next/image";

import { StoryText } from "../data/successStories"; // Import the helper

const PlayerStory = ({ player }) => {
  return (
    // Changed to vertical flex layout, centered items
    <div className="flex flex-col items-center text-center p-4  rounded-lg h-full playersCard">
      {" "}
      {/* Added subtle background and padding, ensures full height */}
      {/* Player Image Container - Adjusted size, removed rounding/border */}
      <div className=" w-full aspect-square relative">
        {" "}
        {/* Increased size, adjust aspect ratio if needed */}
        <Image
          src={player.imageUrl} // Ensure this path is correct and points to a PNG
          alt={`Photo of ${player.name}`}
          className="object-cover w-full h-full"
          fill // Fill the container

          // Removed rounded-full and border
        />
      </div>
      <div className="p-4 pt-0">
        {" "}
        {/* Separator Line */}
        <hr className="border-t-4 border-white mb-3" />
        {/* Name */}
        <h3 className="font-ethn text-xl sm:text-2xl font-bold uppercase tracking-wide mb-2  text-white ">
          {" "}
          {/* Centered Name */}
          {player.name}
        </h3>
        {/* Bio Points */}
        <p className="text-sm sm:text-base text-gray-300 flex-grow">
          {" "}
          {/* Allow paragraph to grow */}
          <StoryText text={player.story} />
        </p>
      </div>
    </div>
  );
};

export default PlayerStory;
