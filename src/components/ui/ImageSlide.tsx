"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";

const Images = [
  "/index.png",
  "/collections.png",
  "/apis.png",
  "/functions.png",
];

const ImageSlide = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.25], ["50%", "100%"]);
  const translateY = useTransform(scrollYProgress, [0, 0.25], ["20%", "0%"]);
  const Index = useAppSelector((state) => state.app.index);
  const dispatch = useAppDispatch();

  // const observer = new IntersectionObserver();

  const [imageItem, setImageItem] = useState<string>("0");

  useEffect(() => {
    setImageItem(Index);
  }, [Index]);


  return (
    <motion.div
      style={{ scale: scale, translateY: translateY }}
      className=" w-[100%] fixed bottom-0 z-40 origin-bottom-left"
    >
      {Images.map((image, index) => {
        const imageOnDisplay = imageItem;
        // console.log(imageOnDisplay, index.toString());
        return (
          <Image
            key={index}
            className={`" w-full fixed bottom-0 origin-bottom-left z-40 transition-transform  duration-700 ${
              imageOnDisplay !== index.toString()
                ? "translate-y-[100%]"
                : "translate-y-0"
            } "`}
            src={image}
            alt="index"
            width={3781}
            height={1151}
          />
        );
      })}
    </motion.div>
  );
};

export default ImageSlide;
