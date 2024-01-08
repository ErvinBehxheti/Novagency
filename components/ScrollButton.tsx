"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(scrollY.get() > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <a
      className={
        showScrollButton
          ? "fixed md:bottom-20 md:right-20 bottom-5 right-5"
          : "hidden"
      }
      href="#top"
    >
      <motion.button
        className="bg-blue-500 p-2 flex justify-center items-center rounded"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 1, ease: "circInOut", repeat: Infinity }}
      >
        <Image
          src="/up-arrow.svg"
          width={30}
          height={30}
          alt={"up-arrow"}
          className="text-white"
        />
      </motion.button>
    </a>
  );
};

export default ScrollButton;
