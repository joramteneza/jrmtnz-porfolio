import React from "react";

interface ItemProps {
  title: string;
  desc: string;
}

export const Item: React.FC<ItemProps> = ({ title, desc }) => {
  return (
    <div className="flex min-w-fit max-w-fit p-5 px-10 sm:p-3 h-fit items-center justify-center bg-neutral-700 rounded-3xl">
      <span className="flex flex-row text-3xl md:text-3xl text-green-400 w-24 items-center justify-center">
        {title}
        <span className="flex text-xs text-white text-center">{desc}</span>
      </span>
    </div>
  );
};
