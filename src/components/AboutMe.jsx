import React from 'react';
import { ExperienceCard } from './ExperienceCard';


export const AboutMe = () => {
  return (
    <div className="w-full bg-gray-100 py-12 flex pr-10">

    <div className=' w-8/12'>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-10 bg-gray-100">
      {/* Left Column */}
      <div className="flex flex-col gap-8 justify-center items-start">
        {/* Card 1 */}
        <div className="transform translate-y-52">
          <ExperienceCard
            imageSrc="/assets/brawi.png"
            text1="Brawijaya Student"
            yearsExperience="2+"
            text2="Years of learning..."
            description="Currently a second-year student at FILKOM, Universitas Brawijaya, exploring the fields of technology and innovation with a focus on self-improvement."
          />
        </div>

        {/* Card 2 */}
        <div className="transform translate-y-60">
          <ExperienceCard
              imageSrc="/assets/pngGold.svg"  // Path to the Valorant-related image (inside the public/assets folder)
              text1="Valorant Player"
              yearsExperience="3+"
              text2="Years of playing..."
              description="A passionate gamer with over 3 years of experience playing Valorant. Focused on strategy, teamwork, and improving gameplay through continuous learning and adaptation in competitive environments."
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-8 justify-center items-start">
        {/* Card 3 */}
        <div className='translate-y-20'>
          <ExperienceCard
            imageSrc="/assets/gdgc.svg"
            text1="GDSC Core Team Member"
            yearsExperience="1.5+"
            text2="Years of leadership..."
            description="As part of the GDSC core team, I honed my leadership and collaboration skills by organizing impactful events and encouraging innovation among peers."
          />
        </div>

        {/* Card 4 */}
        <div className='translate-y-36'>
          <ExperienceCard
            imageSrc="/assets/lara.png"
            text1=" Love to learn new knowledge!"
            yearsExperience="1+"
            text2="Year of learning..."
            description="I have developed several front-end projects using laravel and react, focusing on crafting interactive and user-friendly interfaces. It has been an amazing journey!"
          />
        </div>
      </div>
    </div>
    </div>
    <div className=' w-4/12 -translate-y-20'>
    <div className="container mx-auto px-6 flex justify-end">
        <div className="text-right max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">ABOUT ME</h2>
          <p className="text-sm text-gray-600 leading-relaxed text-pretty">
            I am a passionate and dedicated individual with a strong interest in web development, design, and problem-solving.
            Currently studying at <span className="font-bold">Brawijaya University</span>, I am based in <span className="font-bold">Malang</span>.
            With a focus on creating impactful projects, I aim to contribute meaningfully to the tech community.
          </p>
        </div>
      </div></div>
    </div>
  );
};
