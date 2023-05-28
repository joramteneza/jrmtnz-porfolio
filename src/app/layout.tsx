import ProfileCard from "@/components/layout/ProfileCard";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col lg:flex-row px-5 bg-neutral-900 ${inter.className}`}
      >
        <ProfileCard className="h-fit lg:h-screen lg:w-[25%] " />
        <div className="lg:w-[75%]">{children}</div>
      </body>
    </html>
  );
}
