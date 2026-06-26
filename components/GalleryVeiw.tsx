"use client";

import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import { X, Play } from "lucide-react";
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
  { type: "video", src: "/phone.mp4" },
  { type: "image", src: "/m3.jpg" },
  { type: "image", src: "/m18.jpg" },
  { type: "image", src: "/m4.jpg" },
  { type: "image", src: "/m17.jpg" },
  { type: "image", src: "/m7.jpg" },
  { type: "image", src: "/tote.jpg" },
  { type: "image", src: "/m21.jpg" },
  { type: "image", src: "/m8.jpg" },
  { type: "video", src: "/circlestick.mp4" },
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
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [{ x, y, scale }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));

  const lastTapRef = useRef<number>(0);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openMedia = (item: MediaItem, index: number) => {
    setSelectedMedia(item);
    setCurrentIndex(index);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const closeModal = () => {
    // Pause video when closing modal
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setSelectedMedia(null);
    setCurrentIndex(null);
    api.start({ x: 0, y: 0, scale: 1 });
  };

  const nextMedia = () => {
    if (currentIndex !== null) {
      // Pause current video if playing
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
      }
      const newIndex = (currentIndex + 1) % media.length;
      setCurrentIndex(newIndex);
      setSelectedMedia(media[newIndex]);
      api.start({ x: 0, y: 0, scale: 1 });
    }
  };

  const prevMedia = () => {
    if (currentIndex !== null) {
      // Pause current video if playing
      if (modalVideoRef.current) {
        modalVideoRef.current.pause();
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
        if (selectedMedia?.type === "image" && scale.get() > 1.1) {
          api.start({ x: dx, y: dy });
        } else if (selectedMedia?.type === "image") {
          if (swipeX === -1) nextMedia();
          if (swipeX === 1) prevMedia();
        }
      },

      onPinch: ({ offset: [d] }) => {
        if (selectedMedia?.type === "image") {
          api.start({ scale: Math.max(1, 1 + d / 200) });
        }
      },

      onClick: () => {
        if (selectedMedia?.type === "image") {
          const now = Date.now();
          if (now - lastTapRef.current < 300) {
            api.start({
              scale: scale.get() > 1 ? 1 : 2,
              x: 0,
              y: 0,
            });
          }
          lastTapRef.current = now;
        }
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
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedMedia, currentIndex]);

  // Setup Intersection Observer for videos with better mobile support
  useEffect(() => {
    // Disconnect existing observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoElement = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // Video is in view - play it
            videoElement.play().catch((error) => {
              console.log("Auto-play prevented:", error);
            });
          } else {
            // Video is out of view - pause it
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.1, // Lower threshold for mobile (10% visible)
        rootMargin: "0px 0px -50px 0px", // Slightly reduce the viewport for better performance
      }
    );

    // Observe all video elements after a small delay (for Masonry layout to settle)
    const timeoutId = setTimeout(() => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          observerRef.current?.observe(video);
          // Trigger initial play if already visible
          const rect = video.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          if (isVisible) {
            video.play().catch((error) => {
              console.log("Initial auto-play prevented:", error);
            });
          }
        }
      });
    }, 300);

    return () => {
      clearTimeout(timeoutId);
      observerRef.current?.disconnect();
    };
  }, [media, isMobile]);

  // Re-observe videos when component updates or screen size changes
  useEffect(() => {
    if (observerRef.current) {
      // Disconnect and reconnect to handle layout changes
      observerRef.current.disconnect();
      
      setTimeout(() => {
        Object.values(videoRefs.current).forEach((video) => {
          if (video) {
            observerRef.current?.observe(video);
          }
        });
      }, 100);
    }
  }, [isMobile]);

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
            className={`overflow-hidden rounded shadow-md hover:opacity-90 mb-4 ${
              item.type === "image" ? "cursor-pointer" : "cursor-pointer"
            }`}
            onClick={() => openMedia(item, index)}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt=""
                width={500}
                height={500}
                className="w-full h-auto"
                unoptimized={item.src.endsWith(".gif")}
              />
            ) : (
              <div className="relative">
                <video
                  ref={(el) => {
                    if (el) {
                      videoRefs.current[item.src] = el;
                      // Force play on mobile when element is created
                      if (isMobile) {
                        setTimeout(() => {
                          el.play().catch(() => {});
                        }, 100);
                      }
                    }
                  }}
                  muted
                  loop
                  playsInline
                  webkit-playsinline="true"
                  className="w-full h-auto rounded-md"
                  style={{ minHeight: "200px", background: "#000" }}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors pointer-events-none">
                  <Play className="w-16 h-16 text-white opacity-70" fill="white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </Masonry>

      {/* Modal - For both images and videos */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-2"
          onClick={selectedMedia.type === "image" ? closeModal : undefined}
        >
          <div
            className="relative flex items-center justify-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "image" ? (
              <animated.div
                {...bind()}
                style={{ x, y, scale, touchAction: "none" }}
                className="flex items-center justify-center max-w-full max-h-full"
              >
                <div className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center">
                  <Image
                    src={selectedMedia.src}
                    alt="selected"
                    width={1200}
                    height={1200}
                    className="object-contain w-auto h-auto max-w-[90vw] max-h-[85vh]"
                    draggable={false}
                    unoptimized={selectedMedia.src.endsWith(".gif")}
                  />
                </div>
              </animated.div>
            ) : (
              <div className="relative max-w-[95vw] max-h-[85vh] flex items-center justify-center">
                <video
                  ref={modalVideoRef}
                  controls
                  loop
                  autoPlay
                  className="max-w-[95vw] max-h-[85vh] w-auto h-auto rounded-lg"
                  playsInline
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-white bg-black/70 p-3 rounded-full hover:bg-black/90 transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Navigation Arrows - For both images and videos */}
            <button
              onClick={prevMedia}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors text-2xl z-10"
            >
              ‹
            </button>
            <button
              onClick={nextMedia}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-3 rounded-full hover:bg-black/70 transition-colors text-2xl z-10"
            >
              ›
            </button>

            {/* Counter - Shows current position among all media */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/70 text-sm bg-black/50 px-3 py-1 rounded-full z-10">
              {currentIndex !== null && `${currentIndex + 1} / ${media.length}`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryVeiw;