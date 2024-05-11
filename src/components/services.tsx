"use client";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import { EBG } from "@/fonts/fonts";

import cn from "classnames";

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    console.log("ran");
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.intersectionRatio >= 0.8) {
          setIsVisible(true);
        }
      },
      {
        threshold: [0.8],
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, [titleRef]);

  return (
    <div className="Title flex flex-row relative border-0" ref={titleRef}>
      <div
        className={cn(
          "screener dark-gradient-theme w-full h-full absolute transition duration-[2s] z-10",
          {
            "-translate-x-full": !isVisible,
          }
        )}
      ></div>
      <div
        className={
          "Title_container text-white h-fit z-20 py-20 text-center flex-1 m-auto md:max-w-[50vw] max-w-[75vw] " +
          EBG
        }
      >
        <h1 className="TC_header font-medium text-5xl ">Our Services</h1>
      </div>
    </div>
  );
}

export default Services;
