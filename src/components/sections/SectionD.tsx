"use client";
import useOnScreen from "@/hooks/useOnScreen";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/hooks/redux";
import { updateIndex } from "@/lib/features/appSlice";

const SectionD = () => {
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
      dispatch(updateIndex("2"));
      console.log("in section D");
    }
    //  if (isSectionVisible === false) {
    //    console.log("left sectionD");
    //  }
  }, [dispatch, isSectionVisible]);
  return (
    <div className="h-[100vh] relative w-full py-4">
      <span ref={sectionRef} className="h-1 absolute -top-4  w-full" />
      <div className="flex flex-col gap-2 px-[1rem]">
        {" "}
        <h1 className="text-center  md:text-7xl text-3xl font-bold uppercase">
          Launch Faster
        </h1>
        <p className="text-center text-xl md:text-2xl">
          Logical can get systems to market in minutes instead of weeks.
        </p>
      </div>
    </div>
  );
};

export default SectionD;
