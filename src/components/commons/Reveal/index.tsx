"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

interface FramerMotionProps {
  children: React.ReactNode;
}

const Reveal = ({ children }: FramerMotionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  if (!isDesktop) return <>{children}</>;

  return (
    <div ref={ref}>
      <motion.div initial="hidden" animate={mainControls}>
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
