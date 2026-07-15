"use client";

import { motion } from "framer-motion";
import { useScrollNavbar } from "@/hooks/useScrollNavbar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Logo from "./Navbar/Logo";
import DesktopNav from "./Navbar/DesktopNav";
import MobileNav from "./Navbar/MobileNav";

export default function Navbar() {
  const isScrolled = useScrollNavbar(60);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Select responsive width for the floating state
  const widthVal = isDesktop ? "80%" : "92%";

  // Framer Motion variants interpolating visual properties smoothly during scroll
  const navVariants = {
    initial: {
      width: "100%",
      maxWidth: "100%",
      top: "0px",
      borderRadius: "0px",
      backgroundColor: "rgba(255, 255, 255, 1)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "rgba(229, 231, 235, 0.1)", // subtle separator border
      borderTopWidth: "0px",
      borderLeftWidth: "0px",
      borderRightWidth: "0px",
      boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
      backdropFilter: "blur(0px)",
    },
    scrolled: {
      width: widthVal,
      maxWidth: "1280px", // max-w-7xl limit
      top: "20px",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "rgba(229, 231, 235, 0.5)", // premium subtle border
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.03), 0 8px 10px -6px rgba(0, 0, 0, 0.03)",
      backdropFilter: "blur(24px)",
    },
  };

  return (
    <motion.nav
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
      variants={navVariants}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} // smooth easeOut
      className="fixed left-0 right-0 mx-auto z-50 h-[72px] flex items-center justify-between px-6 md:px-8"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* Brand Logo */}
      <Logo />

      {/* Navigation Links and CTA Button for Desktop */}
      <DesktopNav />

      {/* Hamburger Menu and Dropdown Drawer for Mobile */}
      <MobileNav />
    </motion.nav>
  );
}
