import React from "react";
import { LiteButton } from "./LiteButton";
import { MyPictureHero } from "./MyPictureHero";

export const Hero = () => {
  return (
    <div className="w-full flex homePart">
      <img
        className="absolute object-cover -translate-x-80 ml-16 mt-52  translate-y-42 z-[-10]"
        src="/assets/longLine.png" // Corrected path for public folder assets
        alt="Foreground image"
      />
      <div className="w-1/2 h-auto overflow-y-auto">
        <div className="container mx-auto pt-36 text-center w-max">
          <h1 className="text-6xl font-normal tracking-wider leading-tight uppercase text-gray-800 font-ibm-plex-sans">
            My <span className="ml-3"></span> name <br /> is{" "}
            <span className="ml-16"></span>{" "}
            <span className="font-bold ml-4">
              Asti <br />
            </span>
            <span className="ml-5 font-bold">Syafitri</span>
          </h1>

          <p className="text-lg">
            <span className="font-bold">Brawijaya Student</span> based in{" "}
            <span className="font-bold">Malang</span>
          </p>

          <div className="mt-10 -ml-2 flex w-full justify-between items-center">
            <LiteButton name="Contact" url="test.com" />
            <a
              href="https://www.linkedin.com/in/astisyaf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./public/assets/linkedin.png"
                alt="LinkedIn"
                className="cursor-pointer w-12 h-12"
              />
            </a>
            <a
              href="https://github.com/plainicetea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./public/assets/github.png"
                alt="GitHub"
                className="cursor-pointer w-12 h-12"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-1/2 h-auto overflow-y-auto -z-20">
        <div className="container mx-auto mt-10">
          <MyPictureHero />
        </div>
      </div>
    </div>
  );
};
