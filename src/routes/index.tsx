import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticlesCanvas } from "@/components/ParticlesCanvas";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Tools } from "@/components/Tools";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guilherme Gosse · Desenvolvedor Web Full-Stack" },
      { name: "description", content: "React · Vue · Node.js · Laravel — soluções web em Paulínia/SP." },
    ],
  }),
  component: Index,
});

function Index() {
  const [loaded, setLoaded] = useState(false);
  useReveal();

  useEffect(() => {
    if (loaded) document.body.style.overflow = "";
    else document.body.style.overflow = "hidden";
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <CustomCursor />
      <ScrollProgress />
      <div className="holo-grid" />
      <ParticlesCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Tools />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
