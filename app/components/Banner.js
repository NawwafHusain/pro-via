import Image from "next/image";
import React from "react";

export default function Banner({ images }) {
  return (
    <div className="relative w-screen lg:h-32 h-24 bg-black">
      <div className="relative h-full flex justify-around   min-w-[200vw] banner-animation">
        {images.map((image, index) => (
          <Image
            src={image}
            className="aspect-square object-contain lg:scale-100 scale-75"
            width={300}
            height={300}
            alt={image}
            key={image}
          />
        ))}
        {images.map((image, index) => (
          <Image
            src={image}
            className="aspect-square object-contain lg:scale-100 scale-75"
            width={300}
            height={300}
            alt={image}
            key={image}
          />
        ))}
        {images.map((image, index) => (
          <Image
            src={image}
            className="aspect-square object-contain lg:scale-100 scale-75"
            width={300}
            height={300}
            alt={image}
            key={image}
          />
        ))}
        {images.map((image, index) => (
          <Image
            src={image}
            className="aspect-square object-contain lg:scale-100 scale-75"
            width={300}
            height={300}
            alt={image}
            key={image}
          />
        ))}
      </div>
    </div>
  );
}
