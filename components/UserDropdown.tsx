"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen(!open);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 transition"
      >
        <span className="text-sm font-medium text-gray-700">Contact</span>
        <ChevronDown
          className={`w-4 text-gray-700 h-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-3 w-56 bg-white/80 backdrop-blur-xl border shadow-lg rounded-xl z-50"
          >
            <div className="flex flex-col p-2 items-start">
   

              {/* WhatsApp */}
              <Link
                href="https://wa.me/2349161637046"
                target="_blank"
                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                <Image
                  src="/wa1.png"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                />
                <span className="text-sm text-gray-700">WhatsApp</span>
              </Link>

              {/* Email */}
              <Link
                href="mailto:yourbrand@email.com"
                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                <Image src="/e1.png" alt="Email" width={40} height={40} />
                         <span className="text-sm text-gray-700">Email</span>
              </Link>

              {/* Call */}
              <Link
                          href="tel:+2349161637046"

                className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-300 transition"
              >
                <Image src="/call.png" alt="Email" width={40} height={40} />
                         <span className="text-sm text-gray-700">call</span>
              </Link>

              {/* more */}
              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-3 px-3 py-2  rounded-lg hover:bg-gray-300 transition"
              >
                <span className="text-sm text-gray-600">More</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
