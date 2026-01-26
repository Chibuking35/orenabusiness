"use client";

import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";

const Images = [
  "/m6.jpg",
  "/m2.jpg",
  "/m5.jpg", "/m13.jpg","/m15.jpg","/m16.jpg",
  "/m1.jpg",
  "/m3.jpg","/m18.jpg",
  "/m4.jpg",
  "/m7.jpg",
  "/m8.jpg","/m19.jpg",
  "/m9.jpg",
  "/m10.jpg",
  "/m11.jpg",
  "/m12.jpg",
 
  "/m14.jpg",
];

// Pinterest-style responsive columns
const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

const GalleryVeiw = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));

  const lastTapRef = useRef<number>(0);

  const openImage = (img: string, index: number) => {
    setSelectedImage(img);
    setCurrentIndex(index);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      const newIndex = (currentIndex + 1) % Images.length;
      setCurrentIndex(newIndex);
      setSelectedImage(Images[newIndex]);
      api.start({ x: 0, y: 0, scale: 1 });
    }
  };

  const prevImage = () => {
    if (currentIndex !== null) {
      const newIndex = (currentIndex - 1 + Images.length) % Images.length;
      setCurrentIndex(newIndex);
      setSelectedImage(Images[newIndex]);
      api.start({ x: 0, y: 0, scale: 1 });
    }
  };

  const bind = useGesture(
    {
      onDrag: ({ offset: [dx, dy], swipe: [swipeX] }) => {
        if (scale.get() > 1.1) {
          api.start({ x: dx, y: dy });
        } else {
          if (swipeX === -1) nextImage();
          if (swipeX === 1) prevImage();
        }
      },

      onPinch: ({ offset: [d] }) => {
        api.start({ scale: 1 + d / 200 });
      },

      onClick: () => {
        const now = Date.now();
        if (now - lastTapRef.current < 300) {
          api.start({
            scale: scale.get() > 1 ? 1 : 2,
            x: 0,
            y: 0,
          });
        }
        lastTapRef.current = now;
      },
    },
    {
      drag: { filterTaps: true },
      pinch: { scaleBounds: { min: 1, max: 3 } },
    }
  );

  useEffect(() => {
    if (!selectedImage) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, currentIndex]);

  return (
    <div className="p-6 py-20 md:py-36 bg-white">
     
      {/* ✅ Pinterest Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {Images.map((img, index) => (
          <div
            key={img}
            className="cursor-pointer overflow-hidden rounded shadow-md hover:opacity-90 mb-4"
            onClick={() => openImage(img, index)}
          >
            <Image
              src={img}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Masonry>

      {/* Modal */}
    {selectedImage && (
  <div
    className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2"
    onClick={closeModal}
  >
    <div
      className="relative flex items-center justify-center max-w-full max-h-full"
      onClick={(e) => e.stopPropagation()}
    >
      <animated.div
        {...bind()}
        style={{ x, y, scale, touchAction: "none" }}
        className="flex items-center justify-center max-w-full max-h-full"
      >
        <Image
          src={selectedImage}
          alt="selected"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            maxWidth: "98vw",   
            maxHeight: "98vh",  
            width: "auto",
            height: "auto",
          }}
          draggable={false}
        />
      </animated.div>

      <button
        onClick={closeModal}
        className="absolute top-3 right-4 text-white bg-black/70 p-3 rounded-full"
      >
        <X />
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default GalleryVeiw;
