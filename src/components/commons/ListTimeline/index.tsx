import { Experience } from "@/data/experience";
import React from "react";

const ListTimeline = ({
  period,
  company,
  position,
  responsibilities,
}: Experience) => {
  return (
    <li className="mb-10 ml-5 sm:ml-10 h-full group">
      <div className="invisible sm:visible absolute z-0 border-l border-gray-300 h-full top-0 left-0"></div>
      <span className="absolute z-10 flex items-center justify-center w-3 h-3 lg:w-6 lg:h-6 rounded-full -left-2 lg:-left-3 ring-8 ring-gray-500 bg-white group-hover:bg-primary-100"></span>
      <time className="block mb-8 text-sm md:text-lg font-normal leading-none text-dark-100">
        {period}
      </time>
      <h3 className="flex items-center mb-1 text-xl md:text-3xl font-semibold text-white">
        {position}
      </h3>
      <h3 className="flex items-center mb-8 text-sm  md:text-base font-normal text-dark-100">
        {company}
      </h3>
      {responsibilities.map((res: string) => (
        <div className="flex gap-2">
          •
          <p className="text-sm md:text-base font-normal text-dark-100">
            {res}
          </p>
        </div>
      ))}
    </li>
  );
};

export default ListTimeline;
