import React from "react";
import { navigation } from "@/data/navigation";

interface NavigationProps {
  className?: string;
  activeSection?: string;
}

const Navigation = ({ className, activeSection }: NavigationProps) => {
  return (
    <div
      className={`${className} items-center justify-center absolute top-1/2 right-0 transform translate-y-[-50%]  hidden xl:flex`}
    >
      <div className="w-20 p-3 px-3">
        <div className="flex flex-col gap-5 items-center justify-center h-fit py-6 bg-dark-900 border border-gray-500 rounded-full ">
          {navigation.map((nav) => (
            <a
              key={nav.link}
              href={nav.link}
              className="text-white hover:text-primary-100"
            >
              {nav.icon && <nav.icon />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
