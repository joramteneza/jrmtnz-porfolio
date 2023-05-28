import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

function Page404() {
  const [num404, setNum404] = useState("0000");

  useEffect(() => {
    randomNumberText("404", setNum404);
  }, []);

  return (
    <>
      {num404 !== "0000" && (
        <div className="flex flex-col items-center justify-center w-full min-h-screen animate-fadeIn">
          <h1 className="font-bold text-white opacity-100 text-7xl">{`{ error: ${num404} }`}</h1>
          <p className="flex items-center mt-8 text-xl text-fun-gray">
            Sorry, looks like that page is missing!&nbsp;&nbsp;
            <Link href="/">
              <span className="flex-shrink w-full px-4 py-1 text-base transition-colors border cursor-pointer sm:w-auto border-fun-pink-light rounded-xl text-fun-pink-light bg-fun-pink-darkerer hover:bg-fun-pink hover:text-white">
                Return Home
              </span>
            </Link>
          </p>
        </div>
      )}
    </>
  );
}
const randomNumberText = (finalNum: string, setNumber: any) => {
  let count = 0;
  let newNum = "";
  const interval = setInterval(() => {
    count++;
    for (let i = 0; i < finalNum.length; i++) {
      newNum += Math.floor(Math.random() * 10);
    }
    setNumber(newNum);
    newNum = "";
    if (count === 20) {
      clearInterval(interval);

      setNumber("404");
    }
  }, 80);
};

export default Page404;
