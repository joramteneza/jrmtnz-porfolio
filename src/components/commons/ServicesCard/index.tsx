import React from "react";

interface ServicesProps {
  title?: string;
  desc?: string;
  display: {
    icon?: React.ComponentType<{ className?: string }>;
  };
}

export const ServicesCard = ({ title, desc, display }: ServicesProps) => {
  return (
    <div className="flex flex-col min-w-fit p-5 md:p-10 h-full w-full justify-between border border-neutral-700 hover:border-primary-100  rounded-xl">
      <div className="grid grid-cols-6 justify-between">
        <div className="flex flex-col col-span-5 gap-3">
          <p className="flex text-primary-100 w-full text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            {title}
          </p>
          <p className="flex text-dark-100 text-base md:text-lg lg:text-xl">
            {desc}
          </p>
        </div>
        <div className="flex col-span-1 justify-end ">
          {display.icon && (
            <display.icon className="text-primary-100 w-10 h-10" />
          )}
        </div>
      </div>
    </div>
  );
};
