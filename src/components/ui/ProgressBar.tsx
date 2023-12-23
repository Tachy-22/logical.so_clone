"use client";

import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

const ProgressBar = () => {
  const barRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      ref={barRef}
      style={{ scaleX: scrollYProgress }}
      className="h-2 w-full bg-black rounded-r-xl sticky origin-top-left top-0 left-0 z-50 "
    />
  );
};

export default ProgressBar;
