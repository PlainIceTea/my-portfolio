import React from 'react';

export const LiteButton = ({ name, url }) => {
  const handleClick = () => {
    window.open(url, '_blank'); // Open the URL in a new tab
  };

  return (
    <div
      className="px-4 py-5 h-14 w-36 flex justify-center items-center relative rounded-3xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-[#e5b789] cursor-pointer"
      onClick={handleClick}
    >
      <span className="text-[#e6a564] text-xl font-bold font-['IBM Plex Sans']">
        {name}
      </span>
    </div>
  );
};
