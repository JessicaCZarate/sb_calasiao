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
            className={`text-center items-center flex flex-col -mt-10 -mb-16 lg:-mb-5 md:-mb-4 ${
              !services
                ? "-mb-32 -mt-[3rem] sm:-mt-[3.5rem] md:-mt-[2.5rem]"
                : ""
            }`}>
            <p className="text-lg leading-3 sm:text-xl md:text-[1.4rem] font-figsemibold text-pretty text-gray-300 tracking-wider">
              {subtitle}
            </p>
            <div className="relative inline-block isolate">
              <h1 className="text-[57px] leading-tight sm:text-7xl md:text-[5.3rem] font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-800 bg-clip-text z-10">
                {title}
              </h1>
              <h1 className="absolute top-0 leading-tight text-[57px] sm:text-7xl md:text-[5.3rem] font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text blur opacity-60">
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
