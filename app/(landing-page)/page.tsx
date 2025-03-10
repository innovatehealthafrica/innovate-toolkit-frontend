import About from "./component/about";
import Benefit from "./component/benefit";
import Faq from "./component/faq";
import Hero from "./component/hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefit />
      <About />
      <Faq />
    </div>
  );
}
