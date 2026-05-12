import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Belief from "./components/Belief";
import Pillars from "./components/Pillars";
import Programs from "./components/Programs";
import Founder from "./components/Founder";
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
      <Founder />
      <Footer />
    </>
  );
}
