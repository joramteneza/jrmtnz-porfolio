import Image from "next/image";
import React from "react";
import myportrait from "../../../../public/static/images/myportrait.png";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

interface MyPortraitProps {
  className?: string;
}

const MyPortrait = ({ className }: MyPortraitProps) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <div className={`${className || ""}`}>
      <div className="relative flex justify-center rounded-3xl w-full h-64 mt-5 mb-10">
        {isDesktop ? (
          <motion.div
            initial={{
              y: 20,
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              y: -35,
              opacity: 1,
              scale: 0.85,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
          >
            <Image
              className="rounded-3xl w-full"
              src={myportrait}
              alt="my-portrait"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </motion.div>
        ) : (
          <Image
            className="rounded-3xl w-full"
            src={myportrait}
            alt="my-portrait"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        )}

        <div className="absolute bottom-24 -z-10 left-0 w-full h-[80px] bg-white transform -skew-y-6" />
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[80%] h-[50px] bg-primary-100 transform -skew-y-6" />
      </div>
    </div>
  );
};

export default MyPortrait;
