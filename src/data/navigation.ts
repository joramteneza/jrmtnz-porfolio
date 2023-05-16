import React from "react";
import { AiFillHome, AiFillMail } from "react-icons/ai";
import { MdEmojiPeople } from "react-icons/md";
import { SiHtmlacademy } from "react-icons/si";
import { MdLocalOffer } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { FaShapes } from "react-icons/fa";

interface Navigation {
  link: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export const navigation: Navigation[] = [
  {
    link: "/#introduction",
    icon: AiFillHome,
  },
  {
    link: "/#about",
    icon: MdEmojiPeople,
  },
  {
    link: "/#background",
    icon: SiHtmlacademy,
  },
  {
    link: "/#services",
    icon: MdLocalOffer,
  },
  {
    link: "/#skills",
    icon: GiSkills,
  },
  {
    link: "/#projects",
    icon: FaShapes,
  },
  {
    link: "/#contact",
    icon: AiFillMail,
  },
];
