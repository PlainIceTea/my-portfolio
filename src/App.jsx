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
      backgroundPosition: "200% 0%",
      repeat: -1,
      duration: 6,
      ease: "none",
      yoyo: true,
    });

  }, []);

  return (
    <div className="animated-bg flex items-center justify-center h-screen bg-gray-100 space-x-4 bg-gradient-to-r bg-[length:300%_50%] from-blue-500 to-purple-500">
      <div className="relative">
        <h1 className="animated-text text-3xl font-bold text-white">
          Under Maintenance
        </h1>
      </div>


      <div className="animated-text text-sm text-white">Portfolio Icetea</div>
    </div>
  );
}
