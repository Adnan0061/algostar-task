import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full relative">
      <Image
        src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg"
        alt="Hero background"
        fill
        className="object-cover object-center brightness-50"
        quality={50}
        priority
      />
      <div className="w-full max-w-7xl mx-auto h-full flex flex-col items-start justify-center gap-7 relative z-10">
        <h1 className="w-full text-8xl font-bold text-white">
          Find Your
          <br /> <span className="text-yellow-500">Favorite</span> Products
          <br /> In One Click
        </h1>
        <button
          type="button"
          className="bg-yellow-500 text-white px-16 py-4 text-4xl font-bold rounded-md"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
