import Image from "next/image";
import React from "react";
import myportrait from "../../../../public/static/images/myportrait.png";

interface MyPortraitProps {
  className?: string;
}

const MyPortrait: React.FC<MyPortraitProps> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="relative flex justify-center rounded-3xl w-full h-72 mt-5 mb-10">
        <Image
          className="rounded-3xl w-full"
          src={myportrait}
          alt="my-portrait"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
        <div className="absolute bottom-24 -z-10 left-0 w-full h-[80px] bg-white transform -skew-y-6"></div>
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-[80%] h-[50px] bg-green-400 transform -skew-y-6"></div>
      </div>
    </div>
  );
};

export default MyPortrait;
