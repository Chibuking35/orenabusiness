"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Nav links
  const allNavLinks = [
    { name: "Home", href: "/" }, 
    { name: "What We Do", href: "/service" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  // Handle scroll show/hide (mobile only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (window.innerWidth <= 768) {
        if (currentScroll > lastScrollY && currentScroll > 50) {
          setShow(false);
        } else {
          setShow(true);
        }
        setLastScrollY(currentScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on outside click / resize
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    const handleResize = () => setMenuOpen(false);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white shadow-sm transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      } md:translate-y-0`}
    >
      <div className="flex justify-between items-center px-3 md:px-5 py-2">
        {/* Logo */}
        <div className="flex gap-1 items-baseline">
          <Image src="/logo.png" alt="orena logo" width={30} height={30} />
          <h1 className="text-xl font-semibold text-red-500">Orena</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {allNavLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              pathname.startsWith(link.href + "/");

            return (
              <div key={link.name} className="flex flex-col items-center">
                <Link
                  href={link.href}
                  className="text-black text-sm font-light"
                >
                  {link.name}
                </Link>
                {isActive && (
                  <div className="mt-0.5 w-full h-0.5 bg-red-500 rounded-full" />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu */}
        <div ref={menuWrapperRef} className="md:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-red-500"
            aria-label="toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute top-10 right-0 bg-white/70 backdrop-blur-2xl py-4 rounded flex flex-col gap-2 w-48 text-center shadow-md z-50"
              >
                {allNavLinks.map((link) => {
                  const isActive =
                    pathname === link.href ||
                    pathname.startsWith(link.href + "/");

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`py-2 text-sm ${
                        isActive ? "text-gray-400" : "text-red-500"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

