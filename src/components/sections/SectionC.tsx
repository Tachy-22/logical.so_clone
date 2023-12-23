"use client";
import useOnScreen from "@/hooks/useOnScreen";

import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";
import { updateIndex } from "@/lib/features/appSlice";

const SectionC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useOnScreen(sectionRef);

  const Index = useAppSelector((state) => state.app.index);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSectionVisible) {
      dispatch(updateIndex("1"));
      console.log("enter sectionC");
    }
    if (isSectionVisible === false) {
      //  dispatch(updateIndex("0"));
      console.log("left sectionC");
    }
  }, [Index, dispatch, isSectionVisible]);
  return (
    <div className="h-[100vh] w-full py-4  relative">
      <span ref={sectionRef} className="h-1 absolute -top-4 w-full" />
      <div className="flex flex-col gap-2 px-[1rem]">
        {" "}
        <h1 className="text-center md:text-7xl text-3xl font-bold uppercase">
          Full Stack
        </h1>
        <p className="text-center md:text-2xl text-xl">
          Never manage infrastructure again. One click gets you: a database,
          APIs, deployments, hosting, etc.
        </p>
      </div>
    </div>
  );
};

export default SectionC;
