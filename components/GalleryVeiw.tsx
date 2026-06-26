"use client";

import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Masonry from "react-masonry-css";

type MediaItem = {
  type: "image" | "video";
  src: string;
};

const media: MediaItem[] = [
  { type: "image", src: "/m1.jpg" },
  { type: "video", src: "/jersy.mp4" },
  { type: "image", src: "/m2.jpg" },
  { type: "image", src: "/m5.jpg" },
  { type: "image", src: "/m13.jpg" },
  { type: "image", src: "/m15.jpg" },
  { type: "image", src: "/m16.jpg" },
  { type: "image", src: "/m6.jpg" },
  { type: "image", src: "/m3.jpg" },
  { type: "image", src: "/m18.jpg" },
  { type: "image", src: "/m4.jpg" },
  { type: "image", src: "/m17.jpg" },
  { type: "image", src: "/m7.jpg" },
  { type: "image", src: "/tote.jpg" },
  { type: "image", src: "/m21.jpg" },
  { type: "image", src: "/m8.jpg" },
  { type: "image", src: "/m19.jpg" },
  { type: "image", src: "/m9.jpg" },
  { type: "image", src: "/m10.jpg" },
  { type: "image", src: "/m11.jpg" },
  { type: "image", src: "/sign.jpg" },
  { type: "image", src: "/m12.jpg" },
  { type: "image", src: "/m14.jpg" },
];

// Pinterest-style responsive columns
const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

const GalleryVeiw = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));

  const lastTapRef = useRef<number>(0);

  const openImage = (item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const closeModal = () => {
    // Pause video when closing modal
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setSelectedMedia(null);
    setCurrentIndex(null);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      // Pause current video if playing
      if (videoRef.current) {
        videoRef.current.pause();
      }
      const newIndex = (currentIndex + 1) % media.length;
      setCurrentIndex(newIndex);
      setSelectedMedia(media[newIndex]);
      api.start({ x: 0, y: 0, scale: 1 });
    }
  };

  const prevImage = () => {
    if (currentIndex !== null) {
      // Pause current video if playing
      if (videoRef.current) {
        videoRef.current.pause();
      }
      const newIndex = (currentIndex - 1 + media.length) % media.length;
      setCurrentIndex(newIndex);
      setSelectedMedia(media[newIndex]);
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
        api.start({ scale: Math.max(1, 1 + d / 200) });
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
    if (!selectedMedia) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedMedia, currentIndex]);

  // Auto-play video when selected
  useEffect(() => {
    if (selectedMedia?.type === "video" && videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Auto-play might be blocked by browser, user will need to click play
        console.log("Auto-play prevented:", error);
      });
    }
  }, [selectedMedia]);

  return (
    <div className="p-6 py-20 md:py-30 bg-white">
      {/* Pinterest Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-6"
        columnClassName="space-y-6"
      >
        {media.map((item, index) => (
          <div
            key={item.src}
            className="cursor-pointer overflow-hidden rounded shadow-md hover:opacity-90 mb-4"
            onClick={() => openImage(item, index)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt=""
                width={500}
                height={500}
                className="w-full h-auto"
                unoptimized={item.src.endsWith('.gif')}
              />
            ) : (
              <video
                muted
                playsInline
                className="w-full h-auto rounded-md"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </Masonry>

      {/* Modal */}
      {selectedMedia && (
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
              {selectedMedia.type === "image" ? (
                <Image
                  src={selectedMedia.src}
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
                  unoptimized={selectedMedia.src.endsWith('.gif')}
                />
              ) : (
                <video
                  ref={videoRef}
                  loop
                  controls
                  muted
                  playsInline
                  autoPlay
                  className="w-full rounded-md md:max-h-95 object-contain"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                </video>
              )}
            </animated.div>

            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-white bg-black/70 p-3 rounded-full hover:bg-black/90 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryVeiw;