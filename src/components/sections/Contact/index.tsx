"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import React from "react";
import { AiFillMail } from "react-icons/ai";

const Contact = () => {
  const scrollHandle = (e: any) => {
    e.preventDefault();
    let id = e.target.id;
    let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "#learnmore" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }); //scrolling the page
  };

  return (
    <div className="h-screen w-full relative m-auto max-w-[1200px]">
      <SectionTitle title="CONTACT" display={{ icon: AiFillMail }} />
      Let's Work Together!
    </div>
  );
};

export default Contact;
