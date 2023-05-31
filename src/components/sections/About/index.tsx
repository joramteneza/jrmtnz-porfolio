"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import React from "react";
import { MdEmojiPeople } from "react-icons/md";

const About = () => {
  const scrollHandle = (e: any) => {
    e.preventDefault();
    let id = e.target.id;
    let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "#about" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }); //scrolling the page
  };

  return (
    <div className="h-screen w-full  relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="About" display={{ icon: MdEmojiPeople }} />
      <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-left">
        Every great design begin with an even{" "}
        <span className="text-primary-100">better story</span>
      </p>
      <div className="text-4xl lg:text-6xl">
        <p className="text-base leading-tight text-neutral-300 lg:w-4/5">
          I am an experienced freelance designer with a track record of
          collaborating with agencies, startups, and talented professionals.
          Over the past 8 years, I have crafted digital products for diverse
          business and consumer needs. With a quiet confidence and an insatiable
          curiosity, I continuously strive to improve my design skills one
          challenge at a time.
        </p>
      </div>
    </div>
  );
};

export default About;
