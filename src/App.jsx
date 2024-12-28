import React from "react";
import { SideBar } from "./components/SideBar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Quotes } from "./components/Quotes";

export default function App() {
  return (
    <div>
      <SideBar />

    <div className=" w-10/12 ml-auto">


    <Hero />

    <div className="mt-20 h-screen "> 

    <AboutMe />

    </div>

    <div className="flex items-center h-screen">

    <div className="ml-auto">
    <Quotes />
    </div>

    </div>
    </div>


    </div>
  );
}
