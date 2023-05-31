import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaDocker, FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

interface Skills {
  rate: string;
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const skills: Skills[] = [
  {
    name: "React JS",
    rate: "92%",
    icon: FaReact,
  },
  {
    name: "Next JS",
    rate: "90%",
    icon: SiNextdotjs,
  },
  {
    name: "JavaScript",
    rate: "95%",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    rate: "92%",
    icon: SiTypescript,
  },
  {
    name: "HTML",
    rate: "95%",
    icon: AiFillHtml5,
  },
  {
    name: "CSS",
    rate: "95%",
    icon: SiCss3,
  },
  {
    name: "Tailwind CSS",
    rate: "95%",
    icon: SiTailwindcss,
  },
  {
    name: "Redux",
    rate: "85%",
    icon: SiRedux,
  },
  {
    name: "Node JS",
    rate: "90%",
    icon: DiNodejs,
  },
  {
    name: "Nest JS",
    rate: "90%",
    icon: SiNestjs,
  },
  {
    name: "AWS",
    rate: "85%",
    icon: FaAws,
  },
  {
    name: "PostgreSQL",
    rate: "85%",
    icon: SiPostgresql,
  },
  {
    name: "Docker",
    rate: "88%",
    icon: FaDocker,
  },
];
