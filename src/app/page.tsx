// src/app/page.tsx
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Timeline /> 
      <Projects />
      <Contact/>
      <Footer/>
    </main>
  );
}