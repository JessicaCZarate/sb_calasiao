import { officials } from "@/app/lib/officials";
import VImgScroll from "@/components/VImgScroll";

export default function Officials() {
  let firstCouncilorDetected = false;

  return (
    <>
      <section>
        <div className="text-center">
          <h2 className="text-2xl tracking-wide text-black font-figmedium px-4 py-6">
            The Officials
          </h2>
        </div>
      </section>
      <div className="flex flex-col w-fullitems-center">
        <div className="px-6 max-w-[23rem] mx-auto sm:max-w-sm">
          {officials.map((official, index) => {
            const isCouncilor = official.position.toLowerCase() === "councilor";

            if (isCouncilor && !firstCouncilorDetected) {
              firstCouncilorDetected = true;
              return (
                <ul key={index} className="flex flex-col space-y-2">
                  <li className="flex w-full py-1">
                    <div className="flex flex-col w-full items-start">
                      <span className="font-figmedium text-md text-stone-400 py-1 mb-1 tracking-wider">
                        Councilors
                      </span>
                      <span className="font-figsemibold break-words text-sm pl-24 text-black">
                        {official.name}
                      </span>
                    </div>
                  </li>
                </ul>
              );
            } else if (isCouncilor) {
              return (
                <ul key={index} className="flex flex-col space-y-2">
                  <li className="flex w-full py-1">
                    <div className="flex flex-col w-full items-start">
                      <span className="font-figsemibold break-words text-sm pl-24 text-black">
                        {official.name}
                      </span>
                    </div>
                  </li>
                </ul>
              );
            } else {
              return (
                <ul key={index} className="flex flex-col space-y-2">
                  <li className="flex w-full py-3">
                    <div className="flex flex-col w-full items-start">
                      <span className="font-figmedium text-md text-stone-400 py-1 mb-1 tracking-wider">
                        {official.position}
                      </span>
                      <span className="font-figsemibold break-words text-sm pl-24 text-black">
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
    </>
  );
}
