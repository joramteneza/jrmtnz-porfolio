import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { RxReader } from "react-icons/rx";

interface Socials {
  link: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const socials: Socials[] = [
  {
    link: "https://www.instagram.com/kuyamongye/",
    title: "Instagram",
    icon: FaInstagram,
  },
  {
    link: "https://www.linkedin.com/in/kymngye/",
    title: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    link: "https://read.cv/kymngye",
    title: "GitHub",
    icon: FaGithub,
  },
  {
    link: "https://www.instagram.com/kuyamongye/",
    title: "Read.cv",
    icon: RxReader,
    className: "rotate-12",
  },
];
