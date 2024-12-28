import React from 'react';

export const ExperienceCard = ({ 
  imageSrc, 
  text1, 
  yearsExperience, 
  text2, 
  description 
}) => {
  return (
    <div className="w-96 h-60 relative">
      {/* Card Background */}
      <div className="w-96 h-60 left-0 top-0 absolute rounded-2xl shadow-[0px_4px_14.6px_2px_rgba(229,183,137,1)] border border-white" />

      {/* Circular Image */}
      <div className="w-16 h-16 left-[23px] top-[26px] absolute  overflow-hidden">
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        )}
      </div>

      {/* Years of Experience */}
      <div className="w-48 h-12 left-[132px] top-[38px] absolute justify-start items-center gap-3 inline-flex">
        <div className="text-center text-[#561c24] text-5xl font-bold font-['IBM Plex Sans'] uppercase leading-10">
          {yearsExperience}
        </div>
        <div className="w-56 text-black text-lg font-bold font-['IBM Plex Sans'] leading-tight">
          {text2}
        </div>
      </div>

      {/* Description */}
      <div className="w-80 left-[33px] top-[119px] absolute">
        <span className="text-black text-sm font-normal font-['IBM Plex Sans'] leading-normal">
          {description.split(text1)[0]}
        </span>
        <span className="text-[#561c24] text-sm font-normal font-['IBM Plex Sans'] leading-normal">
          {text1}
        </span>
        <span className="text-black text-sm font-normal font-['IBM Plex Sans'] leading-normal">
          {description.split(text1)[1]}
        </span>
      </div>
    </div>
  );
};
