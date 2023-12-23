"use client";

import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";
import useOnScreen from "@/hooks/useOnScreen";
import { updateIndex } from "@/lib/features/appSlice";
import { useEffect, useRef } from "react";

const SectionB = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionVisible = useOnScreen(sectionRef);

  // Initialize the store with the product information
  //const store = useAppStore();
  // const initialized = useRef(false);
  // if (!initialized.current) {
  //   store.dispatch(updateIndex("0"));
  //   initialized.current = true;
  // }
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSectionVisible) {
      dispatch(updateIndex("0"));
    }
    // if (isSectionVisible === false) {
    //   console.log("left sectionB");
    // //  dispatch(updateIndex("0"));
    // }
  }, [dispatch, isSectionVisible]);

  return (
    <div id="sectionB" className="h-[200vh] w-full  mt-[200vh] pt-[40rem] relative">
      <span ref={sectionRef} className="h-1 absolute -top-4  w-full" />
      <div className="flex flex-col gap-2 px-[1rem] ">
        {" "}
        <h1 className="text-center text-3xl md:text-7xl font-bold uppercase">
          Completely Visual
        </h1>
        <p className="text-center text-xl">
          Never touch the command line, from provision to production.
        </p>
      </div>
    </div>
  );
};

export default SectionB;
