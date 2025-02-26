import React from "react";

const Services = () => {
  const serviceItems = [
    {
      text: "Resolutions",
      href: "/service",
      description:
        "A resolution is an official statement or decision made by the municipal council. It is used to express support, approve agreements, or set policies but does not create enforceable laws.",
    },
    {
      text: "Ordinances",
      href: "/service",
      description:
        "An ordinance is a local law passed by the municipal council that must be followed within Calasiao. It is legally binding and enforceable by local authorities.",
    },
  ];
  return (
    <section className="h-auto pb-12 relative justify-center items-center flex flex-col">
      <div className="divider"></div>
      <div className="absolute pointer-events-none pattern-boxes pattern-green-300 pattern-bg-white pattern-opacity-5 pattern-size-6 top-6 left-0 right-0 bottom-0"></div>
      <div className="flex text-center justify-center items-center">
        <h2 className="text-3xl sm:text-4xl tracking-wide text-black font-figmedium px-4 py-6">
          Our Services
        </h2>
      </div>
      <div className="flex flex-wrap mx-6 justify-center gap-5 max-w-7xl lg:w-full sm:mt-3">
        {serviceItems.map((serviceItem, index) => {
          return (
            <div
              key={index}
              className="group w-full h-72 block max-w-md p-5 sm:p-6 bg-white hover:bg-yellow-300 border border-gray-200 rounded-lg hover:scale-[1.02]  shadow text-center">
              <h5 className="mb-1 text-lg sm:text-xl font-figsemibold text-gray-800 tracking-wider">
                {serviceItem.text}
              </h5>
              <div className="divider"></div>
              <p className="text-sm sm:text-base text-gray-600 mt-3">
                {`\u201C${serviceItem.description}\u201D`}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
