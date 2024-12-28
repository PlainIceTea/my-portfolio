import React from "react";
import { SideBar } from "./components/SideBar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";

export default function App() {
  return (
    <div>
      <SideBar />

    <div className=" w-10/12 ml-auto">


    <Hero />

    <div className="mt-20">

    <AboutMe />

    </div>


    </div>


    </div>
  );
}
