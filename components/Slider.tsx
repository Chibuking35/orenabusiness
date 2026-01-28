"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Slide {
  word: string;
  image: string;
  description: string;
}

const slides: Slide[] = [
  {
    word: "Make Your Brand Known",
    image: "/s1.jpg",
    description: "We help you stand out and be recognized through impactful branding and high-quality prints.",
  },
  {
    word: "Express Your Identity",
    image: "/slider2.jpg",
    description: "Bring your vision, values, and story to life through designs that reflect who you are.",
  },
  {
    word: "We Deliver Lasting Quality",
    image: "/slider6.jpg",
    description: "High-quality prints and materials leave a strong impression on your customers, building trust and credibility.",
  },
  {
    word: "Turn Ideas Into Impact",
    image: "/slider9.jpg",
    description: "Branded products create meaningful connections, encouraging loyalty and word-of-mouth promotion.",
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
    <div className="w-full md:h-screen h-fit flex flex-col lg:flex-row">
      {/* Left Side */}
      <div className="lg:w-1/4 bg-white lg:bg-gray-300 text-red-500 lg:text-red-500 flex flex-col justify-center p-3 md:p-15  pt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4 max-w-[80%] md:max-w-full ">
          Welcome to Orena
        </h2>
        <p className="text-sm md:text-md text-gray-600 max-w-[70%] md:max-w-full">
          Where everyday items become powerful expressions of identity. Explore
          personalized designs crafted to reflect your values, vision, and
          style.
        </p>
        <div className="hidden lg:flex flex-col">
          <div className="h-px w-[80%] bg-gray-500 mt-5 mb-3 " />
          <div className="flex flex-row gap-3 items-center">
            <Link href="/contact" className=" mb-10">
              <FaWhatsapp size={22} />
            </Link>
            <Link href="/contact" className=" mb-10">
              <FaXTwitter size={22} />
            </Link>
            <Link href="/contact" className=" mb-10">
              <FaFacebookF size={22} />
            </Link>
            <Link href="/contact" className=" mb-10">
              <FaInstagram size={22} />
            </Link>
          </div>
          <h1 className="text-[13px] font-bold text-gray-600 ">
           Let&#39;s Build Your Brand Together
          </h1>
          <p className="md:text-[12px]  text-gray-500 max-w-[70%] md:max-w-full">
           From personalized apparel to custom prints, we&#39;re ready to transform your ideas into meaningful designs. Reach out and let&#39;s get started.
          </p>

          <Link
            href="/contact"
            className="bg-red-500 rounded-full py-2 mt-5 text-xs px-5 text-white max-w-fit"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-2/2 relative flex items-center  justify-center h-96 md:h-screen">
        {/* Background Image */}
        <Image
          src={slides[current].image}
          alt={slides[current].word}
          fill
          className="object-cover transition-opacity duration-1000 relative"
        />
        <div className="bg-black/60 z-20 absolute inset-0" />

        {/* Word in front */}
        <div className="absolute z-20 items-center px-5  justify-center">
          <div className="text-left">
            <h1 className="text-2xl md:text-4xl text-white font-bold drop-shadow-lg">
              {slides[current].word}
            </h1>
            <p className="mt-2 text-gray-400 text-sm md:text-lg font-light w-[70%] md:w-full">
              {slides[current].description}
            </p>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-5 hidden md:flex opacity-60 w-[90%] bg-gray-300 backdrop-blur-2xl bg-opacity-50 z-20 text-gray-600 rounded-md  justify-between p-5">
          <div className="flex-1 text-center flex-col flex">
            <h1 className="font-bold">Quality</h1>
            <p className="text-xs font-light">
             Premium materials, clean finishes, and lasting prints
            </p>{" "}
          </div>
          <div className="w-px relative mx-3 h-9 bg-gray-600" />
          <div className="flex-1 text-center flex-col flex">
            <h1 className="font-bold">Creativity</h1>
            <p className="text-xs font-light">
              Designs that tell stories and express identity
            </p>{" "}
          </div>
          <div className="w-px relative mx-4 h-9 bg-gray-600" />
          <div className="flex-1 text-center flex-col flex">
            <h1 className="font-bold">Precision</h1>
            <p className="text-xs font-light">
              Attention to detail in every print and customization
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
