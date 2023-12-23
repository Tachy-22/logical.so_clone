"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Update = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  return (
    <motion.div
      style={{ translateY: translateY }}
      className=" absolute -top-[7rem] left-0"
    >
      <Image className="translate w-[75%] mx-auto" src={"/herocard-3.png"} alt="modal" width={924} height={1038}/>
    </motion.div>
  );
};

export default Update;
