import React, { useEffect } from "react";
import Contact from "./Contact";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import Lenis from "@studio-freight/lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Blogs />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
