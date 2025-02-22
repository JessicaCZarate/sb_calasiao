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
      <div className="carousel carousel-vertical rounded-lg h-72 sm:h-96">
        {sortedData.slice(0, -1).map((official) => (
          <div key={official.id} className="carousel-item h-full w-auto">
            <Image
              src={official.image}
              alt={official.name}
              className="object-contain h-72 sm:h-96 w-full max-w-44 sm:max-w-none"
              width={500}
              height={800}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VImgScroll;
