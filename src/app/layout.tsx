"use client";
import ProfileCard from "@/components/layout/ProfileCard";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  return (
    <html lang="en">
      <body
        className={`flex flex-col xl:flex-row px-5 bg-dark-900 ${inter.className}`}
      >
        {isDesktop ? (
          <motion.div
            initial={{
              x: -250,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 150,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <ProfileCard className="h-screen xl:w-[30%]" />
          </motion.div>
        ) : (
          <ProfileCard className="h-screen xl:w-[30%]" />
        )}
        <div className="xl:w-full h-screen">{children}</div>
      </body>
    </html>
  );
}
