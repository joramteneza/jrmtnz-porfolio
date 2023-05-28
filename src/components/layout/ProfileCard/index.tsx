"use client";
import React from "react";
import MyPortrait from "../../commons/MyPortrait";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/static/logo/logo.png";
import { socials } from "@/data/socials";
import { Item } from "../../commons/ItemCard";

interface ProfileCardProps {
  className: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ className }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <div className="w-full py-2 min-w-[350px] lg:w-[350px] p-3 px-5 lg:px-3">
        <div className="h-full w-full border border-white rounded-3xl p-5 flex flex-col justify-between">
          <div className="">
            <div className="flex text-white items-center justify-center">
              <Image
                className="mr-2 w-10 transition-transform duration-500 transform hover:rotate-360 hover:scale-75"
                src={logo}
                alt="logo"
              />
              {"Joram Teneza".split("").map((letter, index) => {
                return (
                  <span
                    key={index}
                    className="text-xl transition-all duration-500 hover:text-green-400 hover:-mt-2 hover:duration-100 click:goodbyeLetterAnim"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                );
              })}
            </div>
            <MyPortrait className="" />
            <div className="flex flex-col items-center text-white justify-center mb-5">
              <span className="text-xl">Full Stack Developer</span>
              <span className="text-lg">Based in Makati City, PH</span>
            </div>
            <div className="flex items-start justify-center gap-4">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  title={social.title}
                  className="flex text-white hover:text-green-400 rounded-full border-white border w-10 h-10 hover:border-green-400 items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon && <social.icon className={social.className} />}
                </Link>
              ))}
            </div>
          </div>
          <div className="my-5 p-2 h-full flex justify-center">
            <div className="grid sm:grid-cols-2 gap-5 items-center ">
              <Item title="3+" desc="years of experience" />
              <Item title="6+" desc="projects completed" />
            </div>
          </div>
          <div className="flex justify-center items-center w-full text-white">
            <Link
              href=""
              className="p-3 px-10 flex w-fit gap-1 items-center rounded-full text-sm bg-green-400 hover:bg-neutral-900 hover:text-green-400 hover:border hover:border-green-400 mt-5 lg:mt-0"
            >
              <AiOutlineMail size={18} /> <span>Contact me!</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
