"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const LogoUi = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0.1, 0.4], ["110%", "60%"]);
  const color = useTransform(
    scrollYProgress,
    [0.1, 0.2],
    ["rgb(13 148 136)", "rgb(0 0 0)"]
  );

  return (
    <div className="p-[4rem]">
      <motion.div
        style={{ scale: translateY, color: color }}
        className=" p-[3.5rem] px-[2rem]  origin-left fixed top-[0rem] left-0 z-50  text-5xl font-bold"
      >
        Logical
      </motion.div>
    </div>
  );
};

export default LogoUi;
