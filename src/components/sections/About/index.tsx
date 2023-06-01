import SectionTitle from "@/components/commons/SectionTitle";
import Image from "next/image";
import React from "react";
import { MdEmojiPeople } from "react-icons/md";
import me1 from "../../../../public/static/images/me1.jpg";
import me2 from "../../../../public/static/images/me2.jpg";
import me3 from "../../../../public/static/images/me3.jpg";

const About = () => {
  const handleViewResume = () => {
    window.open("/static/pdf/Joram-Profile.pdf", "_blank");
  };

  return (
    <div className="h-screen w-full  relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="About" display={{ icon: MdEmojiPeople }} />
      <div className="flex flex-col lg:items-center lg:justify-center gap-6 px-0 sm:p-6 lg:p-10 h-full min-h-96 overflow-hidden overflow-y-auto scrollbar-hide">
        <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center md:text-left xl:w-[95%]">
          “In the world of development, every problem is an{" "}
          <span className="text-primary-100">opportunity</span> to create an{" "}
          <span className="text-primary-100">innovative solution.</span>”
        </p>
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 xl:flex xl:flex-col-reverse 2xl:grid 2xl:grid-cols-2">
          <div className="text-4xl lg:text-6xl">
            <p className="text-sm md:text-base leading-tight text-neutral-300 xl:w-[95%] text-start sm:text-justify pb-5">
              I am an experienced Full Stack Web Developer who has worked with
              various agencies, startups, and talented professionals. I have
              extensive experience in JavaScript ES6 and TypeScript, as well as
              HTML5 and a variety of CSS libraries such as JSS, Tailwind CSS,
              Styled Components, and Sass. Additionally, I am proficient in
              several JavaScript libraries and frameworks, including React JS
              and Next JS. As my expertise and passion lie more in front-end
              development, I am particularly interested in opportunities as a
              Front-End Developer or React Developer. While my expertise
              primarily lies in front-end development, I also have experience in
              back-end development, specifically with Node JS, Nest JS, Amazon
              Web Services, Docker, and PostgreSQL.
            </p>
            <p className="text-sm md:text-base leading-tight text-neutral-300 xl:w-[95%] ttext-start sm:text-justify pb-5">
              With a solid track record of 4 years as a developer, I approach my
              work with quiet confidence and an insatiable curiosity, constantly
              seeking to enhance my web development skills through tackling new
              challenges. My dedication to continuous improvement ensures that I
              consistently deliver high-quality results in web development.
            </p>
            <div className="w-full flex items-center justify-center sm:justify-start">
              <button
                className="bg-primary-100 text-sm text-dark-900  hover:bg-dark-900 hover:text-primary-100 hover:border hover:border-primary-100 font-medium py-3 px-6 rounded-full"
                onClick={handleViewResume}
              >
                Here's my Resume
              </button>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-7 h-28 lg:h-full xl:h-28 2xl:h-full 2xl:w-full relative xl:w-[95%] lg:mx-10 xl:mx-0 2xl:mx-10">
            <Image
              className="lg:absolute xl:static 2xl:absolute top-6 left-6 rounded-full h-[85%] w-[85%] z-20 transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={me1}
              alt="me 1"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Image
              className="lg:absolute xl:static 2xl:absolute top-10 left-10 rounded-full h-[85%] w-[85%] z-10 hover:z-30 transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={me2}
              alt="me 2"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Image
              className="lg:absolute xl:static 2xl:absolute top-14 left-14 rounded-full h-[85%] w-[85%] hover:z-30 transition-transform duration-300 ease-in-out transform-gpu hover:scale-105"
              src={me3}
              alt="me 3"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
