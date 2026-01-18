"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  word: string;
  image: string;
  description: string;
}

const slides: Slide[] = [
  {
    word: "Explore",
    image: "/slider.jpg",
    description: "We are still in the business of doing things",
  },
  {
    word: "Create",
    image: "/slider2.jpg",
    description: "Unleash your creativity",
  },
  {
    word: "Inspire",
    image: "/slider6.jpg",
    description: "Motivate and achieve greatness",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:h-screen h-400 flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="lg:w-1/4 bg-white lg:bg-gray-400 text-red-500 lg:text-gray-600 flex flex-col justify-center p-10 pt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 max-w-[80%] ">Welcome to Our Platform</h2>
        <p className="text-sm md:text-lg text-gray-600 max-w-[70%]">
          Discover amazing features, explore creative designs, and enjoy smooth
          experiences with our slider.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-2/2 relative flex items-center justify-center h-96 md:h-screen">
        {/* Background Image */}
        <Image
          src={slides[current].image}
          alt={slides[current].word}
          fill
          className="object-cover transition-opacity duration-1000 relative"
        />
        <div className="bg-black/60 z-20 absolute inset-0" />

        {/* Word in front */}
        <div className="absolute z-20 items-center  justify-center">
          <div className="text-left">
            <h1 className="text-4xl text-white font-bold drop-shadow-lg">
              {slides[current].word}
            </h1>
            <p className="mt-2 text-white text-lg">
              {slides[current].description}
            </p>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-5 hidden md:flex opacity-60 w-[90%] bg-gray-300 backdrop-blur-2xl bg-opacity-50 z-20 text-gray-600 rounded-md  justify-between p-5">
          <div className="flex-1 text-center flex-col flex">
            <h1>Info 1</h1>
            <p className="text-xs font-light">
              this is where the paragraph will be
            </p>{" "}
          </div>
          <div className="w-px relative h-9 bg-gray-600" />
          <div className="flex-1 text-center flex-col flex">
            <h1>Info 2</h1>
            <p className="text-xs font-light">
              this is where the paragraph will be
            </p>{" "}
          </div>
          <div className="w-px relative h-9 bg-gray-600" />
          <div className="flex-1 text-center flex-col flex">
            <h1>Info 3</h1>
            <p className="text-xs font-light">
              this is where the paragraph will be
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
