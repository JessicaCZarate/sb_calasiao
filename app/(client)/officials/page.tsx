import { officials } from "@/app/lib/officials";
import Image from "next/image";

export default function Page() {
  const councilors = officials.filter(
    (official) => official.position.toLowerCase() === "councilor"
  );

  return (
    <section className="bg-slate-100">
      <h1 className="text-2xl text-center p-4 font-figlight text-black">
        Municipal Officials
      </h1>
      <div className="w-full">
        {officials.map((official, index) => {
          const isMayor = official.position.toLowerCase() === "mayor";
          const isViceMayor = official.position.toLowerCase() === "vice mayor";
          if (isMayor) {
            return (
              <ul
                key={index}
                className="flex flex-col space-y-2 relative w-full">
                <li className="flex w-full flex-col">
                  <div className="flex flex-col w-full items-center justify-center space-y-2">
                    <span className="absolute font-figmedium text-8xl text-center w-full bottom-9 text-stone-400/40 tracking-tighter right-[0.3rem]">
                      {official.position}
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      MAYOR {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={100}
                      height={100}
                      className="rounded-md h-80 w-auto"
                    />
                  </div>
                  <div className="divider"></div>
                </li>
              </ul>
            );
          } else if (isViceMayor) {
            return (
              <ul
                key={index}
                className="flex flex-col space-y-2 relative w-full">
                <li className="flex w-full flex-col">
                  <div className="flex flex-col w-full items-center justify-center space-y-2">
                    <span className="absolute font-figmedium text-[3.9rem] text-center w-full bottom-9 text-stone-400/40 tracking-tighter">
                      {official.position}
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      VICE MAYOR {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={100}
                      height={100}
                      className="rounded-md h-80 w-auto"
                    />
                  </div>
                  <div className="divider"></div>
                </li>
              </ul>
            );
          }
        })}

        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2">
          {councilors
            .slice(0, councilors.length - (councilors.length % 3))
            .map((official, index) => (
              <li
                key={index}
                className="flex flex-col space-y-2 relative w-full">
                <div className="flex flex-col w-full items-center justify-center space-y-2">
                  <span className="absolute font-figmedium text-7xl text-center w-full bottom-6 text-stone-400/40 tracking-tighter">
                    {official.position}
                  </span>
                  <span className="text-left font-figsemibold break-words text-sm text-black">
                    COUN. {official.name}
                  </span>
                  <Image
                    alt={`${official.name}`}
                    src={official.image}
                    width={100}
                    height={100}
                    className="rounded-md h-80 w-auto"
                  />
                </div>
                <div className="divider"></div>
              </li>
            ))}
        </ul>

        {councilors.length % 3 === 2 && (
          <ul className="grid grid-cols-2 gap-0 justify-items-center">
            {councilors.slice(councilors.length - 2).map((official, index) => (
              <li
                key={index}
                className={`flex flex-col space-y-2 relative w-full ${
                  index === 0 ? "lg:ml-auto" : "lg:mr-auto"
                }`}>
                <div className="flex flex-col w-full items-center justify-center space-y-2">
                  <span className="absolute font-figmedium text-7xl text-center w-full bottom-6 text-stone-400/40 tracking-tighter">
                    {official.position}
                  </span>
                  <span className="text-left font-figsemibold break-words text-sm text-black">
                    COUN. {official.name}
                  </span>
                  <Image
                    alt={`${official.name}`}
                    src={official.image}
                    width={100}
                    height={100}
                    className="rounded-md h-80 w-auto"
                  />
                </div>
                <div className="divider"></div>
              </li>
            ))}
          </ul>
        )}

        {officials.map((official, index) => {
          const isMayor = official.position.toLowerCase() !== "mayor";
          const isViceMayor = official.position.toLowerCase() !== "vice mayor";
          const isCouncilor = official.position.toLowerCase() !== "councilor";

          if (isMayor && isViceMayor && isCouncilor) {
            return (
              <ul
                key={index}
                className="flex flex-col space-y-2 relative w-full">
                <li className="flex w-full flex-col">
                  <div className="flex flex-col w-full items-center justify-center space-y-2">
                    <span className="absolute font-figmedium text-[3.2rem] leading-10 text-center w-full bottom-9 text-stone-400/40 tracking-tighter">
                      {official.position}
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      HON. {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={100}
                      height={100}
                      className="rounded-md h-80 w-auto"
                    />
                  </div>
                  <div className="divider"></div>
                </li>
              </ul>
            );
          }
        })}
      </div>
    </section>
  );
}
