"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import React from "react";
import { GiSkills } from "react-icons/gi";

const Skills = () => {
  return (
    <div className="h-screen w-full relative m-auto max-w-[1200px]">
      <SectionTitle title="MY SKILLS" display={{ icon: GiSkills }} />
    </div>
  );
};

export default Skills;
