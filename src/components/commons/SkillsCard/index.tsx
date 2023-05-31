import React from "react";

interface SkillsProps {
  name?: string;
  rate?: string;
  display: {
    icon?: React.ComponentType<{ className?: string }>;
  };
}

export const SkillsCard = ({ name, rate, display }: SkillsProps) => {
  return (
    <div className="flex flex-col col-span-1 min-w-fit p-5 h-fit w-fit items-center gap-3">
      <div className="flex flex-col gap-4 justify-center items-center border p-8 md:p-10 border-neutral-700 hover:border-primary-100 rounded-full">
        {display.icon && <display.icon className="text-white w-16 h-16" />}
        <p className="text-3xl text-primary-100">{rate}</p>
      </div>
      {name}
    </div>
  );
};
