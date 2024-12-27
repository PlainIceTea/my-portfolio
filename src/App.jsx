import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function App() {
  useEffect(() => {

    const text = new SplitType(".animated-text", { types: "chars" });

    gsap.timeline()
      .fromTo(
        text.chars,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 1.5,
          ease: "power4.out",
        }
      )
      .to(
        text.chars,
        {
          y: -10,
          repeat: -1,
          yoyo: true,
          stagger: 0.1,
          duration: 0.5,
          ease: "power1.inOut",
        },
        "+=0.5" 
      );

      
    gsap.to(".animated-bg", {
      backgroundPosition: "100% 0%",
      repeat: -1,
      duration: 3,
      ease: "none",
      yoyo: true,
    });

  }, []);

  return (
    <div className="animated-bg flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 bg-[length:200%_100%] space-x-4">
      <div className="relative">
        <h1 className="animated-text text-3xl font-bold text-white">
          Under Maintenance
        </h1>
      </div>


      <div className="animated-text text-sm text-white">Portfolio Icetea</div>
    </div>
  );
}
