import React from "react";
import { EBG } from "@/fonts/fonts";

function Footer() {
  return (
    <footer className="text-center text-white dark-gradient-theme">
      <div className="container p-6 mx-auto">
        <div className="">
          <span className="flex items-center justify-center w-full">
            <button
              type="button"
              className="inline-block rhombus-shape bg-white border-t-2 border-b-2 border-white px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-black
           transition duration-150 ease-in-out hover:bg-black hover:text-white focus:outline-none focus:ring-0 active:text-black"
            >
              Book Now
            </button>
          </span>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="p-4 text-center bg-black bg-opacity-20 border-t border-t-slate-300">
        © 2024 Copyright
        <a className={"text-white " + EBG.className}>{" - King Of Fades"}</a>
      </div>
    </footer>
  );
}

export default Footer;
