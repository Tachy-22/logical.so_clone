// useOnScreen.ts
import { useEffect, useState, RefObject } from "react";

type RefOrRefs = RefObject<HTMLElement> | RefObject<HTMLElement>[];

const useOnScreen = (refOrRefs: RefOrRefs): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const refs = Array.isArray(refOrRefs) ? refOrRefs : [refOrRefs];

    const observers = refs.map((ref) => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      });
      if (ref.current) {
        observer.observe(ref.current);
      }
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [refOrRefs]);

  return isIntersecting;
};

export default useOnScreen;
