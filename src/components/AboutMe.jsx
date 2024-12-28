import React from 'react';

export const AboutMe = () => {
  return (
    <div className="w-full bg-gray-100 py-12 pr-10">
      <div className="container mx-auto px-6 flex justify-end">
        <div className="text-right max-w-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">ABOUT ME</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-pretty">
            I am a passionate and dedicated individual with a strong interest in web development, design, and problem-solving.
            Currently studying at <span className="font-bold">Brawijaya University</span>, I am based in <span className="font-bold">Malang</span>.
            With a focus on creating impactful projects, I aim to contribute meaningfully to the tech community.
          </p>
        </div>
      </div>
    </div>
  );
};
