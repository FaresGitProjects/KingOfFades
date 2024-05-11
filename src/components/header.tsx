import React from "react";
import { siteConfig } from "./config/site";

function Header({ children }: any) {
  return (
    <div className="header relative ">
      {/* Background with hero pattern */}
      <div className="bg-hero-pattern absolute inset-0 bg-center bg-cover z-10"></div>

      {/* Overlay that covers the background */}
      <div className="overlay absolute inset-0 bg-black bg-opacity-50 z-20"></div>

      {/* Content container placed above the overlay */}
      <div className="header_container relative z-30">
        <section className="HC_hero max-w-screen h-screen">
          {/* Children and text content are placed here, above the overlay */}
          {children}
          <div className="HC_hero_title self-center space-x-2 space-y-2 px-30 py-40 text-center text-white w-full">
            <h1 className="font-bold text-7xl tracking-3">{siteConfig.name}</h1>
            <h2 className="font-thin font-sans italic text-4xl">
              {siteConfig.description}
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Header;
