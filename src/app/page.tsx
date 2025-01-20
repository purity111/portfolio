"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import University from "@/components/University/University";
import { analytics } from "@/firebase/config";
import { getAnalytics, logEvent } from "firebase/analytics";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Home Page viewed");
  }, []);
  return (
    <>
      <Hero />
      <About />
      <University />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
