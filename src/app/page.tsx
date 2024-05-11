import React from "react";
import Nav from "@/components/nav";
import Header from "@/components/header";
import { homeConfig } from "@/components/config/home";
import Gallery from "@/components/gallery";
import { ExhibitItem } from "@/components/exhibit-item";
import { priceUSD } from "@/utils/price";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
// Import images
import haircutImage from "/public/assets/haircut.png";
import beardImage from "/public/assets/beard.png";
import hairAndBeardImage from "/public/assets/hairandbeard.png";
import trimImage from "/public/assets/trim.png";
import About from "@/components/about";

export const mockItems: ExhibitItem[] = [
  {
    name: "Haircut",
    price: priceUSD(44.99),
    img: haircutImage,
  },
  {
    name: "Beard",
    price: priceUSD(9.99),
    img: beardImage,
  },
  {
    name: "Haircut & Shave",
    price: priceUSD(59.99),
    img: hairAndBeardImage,
  },
  {
    name: "Beard Trim",
    price: priceUSD(5.99),
    img: trimImage,
  },
];

// Existing component code continues here...

function HomePage() {
  return (
    <div className=" ">
      <Header>
        <Nav logo nav={homeConfig.nav} />
      </Header>
      <Services />
      <Gallery items={mockItems} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
