"use client";
import React, { useEffect } from "react";
import Hero from "../Hero";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAppDispatch } from "@/hooks/redux";
import { updateIndex } from "@/lib/features/appSlice";
import useOnScreen from "@/hooks/useOnScreen";
import Modal from "../ui/Modal";
import Production from "../ui/Production";
import Update from "../ui/Update";
import TypeUi from "../ui/TypeUi";

const SectionA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const translatey = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["0%", "0%", "-300%"]
  );
  const backgroundFade = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["#a8adad", "#00000000", "#00000000"]
  );
  const dispatch = useAppDispatch();
  const isSectionVisible = useOnScreen(sectionRef);

  useEffect(() => {
    if (isSectionVisible) {
      dispatch(updateIndex("0"));
    }
  }, [dispatch, isSectionVisible]);

  return (
    <motion.div
      style={{
        translateY: translatey,
        // opacity: opacityProgress,
      }}
      ref={sectionRef}
      className="h-[100vh] w-full fixed flex bg-[#e6e9ea] border "
    >
      <Hero />
      <motion.div
        style={{
          backgroundColor: backgroundFade,
          // opacity: opacityProgress,
        }}
        className="xl:w-[50%] md:flex hidden h-full relative  "
      >
        <TypeUi />
        <Production />
        <Modal />
        <Update />
      </motion.div>
    </motion.div>
  );
};

export default SectionA;
