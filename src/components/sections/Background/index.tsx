"use client";
import ListTimeline from "@/components/commons/ListTimeline";
import SectionTitle from "@/components/commons/SectionTitle";
import experience from "@/data/experience";
import React from "react";
import { SiHtmlacademy } from "react-icons/si";
import Reveal from "@/components/commons/Reveal";

const Background = () => {
  return (
    <div className="h-screen relative m-auto max-w-[1200px] py-28 text-white">
      <SectionTitle title="Background" display={{ icon: SiHtmlacademy }} />
      <p className="text-3xl md:text-4xl lg:text-5xl pb-4 text-center">
        Education & <span className="text-primary-100">Experience</span>
      </p>
      <div className="max-w-5xl p-4 sm:p-6 lg:p-10 h-full overflow-hidden overflow-y-auto scrollbar-hide">
        <ol className="relative w-full lg:w-5/6">
          {experience.map(
            ({ period, company, position, responsibilities }, i) => (
              <React.Fragment key={i}>
                <Reveal>
                  <ListTimeline
                    period={period}
                    company={company}
                    position={position}
                    responsibilities={responsibilities}
                  />
                </Reveal>
              </React.Fragment>
            )
          )}
        </ol>
      </div>
    </div>
  );
};

export default Background;
