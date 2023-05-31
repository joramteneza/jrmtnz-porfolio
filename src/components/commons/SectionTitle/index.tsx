import { ComponentProps } from "@/types/global.types";
import React from "react";

interface SectionTitleProps extends ComponentProps {
  title?: string;
  display: {
    icon?: React.ComponentType<{ className?: string }>;
  };
}

const SectionTitle = ({ title, className, display }: SectionTitleProps) => {
  return (
    <div
      className={`absolute top-10 left-0 ${className} flex rounded-3xl border border-white p-2 px-4 gap-2 text-white items-center text-xs justify-center hover:text-primary-100 hover:border-primary-100`}
    >
      {display.icon && <display.icon />}
      {title?.toUpperCase()}
    </div>
  );
};

export default SectionTitle;
