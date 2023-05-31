"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";

const Introduction = () => {
  const scrollHandle = (e: any) => {
    e.preventDefault();
    let id = e.target.id;
    let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "#about" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }); //scrolling the page
  };

  return (
    <div className="h-screen relative max-w-[1200px] flex flex-col items-center justify-center w-full py-20 m-auto text-center heroElem z-1">
      <SectionTitle title="Introduction" display={{ icon: AiFillHome }} />
      <p className="mb-5 text-xl text-white">Hey, I'm Joram.</p>
      <h1 className="relative inline-block w-auto max-w-2xl mb-10 text-3xl tracking-tighter heroTitle lg:max-w-4xl md:text-5xl lg:text-6xl text-white">
        I am <span className="text-primary-100">passionate</span> and{" "}
        <span className="text-primary-100">skilled</span> in{" "}
        <span className="text-primary-100">building</span> and{" "}
        <span className="text-primary-100">designing</span> impactful online
        experiences.
      </h1>

      <Link href="/#about" legacyBehavior>
        <a onClick={scrollHandle}>
          <div className="px-6 py-2 lg:px-10 lg:py-4 text-xl transition-colors border-2 rounded-full cursor-pointer whitespace-nowrap text-white border-white bg-bg hover:bg-primary-100 hover:text-white hover:border-primary-100">
            Tell me more
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Introduction;
