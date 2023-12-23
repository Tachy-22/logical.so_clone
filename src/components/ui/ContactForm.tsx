import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactForm = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check if the screen size is larger than a certain width
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1275); // Change 1024 to your desired width
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const transLateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isLargeScreen ? ["300%", "250%", "50%"] : ["310%", "260%", "13%"]
  );
  return (
    <div
      //  ref={ref}
      className="absolute shadow-2xl drop-shadow-2xl  flex justify-center items-center w-full h-full xl:bottom-auto -bottom-[1rem] "
    >
      <motion.form
        //  ref={ref}
        style={{ translateX: transLateX }}
        id="waitlistForm"
        className=" mx-auto divide-y  duration-700 transition-transform  md:w-[25rem] w-[20rem]  grid grid-cols-1 md:translate-x-0 -translate-x-[100%]   gap-2 bg-white rounded-xl  "
        method="post"
        target="_blank"
      >
        <div className=" py-[1rem]t px-[1.5rem] flex flex-col">
          <label className="text-sm font-semibold text-gray-060 py-3">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Cool Person"
            id="nameField"
            className=" outline-none bg-slate-100/90 rounded-lg p-[0.75rem] border"
          />
        </div>
        <div className="input py-[1rem]  px-[1.5rem] flex flex-col">
          <label className="text-sm font-semibold text-gray-060 py-3">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@cool.site"
            id="emailField"
            className="outline-none bg-slate-100/80 rounded-lg p-[0.75rem] border"
          />
        </div>
        <div className="input py-[1rem]  px-[1.5rem] flex flex-col">
          <label className="text-sm font-semibold text-gray-060 py-3">
            Role
          </label>
          <select
            id="roleField"
            name="role"
            className="outline-none border-gray-200 shadow-sm bg-slate-100 rounded-lg p-[0.75rem] border"
          >
            <option value="fullstack">Fullstack Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="frontend">Frontend Developer</option>
            <option value="designer">Designer</option>
            <option value="product">Product</option>
            <option value="founder">Founder</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="hidden" name="_gotcha" />
        <div className="flex justify-center items-center p-3">
          <input
            className="bg-black rounded-lg text-white p-4 w-[95%]"
            type="submit"
            value="Join Waitlist"
          />
        </div>
      </motion.form>
    </div>
  );
};

export default ContactForm;
