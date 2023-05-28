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
    <div className="h-screen w-full  relative m-auto max-w-[1200px] py-24 text-white">
      <SectionTitle title="About" display={{ icon: MdEmojiPeople }} />
      <div className="text-4xl lg:text-6xl">
        <div className="pb-5 f">
          <p>
            Every great design begin with an even{" "}
            <span className="text-blue-400">better story</span>
          </p>
        </div>
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
