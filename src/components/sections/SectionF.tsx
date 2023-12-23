"use client";
import useOnScreen from "@/hooks/useOnScreen";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { updateIndex } from "@/lib/features/appSlice";
import Image from "next/image";
import ContactForm from "../ui/ContactForm";

const SectionF = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useOnScreen(sectionRef);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isSectionVisible) {
      dispatch(updateIndex("-1"));
    }
  }, [dispatch, isSectionVisible]);
  return (
    <div className="max-h-[100vh] md:h-[100vh] h-[80vh]  w-full relative  flex overflow-hidden">
      <span ref={sectionRef} className="h-1 " />
      <div className="flex  xl:flex-row flex-col w-full items-center">
        {" "}
        <div className="flex flex-col xl:gap-2 w-full justify-center xl:items-start items-center pb-[2rem] xl:pb-0">
          {" "}
          <h1 className=" flex flex-row xl:flex-col  xl:text-[7rem] md:text-7xl text-3xl font-semibold capitalize px-[4rem] xl:py-[4rem]  xl:gap-0 md:gap-3 gap-1 ">
            <span className=" xl:leading-[6rem]  ">Get Early</span>
          
            <span className="xl:leading-[6rem]">Access</span>
          </h1>
          <p className="text-xl md:w-[70%] xl:text-3xl  px-[4rem] xl:text-start text-center lg:py-0 py-6">
            Sign up now to secure your place in line, and get notified when we
            launch.
          </p>
        </div>
        <Image
          className={`xl:w-[50%] md:h-full   `}
          src={`/dark-bg.jpg`}
          alt="index"
          width={1006}
          height={1964}
        />
      </div>

      <ContactForm />
    </div>
  );
};

export default SectionF;
