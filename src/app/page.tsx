"use client";
import React, { useEffect, useState } from "react";
import Navigation from "@/components/layout/NavBar";
import { sections } from "@/data/sections";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <main className="relative w-full flex">
      <div className="mx-0 sm:mx-5 xl:mx-20 h-screen snap-mandatory snap-y overflow-y-scroll scrollbar-hide w-full">
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            <div className="h-screen space-y-8 overflow-hidden">
              {section.children && <section.children />}
            </div>
          </section>
        ))}
      </div>
      <div className="xl:pl-20">
        <Navigation activeSection={activeSection} />
      </div>
    </main>
  );
}
