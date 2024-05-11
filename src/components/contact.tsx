import { BN, EBG } from "@/fonts/fonts";
import Icon from "@mdi/react";
import { mdiFacebook, mdiInstagram } from "@mdi/js";
import React from "react";

function Contact() {
  return (
    <div className="w-full h-[75vh] relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-fixed bg-cover"
        style={{ backgroundImage: 'url("/assets/location.png")' }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <p className={"text-white text-7xl mb-8 " + BN.className}>Contact</p>
        <p
          className={"text-white text-4xl tracking-widest mb-3 " + BN.className}
        >
          (123) 456-7890
        </p>
        <p className={"text-white text-4xl  tracking-widest " + BN.className}>
          123 Main St, City
        </p>

        <div className=" text-white flex flex-row p-4 space-x-8">
          <div className=" relative group ">
            <a className=" haircut " href="">
              <Icon
                className=" group-hover:scale-95 haircut"
                path={mdiFacebook}
                title="User Profile"
                size={3}
                color="white"
              />
            </a>
          </div>
          <div className=" relative group ">
            <a className=" haircut " href="">
              <Icon
                className=" group-hover:scale-95 haircut"
                path={mdiInstagram}
                title="User Profile"
                size={3}
                color="white"
              />
            </a>
          </div>
        </div>
        <div className="flex mt-4 "></div>
      </div>
    </div>
  );
}

export default Contact;
