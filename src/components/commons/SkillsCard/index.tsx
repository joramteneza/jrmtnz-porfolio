import React from "react";

interface SkillsProps {
  title?: string;
  rate?: string;
  display: {
    icon?: React.ComponentType<{ className?: string }>;
  };
}

export const SkillsCard = ({ title, rate, display }: SkillsProps) => {
  return (
    <div className="flex flex-col col-span-1 min-w-fit p-5 h-fit w-fit items-center gap-3">
      <div className="flex flex-col gap-4 justify-center items-center border p-5 md:p-8 border-neutral-700 hover:border-primary-100 rounded-full">
        {display.icon && (
          <display.icon className="text-primary-100 w-20 h-20" />
        )}
        <p className="text-3xl text-primary-100">{rate}</p>
      </div>
      {title}
    </div>
  );
};
