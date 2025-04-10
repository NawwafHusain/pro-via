// /data/successStories.js

export const successStories = [
  {
    name: "Edwin Dominguez",
    imageUrl: "/images/edwin.png",

    story:
      "From InterSocail captaincy to the Ivy League. Edwin leveraged vital international exposure fostered by our program to achieve the prestigious goal of playing NCAA Division 1 soccer while excelling academically at **Harvard University**. Now starring for the Harvard Crimson, his journey showcases the elite pathways Pro-Via unlocks for dedicated student-athletes.",
  },
  {
    name: "Erik Hernandez",
    imageUrl: "/images/kikin.png", // REPLACE with actual image path
    story:
      "Erik's commitment within the Pro-Via residency program forged his path to the professional level. After honing his talents in our demanding Spanish residency, he earned a coveted pro contract with Xolos Tijuana and now competes at the high-intensity **Ventura County FC MLS Next Pro** level—a testament to our direct pipeline to professional opportunities.",
  },
  {
    name: "Joaquin Araneda",
    imageUrl: "/images/joaqo.png", // REPLACE with actual image path
    story:
      "Joaquin transformed his potential into a professional contract, rapidly signing with LA Galaxy II after developing within the immersive Craq FC residency (now Pro-Via Academy, LLC). He continues to elevate his game internationally, competing at a high level with Spain's **Tres Cantos CDF Senior Team**, demonstrating the global stage accessible through Pro-Via.",
  },
];

// Helper component to render story text with basic bolding
// Note: This is a simple approach. For complex HTML, consider MDX or a dedicated library.
export const StoryText = ({ text }) => {
  // Split text by ** to find bold segments
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : part
      )}
    </>
  );
};
