import React from "react";

const Services = () => {
  const serviceItems = [
    {
      text: "Resolutions",
      href: "/",
    },
    {
      text: "Ordinances",
      href: "/",
    },
    {
      text: "General Correspondence",
      href: "/",
    },
    {
      text: "Annual Budget",
      href: "/",
    },
  ];
  return (
    <section className="h-auto pb-12 relative justify-center items-center flex flex-col">
      <div className="divider"></div>
      <div className="absolute pointer-events-none pattern-boxes pattern-green-300 pattern-bg-white pattern-opacity-10 pattern-size-6 top-6 left-0 right-0 bottom-0"></div>
      <div className="flex text-center justify-center items-center">
        <h2 className="text-3xl sm:text-4xl tracking-wide text-black font-figmedium px-4 py-6">
          Our Services
        </h2>
      </div>
      <div className="flex flex-wrap mx-6 justify-center gap-2 max-w-7xl lg:w-full sm:mt-3">
        {serviceItems.map((serviceItem, index) => {
          return (
            <div
              key={index}
              className="group w-full block max-w-sm lg:max-w-lg p-5 sm:p-6 bg-white border border-gray-200 rounded-lg hover:bg-gradient-to-r hover:from-green-900 hover:to-lime-400 shadow">
              <h5 className="mb-1 text-lg sm:text-xl font-bold text-gray-900 group-hover:text-white tracking-wide">
                {serviceItem.text}
              </h5>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
