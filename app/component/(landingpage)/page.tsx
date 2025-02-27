import React from "react";
import Hero from "./component/hero";
import Benefit from "./component/benefit";
import About from "./component/about";
import Faq from "./component/faq";
export default function Landingpage() {
  return (
    <div>
      <Hero />
      <Benefit />
      <About />
      <Faq />
    </div>
  );
}
