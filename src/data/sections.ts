import About from "@/components/sections/About";
import Background from "@/components/sections/Background";
import Contact from "@/components/sections/Contact";
import Introduction from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import React from "react";

interface Sections {
  id: string;
  children?: React.ComponentType<{ className?: string }>;
}

export const sections: Sections[] = [
  {
    id: "introduction",
    children: Introduction,
  },
  {
    id: "about",
    children: About,
  },
  {
    id: "background",
    children: Background,
  },
  {
    id: "services",
    children: Services,
  },
  {
    id: "skills",
    children: Skills,
  },
  {
    id: "projects",
    children: Projects,
  },
  {
    id: "contact",
    children: Contact,
  },
];
