import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { forwardRef } from "react";
import { BN } from "@/fonts/fonts";

export interface ExhibitItem {
  // eventually change this and only Pick<> from DB model
  name: string;
  price: string;
  img: StaticImport;
  index?: number;
  description?: string;
  href?: string;
}

const Exhibit = forwardRef<HTMLAnchorElement, ExhibitItem>((props, ref) => {
  return (
    <a
      key={props.index}
      ref={ref}
      className="GSC_exhibit hover:cursor-pointer flex-shrink-0 overflow-clip w-full sm:w-1/2 md:w-1/3 group relative"
      onMouseEnter={(e) => e.currentTarget.classList.remove("grayscale")}
      onMouseLeave={(e) => e.currentTarget.classList.add("grayscale")}
    >
      <div
        className={
          "absolute z-10 inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white \
        p-4 transition-all scale-100 group-hover:scale-110 space-y-4 text-3xl " +
          BN.className
        }
      >
        <p>{props.name}</p>
        <p className="text-3xl">{props.price}</p>
      </div>
      <Image
        src={props.img}
        alt={"gray-scale-beard"}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        className="transition group-hover:scale-110 duration-300 grayscale group-hover:grayscale-0"
      />
    </a>
  );
});

export default Exhibit;
