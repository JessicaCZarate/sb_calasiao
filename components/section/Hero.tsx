import React from "react";
import ServicesStrip from "@/components/ServicesStrip";

interface HeroProps {
  src: string;
  title: string;
  services: boolean;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ src, title, services, subtitle }) => {
  let heroClass = "";

  if (src === "default") {
    heroClass = "defaultHero";
  } else if (src === "officials") {
    heroClass = "officialHero";
  } else {
    heroClass = src;
  }

  return (
    <div
      className={`bg-blend-multiply bg-gray-600 bg-cover bg-center bg-no-repeat shadow ${heroClass}`}>
      <div className="relative isolate px-6 py-32 bg-gradient-to-b from-transparent to-99% to-slate-950 shadow">
        <div className="mx-auto max-w-2xl">
          <div
            className={`text-center items-center flex flex-col -mt-14 sm:-mt-14 ${
              !services ? "-mb-24 sm:-mb-0" : ""
            }`}>
            <p className="text-lg sm:text-xl md:text-2xl font-figsemibold text-pretty text-gray-300 tracking-wider">
              {subtitle}
            </p>
            <div className="relative inline-block isolate">
              <h1 className="text-[52px] sm:text-7xl md:text-8xl font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-800 bg-clip-text z-10">
                {title}
              </h1>
              <h1 className="absolute top-0 text-[52px] sm:text-7xl md:text-8xl font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text blur opacity-60">
                {title}
              </h1>
            </div>
            {services && <ServicesStrip />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
