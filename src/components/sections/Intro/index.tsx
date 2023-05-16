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
    window.location.href = "#learnmore" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }); //scrolling the page
  };

  return (
    <div className="h-screen relative  max-w-[1200px] flex flex-col items-center justify-center w-full pt-20 pb-40 m-auto text-center heroElem z-1">
      <SectionTitle title="Introduction" display={{ icon: AiFillHome }} />
      <p className="mb-5 text-xl">Hey, I'm Joram.</p>
      <h1 className="relative inline-block w-auto max-w-2xl mb-10 text-5xl font-bold tracking-tighter heroTitle lg:max-w-4xl md:text-6xl lg:text-7xl ">
        I enjoy <span className=" text-fun-pink">building</span> and{" "}
        <span className=" text-fun-pink">designing</span> for the web.
        <img
          className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
          style={{ animationDelay: "0.1s" }}
          src="/static/doodles/hero/html.svg"
        />
        <img
          className="sqD  w-20 top-[-90%] left-[45%] hidden sm:block"
          style={{ animationDelay: "0.1s" }}
          src="/static/doodles/hero/react.svg"
        />
        <img
          className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
          style={{ animationDelay: "0.2s" }}
          src="/static/doodles/hero/nextjs.svg"
        />
        <img
          className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-300px] lg:right-[-10px] w-[400px]"
          style={{ animationDelay: "0.3s" }}
          src="/static/doodles/hero/music.svg"
        />
        <img
          className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
          style={{ animationDelay: "0.4s" }}
          src="/static/doodles/hero/coder.svg"
        />
        <img
          className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
          style={{ animationDelay: "0.5s" }}
          src="/static/doodles/hero/js.svg"
        />
        <img
          className="sqD bottom-[-320px] right-[50%] sm:right-[45%]"
          style={{ animationDelay: "0.6s" }}
          src="/static/doodles/hero/dino.svg"
        />
        <img
          className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
          style={{ animationDelay: "0.7s" }}
          src="/static/doodles/hero/paintbrush.svg"
        />
        <img
          className="sqD squiggle-hero-pop1 top-[-120px] left-[-5%] lg:top-[-130px] lg:left-[120px]"
          src="/static/doodles/hero/pop1.svg"
        />
        <img
          className="sqD left-[-10px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
          style={{ animationDelay: "0.9s" }}
          src="/static/doodles/hero/code.svg"
        />
      </h1>

      <Link href="/#learnmore" legacyBehavior>
        <a onClick={scrollHandle}>
          <div className="px-10 py-4 text-xl font-bold transition-colors border-2 rounded-full cursor-pointer whitespace-nowrap text-fun-white border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink">
            Tell me more
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Introduction;
