import React from "react";
import Image from "next/image";

interface ImageProps {
  image: {
    name: string;
    image: string;
    title: string;
  };
}

const ImageComponent: React.FC<ImageProps> = ({ image }) => {
  return (
    <div className="relative justify-self-center shadow">
      <Image
        alt={`${image.name}`}
        src={image.image}
        width={500}
        height={800}
        className="rounded-md h-80 w-auto object-fill"
      />
      <div className="absolute bottom-0 left-0 text-left w-auto rounded-b-md bg-gradient-to-t from-slate-800/70 to-transparent ">
        <h3 className="pl-2 text-white text-base font-figmedium">
          {image.name}
        </h3>
        <p className="pl-2 pb-1 text-xs text-gray-300 font-figregular">
          <i>{image.title}</i>
        </p>
      </div>
    </div>
  );
};

export default ImageComponent;
