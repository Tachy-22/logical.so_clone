"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const TypeUi = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0.1, 0.4], ["20%", "100%"]);

  return (
    <motion.div
      style={{ translateX: translateX }}
      className=" absolute -bottom-[6rem] right-0"
    >
      <Image
        className="translate w-[25rem]"
        src={"/herocard-4.png"}
        alt="modal"
        width={924}
        height={1038}
      />
    </motion.div>
  );
};

export default TypeUi;
