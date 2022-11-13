import React from "react";
import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  //   Header
  SpecialMenu,
} from "./container";
import { Header } from "./container/Header/Header";

function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}

export { Home };
