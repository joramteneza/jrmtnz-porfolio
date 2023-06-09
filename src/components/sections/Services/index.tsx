"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import { ServicesCard } from "@/components/commons/ServicesCard";
import React from "react";
import { MdLocalOffer, MdOutlineIntegrationInstructions } from "react-icons/md";
import { AiFillCode, AiFillDatabase } from "react-icons/ai";
import { CgIfDesign } from "react-icons/cg";

const Services = () => {
  return (
    <div className="h-screen relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="Services" display={{ icon: MdLocalOffer }} />
      <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center">
        My <span className="text-primary-100">Specializations</span>
      </p>
      <div className="flex flex-col md:grid sm:grid-cols-2 lg:flex gap-6 px-0 sm:p-6 lg:p-10 h-full min-h-96 overflow-hidden overflow-y-auto scrollbar-hide">
        {/* <ServicesCard
          title="Web Design"
          desc="I build website go live with Framer, Webflow or WordPress"
          display={{ icon: CgIfDesign }}
        /> */}
        <ServicesCard
          title="Front End Web Development"
          desc="I build website with React JS, Next JS, JavaScript, TypeScript, HTML, and CSS."
          display={{ icon: AiFillCode }}
        />
        <ServicesCard
          title="Back End Web Development"
          desc="I am skilled with Node JS and have used Nest JS framework in a professional setting."
          display={{ icon: AiFillDatabase }}
        />
        <ServicesCard
          title="Full Stack Web Development"
          desc="API integration and reshaping of endpoints to the front end website using Node JS and React JS/Next JS."
          display={{ icon: MdOutlineIntegrationInstructions }}
        />
      </div>
    </div>
  );
};

export default Services;
