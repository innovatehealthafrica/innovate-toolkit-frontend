import React from "react";
import Hero from "./component/hero";
import Benefit from "./component/benefit";
import About from "../about-us/page";
import Faq from "./component/faq";
import Footer from "../Footer/page";
export default function Landingpage() {
  return (
    <div>
      <Hero />
      <Benefit />
      <About />
      <Faq />
      <Footer />
      {/* Add more components here */}
    </div>
  );
}
