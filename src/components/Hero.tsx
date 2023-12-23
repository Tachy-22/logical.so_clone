//#a7acac

//#f8faf9;

"use client";
import React from "react";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();

  const backgroundFade = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["#f8faf9", "#e6e9ea", "#e6e9ea"]
  );
  return (
    <motion.div
      style={{
        backgroundColor: backgroundFade,
      }}
      ref={sectionRef}
      className="h-full w-full xl:w-[50%] px-[4rem] md:pt-0 pt-[10vh] justify-center  flex flex-col"
    >
      <h1 className="xl:text-[8rem] text-[3rem] md:text-[4rem] font-semibold flex-col flex  justify-center ">
        <span className="text-center xl:text-left xl:leading-[9rem] leading-[3rem]  ">
          Build Better
        </span>{" "}
        <span className="text-center xl:text-left xl:leading-[9rem] leading-[3rem] pl-4  xl:px-0">
          {" "}
          Backends
        </span>
      </h1>
      <p className="text-center md:pt-0 pt-6 xl:text-left md:text-3xl text-2xl">
        The only platform that gives AI the ability to autonomously build web
        services.
      </p>
    </motion.div>
  );
};

export default SectionA;
