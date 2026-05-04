import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Belief from "./components/Belief";
import Pillars from "./components/Pillars";
import Programs from "./components/Programs";
import Impact from "./components/Impact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <Hero />
      <Belief />
      <Pillars />
      <Programs />
      <Impact />
      <CTA />
      <Footer />
    </>
  );
}
