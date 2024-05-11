import React from "react";
import cn from "classnames";
import { NavItem } from "@/types";
import Image from "next/image";
import barbershoplogo from "/public/assets/barbershoplogo.png";
import { EBG } from "@/fonts/fonts";
import "@/app/globals.css";

interface NavProps {
  nav: NavItem[];
  classNames?: string;
  logo?: boolean;
}

// function MainNav({ nav }: NavProps) {}

function Nav({ nav, classNames, logo }: NavProps) {
  return (
    <div
      className={
        classNames +
        " " +
        "Nav flex justify-between h-fit w-full pt-10 pl-5 pb-5 pr-5 z-10 font-semibold " +
        EBG.className
      }
    >
      <div className="Nav_home text-white flex-1 flex items-center text-xl">
        <button className="Nav_home z-10 relative text-left py-4 haircut ml-4">
          Home
        </button>
      </div>

      {logo && (
        <div className="Nav_container absolute pt-3 inset-0 flex-1 md:block">
          <Image
            src={barbershoplogo}
            alt="logo of the gentlemen's barbershop"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "125px",
            }}
          />
        </div>
      )}
      {/* <div className="Nav_links flex-1 shrink w-full pl-20"> */}
      <nav className="Nav_links hidden flex-1 shrink bg-transparent md:flex justify-end">
        {nav.map((navItem, index) => (
          <a
            key={index}
            href={navItem.href}
            // style={{
            //   clipPath:
            //     "polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 25% 100%, 0% 100%, 0% 25%)",
            // }}
            className={cn(
              nav.length == index + 1
                ? " flex bg-white text-black hover:bg-black hover:text-white \
                hover:cursor-pointer hover:border-white hover:border-solid hover:border-y px-3 transition duration-300 rhombus-shape "
                : " text-white mr-5 lg:flex haircut hidden",
              " text-left relative text-xl"
            )}
          >
            <button>{navItem.title}</button>
          </a>
        ))}
      </nav>
      {/* </div> */}

      <div className="Nav_hamburger flex-1 border text-right md:hidden text-white">
        ===
      </div>
    </div>
  );
}

export default Nav;
