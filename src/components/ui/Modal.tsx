"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Modal = () => {
  const { scrollYProgress } = useScroll();
  const translateY = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "-200%"]);

  return (
    <motion.div
      style={{ translateY: translateY }}
      className=" absolute -bottom-[10rem] left-0"
    >
      <Image className="translate w-[30rem]" src={"/modal.png"} alt="modal" width={924} height={1038}/>
    </motion.div>
  );
};

export default Modal;
