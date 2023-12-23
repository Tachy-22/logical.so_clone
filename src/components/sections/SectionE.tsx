"use client";
import useOnScreen from "@/hooks/useOnScreen";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/hooks/redux";
import { updateIndex } from "@/lib/features/appSlice";

const SectionE = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useOnScreen(sectionRef);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isSectionVisible) {
      dispatch(updateIndex("3"));
    }
  
  }, [dispatch, isSectionVisible]);
  return (
    <div className="h-[100vh] relative w-full py-4">
      <span ref={sectionRef} className="h-1 absolute top-[5em]  w-full " />
      <div className="flex flex-col gap-2 px-[1rem] ">
        {" "}
        <h1 className="text-center  md:text-7xl text-3xl font-bold uppercase">
          Build With AI
        </h1>
        <p className="text-center text-xl md:text-2xl">
          AI teammates can write, test, and deploy code on their own.
        </p>
      </div>
    </div>
  );
};

export default SectionE;
