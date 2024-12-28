import React from 'react';

export const SideBar = () => {

  // Define event handler functions
  const toTop = () => {
    // Implement scrolling or navigation functionality
    console.log("Going to About Me section");
  };

  const toExperience = () => {
    console.log("Going to Experience section");
  };

  const toReviews = () => {
    console.log("Going to Reviews section");
  };

  return (
    <div className="w-2/12 h-screen bg-black fixed text-white">
      <div className="text-4xl m-5">STI</div>

      <div className="font-bold m-10 flex flex-col">
        <button className="mt-5 text-left" onClick={toTop}>About Me</button>
        <button className="mt-5 text-left" onClick={toExperience}>Experience</button>
        <button className="mt-5 text-left" onClick={toReviews}>Reviews</button>
      </div>
    </div>
  );
};
