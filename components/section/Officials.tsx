import { officials } from "@/app/lib/officials";
import VImgScroll from "@/components/VImgScroll";

export default function Officials() {
  let firstCouncilorDetected = false;

  return (
    <section className="justify-center items-center text-center flex mb-10 flex-col">
      <div className="flex text-center justify-center items-center">
        <h2 className="text-3xl sm:text-4xl tracking-wide text-black font-figmedium px-4 py-6">
          The Officials
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-full items-center">
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
                        <span className="sm:flex-none font-figmedium text-md text-stone-400 py-1 mb-1 tracking-wider">
                          Councilors
                        </span>
                        <hr className="flex-grow mx-2 border-t-[0.3px] border-black/20" />
                        <span className="sm:flex-none font-figsemibold break-words text-sm sm:text-base pl-24 sm:pl-0 text-black">
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
                        <span className="hidden sm:flex-none font-figmedium text-md text-stone-400 py-1 mb-1 tracking-wider">
                          Councilors
                        </span>
                        <hr className="hidden sm:flex sm:flex-grow mx-2 border-t-0 border-black/20" />
                        <span className="sm:flex-none font-figsemibold break-words sm:text-base text-sm pl-24 sm:pl-0 text-black">
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
                        <span className="sm:flex-none font-figmedium text-md text-stone-400 py-1 mb-1 tracking-wider">
                          {official.position}
                        </span>
                        <hr className="flex-grow mx-2 border-t-[0.3px] border-black/20" />
                        <span className="sm:flex-none font-figsemibold sm:text-base break-words text-sm pl-24 sm:pl-0 text-black">
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
        <VImgScroll />
      </div>
    </section>
  );
}
