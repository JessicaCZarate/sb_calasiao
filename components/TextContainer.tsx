import React from "react";

interface TextContainerProps {
  map: { title: string; quote: string }[];
}

const TextContainer: React.FC<TextContainerProps> = ({ map }) => {
  return (
    <div className="grid mb-8 border border-gray-200 rounded-lg shadow md:mb-12 md:grid-cols-2 bg-white scale-90">
      {map.map((item, index) => (
        <figure
          key={index}
          className={`flex flex-col p-8 text-center bg-white border-b border-gray-200 ${
            index === 0
              ? "rounded-t-lg rounded-b-none md:rounded-l-lg md:rounded-t-none"
              : "rounded-t-none rounded-b-lg md:rounded-r-lg md:rounded-b-none"
          } md:rounded-t-none md:rounded-ss-lg md:border-e`}>
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-600 lg:mb-8">
            <h3 className="text-xl lg:text-2xl tracking-wider font-figsemibold text-gray-900 ">
              {item.title}
            </h3>
            <p className="my-4 text-black/70 lg:text-lg">{`\u201C${item.quote}\u201D`}</p>
          </blockquote>
        </figure>
      ))}
    </div>
  );
};

export default TextContainer;
