import React from "react";

const ServicesStrip = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
      <div className="text-center">
        <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
          Trusted by the most innovative minds in
          <span className="text-indigo-500 inline-flex flex-col">
            <ul className="block text-left leading-tight [&_li]:block">
              <li>Finance</li>
              <li>Tech</li>
              <li>AI</li>
              <li>Crypto</li>
              <li>eCommerce</li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServicesStrip;
