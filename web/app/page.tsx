import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import WorldSwitch from "@/components/WorldSwitch";
import DesignWorld from "@/components/DesignWorld";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Toasts from "@/components/Toasts";
import Animations from "@/components/Animations";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WorldSwitch />
        <DesignWorld />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toasts />
      <Animations />
    </>
  );
}
