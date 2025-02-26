import React from "react";
import Image from "next/image";
import { Official } from "@/app/lib/schema";

interface OfficialsProps {
  officials: Official[];
}

const VImgScroll: React.FC<OfficialsProps> = ({ officials }) => {
  const sortedData = officials.sort((a, b) => a.id - b.id);
  return (
    <div className="flex w-full justify-center bg-[url('/image/hhall.JPG')] bg-cover bg-center bg-no-repeat shadow rounded-sm bg-blend-multiply bg-gray-500 items-center py-5 mt-4 lg:mt-0">
      <div className="carousel carousel-vertical rounded-lg h-80 sm:h-96 w-auto mx-auto sm:max-w-[15rem] max-w-[12rem]">
        {sortedData.map((official) => (
          <div key={official.id} className="carousel-item h-auto w-auto">
            <div className="relative justify-self-center w-full shadow ">
              <Image
                alt={`${official.name}`}
                src={official.image}
                width={500}
                height={800}
                className="rounded-md h-80 sm:h-96 object-fill object-center"
              />
              <div className="absolute bottom-0 left-0 text-left w-full rounded-b-md bg-gradient-to-t from-slate-800/70 to-transparent ">
                <h3 className="pl-2 text-white text-base font-figmedium">
                  {official.name}
                </h3>
                <p className="pl-2 pb-1 text-xs text-gray-300 font-figregular">
                  <i>{official.position}</i>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VImgScroll;
