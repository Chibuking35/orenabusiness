"use client";

import { useEffect, useRef } from "react";

type VideoProps = {
  src: string;
};

export default function Video({ src }: VideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      controls
      muted
      playsInline
      className="w-full rounded-md md:max-h-95 object-contain"
    >
      <source src={src} type="video/mp4" />
    </video>

    
  );
}