"use client";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/layout/NavBar";
import { sections } from "@/data/sections";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll(".snap.snap-center");
      const windowHeight = window.innerHeight;
      let newActiveSection = "";

      sectionElements.forEach((sectionElement) => {
        const rect = sectionElement.getBoundingClientRect();
        console.log("rect", rect);
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          newActiveSection = sectionElement.id;
          console.log("sectionElement.id", sectionElement.id);
        }
      });
      console.log("sectionElements", sectionElements);

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("activeSection", activeSection);

  return (
    <main className="relative">
      <div className="mx-5 lg:mx-20 h-screen snap-mandatory snap-y overflow-y-scroll scrollbar-hide">
        {sections.map((section) => (
          <section
            key={section.id}
            className="snap snap-center"
            id={section.id}
          >
            <div className="h-screen space-y-8 overflow-hidden">
              {section.children && <section.children />}
            </div>
          </section>
        ))}
      </div>
      <Navigation activeSection={activeSection} />
    </main>
  );
}
