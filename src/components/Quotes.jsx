import React from "react";

export const Quotes = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mr-14">
      <div className="border-t-4 border-t-brown w-56  ml-auto"> 
      </div>
      {/* Motto Text */}
      <div className="text-center ml-auto text-[#561c24] text-lg font-semibold font-['IBM Plex Sans'] leading-normal">
        Motto
      </div>
      {/* Quote Text */}
      <div className="text-right ml-auto text-black text-5xl font-bold font-['IBM Plex Sans'] uppercase leading-10">
        Progress over
        <br />
        perfection
      </div>
    </div>
  );
};
