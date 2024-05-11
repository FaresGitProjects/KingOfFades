"use client";
import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Services from "./services";
import Exhibit, { ExhibitItem } from "./exhibit-item";

interface GalleryProps {
  items: ExhibitItem[];
}

function Gallery({ items }: GalleryProps) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLAnchorElement>(null);

  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure the element is rendered before trying to measure it
      if (ref.current && window != undefined) {
        setWidth(ref.current.offsetWidth);
        setCurrent(0);
      }
      console.log("resize");
    }
    // Optional: Handle window resize
  }, []);

  const nextImage = () => {
    // if(window.innerWidth > 768 ) {

    // }
    // debugger;
    setCurrent(
      (current + 1) % (items.length - Math.round(window.innerWidth / width) + 1)
    ); // Loop back to the first image
  };

  const prevImage = () => {
    setCurrent((current - 1) | 0); // Loop to the last image
  };

  return (
    <div className="Gallery border border-black">
      <div className="Gallery_showcase relative overflow-clip">
        <div
          className="GS_container relative transition duration-300 flex max-h-80 min-w-screen"
          style={{
            transform: `translateX(-${width * current}px)`,
          }}
        >
          {items.map((item, index) => (
            <Exhibit
              index={index}
              ref={ref}
              key={index}
              name={item.name}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
        <button
          type="button"
          className="absolute transition text-white hover:text-black hover:bg-white
          top-1/2 -translate-y-1/2 left-5 z-10 bg-black bg-opacity-50 p-4 rhombus-shape"
          onClick={prevImage}
        >
          <span className="text-6xl">&laquo;</span>
        </button>
        <button
          type="button"
          className="absolute transition text-white hover:text-black hover:bg-white
          top-1/2 -translate-y-1/2 right-5 z-10 bg-black bg-opacity-50 p-4 rhombus-shape"
          onClick={nextImage}
        >
          <span className="text-6xl">&raquo;</span>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
