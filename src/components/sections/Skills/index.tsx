"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import { SkillsCard } from "@/components/commons/SkillsCard";
import { skills } from "@/data/skills";
import React from "react";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <div className="h-screen relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="MY SKILLS" display={{ icon: GiSkills }} />
      <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center">
        My <span className="text-primary-100">Advantages</span>
      </p>
      <div className="grid grid-cols-1 justify-center items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 px-0 sm:p-6 lg:p-10 h-full overflow-hidden overflow-y-auto scrollbar-hide">
        {skills.map(({ name, rate, icon }, i) => (
          <div key={i} className="flex flex-col justify-center items-center">
            <SkillsCard name={name} rate={rate} display={{ icon: icon }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
