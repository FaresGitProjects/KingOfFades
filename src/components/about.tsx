"use client";
import React, { useEffect, useRef, useState } from "react";
import { BN, EBG } from "@/fonts/fonts";

function About() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.8 } // Trigger when 50% of the element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.disconnect();
      }
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`bg-white py-22 my-20 text-gray-900 text-center flex flex-col items-center \
      justify-center min-h-[50vh] relative overflow-hidden transition-opacity duration-1000 ${
        EBG.className
      } ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        className={`absolute text-gray-500 w-1/2 h-1/2 text-[50vh] -top-1/4 left-0 \
        text-opacity-30 select-none z-20 transition-transform duration-[1.5s] ease-in-out ${
          BN.className
        } ${isVisible ? "translate-x-0" : "-translate-x-1/4"}`}
      >
        “
      </div>
      <div
        className={`absolute text-gray-500 w-1/2 h-1/2 text-[50vh] bottom-1/4 right-0 \
        text-opacity-30 select-none z-20 transition-transform duration-[1.5s] ease-in-out ${
          BN.className
        } ${isVisible ? "translate-x-0" : "translate-x-1/4"}`}
      >
        ”
      </div>
      <div className=" py-16 md:py-10 z-10 transition-all duration-1000 delay-300 ">
        <h1
          className={`text-3xl font-bold mb-6 transition-transform duration-1000 ${
            isVisible ? "translate-y-0" : "-translate-y-10 opacity-0"
          }`}
        >
          About Our Shop
        </h1>
        <p
          className={`text-lg w-[80vw] md:w-[50vw] overflow-visible font-medium transition-transform duration-1000 ${
            isVisible ? "translate-y-0" : "translate-y-10 opacity-0"
          }`}
        >
          At our barbershop, we pride ourselves on offering a suite of premium
          grooming services tailored for the discerning gentleman. From expertly
          styled haircuts and precise beard trims to luxurious shaves, each
          service is designed to elevate your look and enhance your grooming
          experience. Whether you're seeking a sharp new haircut, a clean shave,
          or meticulous beard maintenance, our skilled barbers ensure every
          detail is perfect, providing a sophisticated and relaxing escape where
          style and comfort meet.
        </p>
      </div>
    </div>
  );
}

export default About;
