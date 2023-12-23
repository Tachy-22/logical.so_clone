"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Production = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0.1, 0.4], ["-25%", "-45%"]);

  return (
    <motion.div
      style={{ translateX: translateY }}
      className=" absolute bottom-[20rem] left-0"
    >
      <Image
        className="translate w-[42rem]"
        src={"/herocard-1.png"}
        alt="modal"
        width={924}
        height={1038}
      />
    </motion.div>
  );
};

export default Production;
