"use client";
import SectionTitle from "@/components/commons/SectionTitle";
import React from "react";
import { FaShapes } from "react-icons/fa";
import ticketnation from "../../../../public/static/images/ticketnation.jpg";
import altev from "../../../../public/static/images/altev.jpg";
import pahiram from "../../../../public/static/images/pahiram.jpg";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="h-screen relative m-auto max-w-[1200px] py-28 text-white">
      <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center">
        Featured <span className="text-primary-100">Projects</span>
      </p>
      <SectionTitle title="Projects" display={{ icon: FaShapes }} />
      <div className="flex flex-col gap-6 px-0 sm:p-6 lg:p-10 h-full min-h-96 overflow-hidden overflow-y-auto scrollbar-hide">
        <div className="group flex flex-col gap-5 g w-full">
          <div className="relative">
            <Image
              className="rounded-3xl w-full h-[600px] opacity-60 hover:opacity-100"
              src={ticketnation}
              alt="ticketnation"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <div className="absolute invisible group-hover:visible md:invisible inset-0 flex items-start top-5 md:top-0 md:items-center justify-center">
              <Link
                href="https://www.ticketnation.ph/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-white rounded-full text-dark-900 font-medium drop-shadow-2xl shadow-dark-900 cursor-pointer animate-beat"
              >
                Visit Live
              </Link>
            </div>
            <div className="w-fit absolute grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5 gap-5 bottom-10 left-10 text-sm">
              <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                React JS
              </div>
              <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                Tailwind CSS
              </div>
              <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                TypeScript
              </div>
              <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                Next JS
              </div>
              <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                Node JS
              </div>
              <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                Nest JS
              </div>
            </div>
          </div>
          <Link
            href="https://www.ticketnation.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="group-hover:underline text-3xl"
          >
            Ticketnation Philippines
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2  gap-8">
          <div className="group flex flex-col gap-5 g w-full">
            <div className="relative">
              <Image
                className="rounded-3xl w-full h-[600px] opacity-60 hover:opacity-100"
                src={altev}
                alt="altev"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="absolute invisible group-hover:visible inset-0 flex items-start top-5 md:top-0 md:items-center xl:top-5  xl:items-start 2xl:items-center justify-center">
                <Link
                  href="https://altev.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 bg-white rounded-full text-dark-900 font-medium drop-shadow-2xl shadow-dark-900 cursor-pointer animate-beat"
                >
                  Visit Live
                </Link>
              </div>

              <div className="w-fit absolute grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-5 bottom-10 left-10 text-sm">
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  React JS
                </div>
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  Tailwind CSS
                </div>
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  TypeScript
                </div>
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  Node JS
                </div>
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  Nest JS
                </div>
              </div>
            </div>
            <Link
              href="https://altev.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:underline text-3xl"
            >
              Altev Technologies
            </Link>
          </div>
          <div className="group flex flex-col gap-5 g w-full">
            <div className="relative">
              <Image
                className="rounded-3xl w-full h-[600px] opacity-60 hover:opacity-100"
                src={pahiram}
                alt="pahiram"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              <div className="absolute invisible group-hover:visible inset-0 flex items-start top-5 md:top-0 md:items-center xl:top-5  xl:items-start 2xl:items-center justify-center">
                <Link
                  href="https://www.pahiram.ph/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 bg-white rounded-full text-dark-900 font-medium drop-shadow-2xl shadow-dark-900 cursor-pointer animate-beat"
                >
                  Visit Live
                </Link>
              </div>

              <div className="w-fit absolute grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-1  2xl:grid-cols-2 gap-5 bottom-10 left-10 text-sm">
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  React JS
                </div>
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  Tailwind CSS
                </div>
                <div className="bg-white whitespace-nowrap w-fit rounded-full group-hover:bg-dark-900 p-4 px-8 text-dark-900 group-hover:text-white font-medium ">
                  JavaScript
                </div>
              </div>
            </div>
            <Link
              href="https://www.pahiram.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="group-hover:underline text-3xl"
            >
              Pahiram.ph
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
