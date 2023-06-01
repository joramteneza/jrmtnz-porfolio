"use client";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { socials } from "@/data/socials";
import { Item } from "../../commons/ItemCard";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import MyPortrait from "@/components/commons/MyPortrait";

interface ProfileCardProps {
  className: string;
}

const ProfileCard = ({ className }: ProfileCardProps) => {
  const isHeightMax = useMediaQuery({
    query: "(min-height: 680px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <div className={`${className} flex items-center justify-center`}>
      <div className="w-full py-2 min-w-[350px] xl:w-[350px] p-3 px-5 xl:px-3">
        <div className="h-full w-full border border-white rounded-3xl p-5 flex flex-col justify-between">
          <div className="">
            <MyPortrait className="" />
            <div className="flex flex-col items-center text-white justify-center mb-5">
              <span className="text-xl font-semibold">
                {/* <Typical
                  steps={[
                    "Freelancer.",
                    1500,
                    "Full Stack Developer.",
                    1500,
                    "Front-end Developer.",
                    1500,
                    "Back-end Developer.",
                    1500,
                  ]}
                  loop={Infinity}
                  wrapper="h1"
                /> */}
                Full Stack Developer
              </span>
              <span className="text-lg">Based in Makati City, PH</span>
            </div>
            <div
              className={`flex items-start justify-center gap-4 ${
                !isHeightMax ? "pb-5" : ""
              }`}
            >
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  title={social.title}
                  className="flex text-white hover:text-primary-100 rounded-full border-white border w-10 h-10 hover:border-primary-100 items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon && <social.icon className={social.className} />}
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`my-5 mb-1 p-2 h-full flex justify-center ${
              !isHeightMax && "hidden"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-5 items-center ">
              {isDesktop ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    y: -10,
                    x: 8,
                    opacity: 1,
                    scale: 0.9,
                  }}
                  transition={{
                    delay: 1.3,
                    duration: 0.5,
                  }}
                >
                  <Item title="3+" desc="years of experience" />
                </motion.div>
              ) : (
                <Item title="3+" desc="years of experience" />
              )}
              {isDesktop ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    y: -10,
                    x: 8,
                    opacity: 1,
                    scale: 0.9,
                  }}
                  transition={{
                    delay: 1.3,
                    duration: 0.5,
                  }}
                >
                  <Item title="6+" desc="projects completed" />
                </motion.div>
              ) : (
                <Item title="6+" desc="projects completed" />
              )}
            </div>
          </div>
          <div className="flex justify-center items-center w-full pb-3">
            <Link
              href=""
              className="p-3 px-10 flex w-fit gap-1 items-center font-normal rounded-full text-sm bg-primary-100 hover:bg-dark-900 hover:text-primary-100 hover:border hover:border-primary-100 mt-5 lg:mt-0"
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
