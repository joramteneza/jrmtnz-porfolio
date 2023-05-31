"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import { SkillsCard } from "@/components/commons/SkillsCard";
import React from "react";
import { FaReact } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { SiNextdotjs } from "react-icons/si";

const Skills = () => {
  return (
    <div className="h-screen relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="MY SKILLS" display={{ icon: GiSkills }} />
      <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4 px-0 sm:p-6 lg:p-10 h-full overflow-hidden overflow-y-auto scrollbar-hide">
        <div className="flex flex-col justify-center items-center">
          <SkillsCard title="React JS" rate="90%" display={{ icon: FaReact }} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Next JS"
            rate="90%"
            display={{ icon: SiNextdotjs }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <SkillsCard
            title="Web Design"
            rate="90%"
            display={{ icon: FaReact }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
