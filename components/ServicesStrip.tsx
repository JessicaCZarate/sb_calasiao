import React from "react";

const ServicesStrip = () => {
  return (
    <div className="text-center font-figmedium mt-1">
      <div className="font-figregular text-sm sm:text-lg md:text-xl lg:text-2xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-60% to-slate-100">
        Providing good governance
        <br /> through{" "}
        <span className="text-yellow-300 inline-flex flex-col h-[calc(theme(fontSize.sm)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] lg:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide text-left leading-tight [&_li]:block tracking-wider">
            <li>Resolutions.</li>
            <li>Ordinances.</li>
            <li>Public Hearings.</li>
            <li aria-hidden="true">Resolutions.</li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default ServicesStrip;
