import VImgScroll from "@/components/VImgScroll";
import { Official } from "@/app/lib/schema";

interface OfficialsProps {
  officials: Official[];
}
export default function Officials({ officials }: OfficialsProps) {
  let firstCouncilorDetected = false;

  return (
    <section className="justify-center items-center flex pb-10 sm:pb-10 flex-col bg-slate-100 sm:bg-slate-100">
      <div className="flex text-center justify-center items-center">
        <h2 className="text-3xl sm:text-4xl tracking-wide text-black font-figmedium px-4 py-6">
          The Officials
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row w-full">
        <div className="flex flex-col w-full items-center mb-10 lg:mb-0">
          <div className="px-6 py-2 max-w-[23rem] mx-auto sm:max-w-xl sm:w-[36rem] bg-white shadow rounded-sm">
            {officials.map((official, index) => {
              const isCouncilor =
                official.position.toLowerCase() === "councilor";

              if (isCouncilor && !firstCouncilorDetected) {
                firstCouncilorDetected = true;
                return (
                  <ul key={index} className="flex flex-col space-y-2">
                    <li className="flex w-full py-1 sm:w-full">
                      <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                        <span className="sm:flex-none font-figmedium text-stone-500 py-1 mb-1 tracking-wider">
                          Councilors
                        </span>
                        <hr className="flex-grow mx-2 border-t-[0.3px] border-black/20" />
                        <span className="sm:flex-none font-figsemibold break-words text-left text-sm sm:text-base pl-24 sm:pl-0 text-black">
                          {official.name}
                        </span>
                      </div>
                    </li>
                  </ul>
                );
              } else if (isCouncilor) {
                return (
                  <ul key={index} className="flex flex-col space-y-2">
                    <li className="flex w-full py-1 sm:w-full">
                      <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                        <span className="hidden sm:flex-none font-figmedium text-md text-stone-500 py-1 mb-1 tracking-wider">
                          Councilors
                        </span>
                        <hr className="hidden sm:flex sm:flex-grow mx-2 border-t-0 border-black/20" />
                        <span className="sm:flex-none font-figsemibold break-words sm:text-base text-sm pl-24 sm:pl-0 text-black text-left">
                          {official.name}
                        </span>
                      </div>
                    </li>
                  </ul>
                );
              } else {
                return (
                  <ul key={index} className="flex flex-col space-y-2">
                    <li className="flex w-full py-1 sm:w-full">
                      <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
                        <span className="sm:flex-none font-figmedium text-md text-stone-500 py-1 mb-1 tracking-wider">
                          {official.position}
                        </span>
                        <hr className="flex-grow mx-2 border-t-[0.3px] border-black/20" />
                        <span className="sm:flex-none text-left font-figsemibold sm:text-base break-words text-sm pl-24 sm:pl-0 text-black">
                          {official.name}
                        </span>
                      </div>
                    </li>
                  </ul>
                );
              }
            })}
          </div>
        </div>
        <VImgScroll officials={officials} />
      </div>
    </section>
  );
}
