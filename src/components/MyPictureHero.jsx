import React, { useEffect } from 'react';
import gsap from 'gsap';

export const MyPictureHero = () => {




  return (
    <div className="relative w-full h-screen flex">
      {/* Blurred Background Image */}
      <img
        className="absolute top-0 left-0 object-cover z-0 transform rotate-180 translate-x-48 w-96 "
        src="/assets/batikBG.png"
        alt="Blurred background"
      />

      {/* Centered Overlay */}
      <div className="absolute inset-0 flex justify-center items-center ">
        {/* Semi-transparent Rounded Background */}
        <div className="absolute w-96 h-96 bg-[#fff5e0]/90 rounded-full -translate-x-24 -translate-y-10" />

        {/* Foreground Image */}
        <img
          className="relative object-cover -translate-x-24 -translate-y-20 mt-2"
          src="/assets/me.png" // Corrected path for public folder assets
          alt="Foreground image"
        />
      </div>

      
    </div>
  );
};
