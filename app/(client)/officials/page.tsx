import Hero from "@/components/section/Hero";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("officials").select();

  if (error) {
    console.error("Error fetching officials:", error);
    return {
      props: { data: [] },
      revalidate: 10,
    };
  }

  const sortedData = data.sort((a, b) => a.id - b.id);

  const councilors = sortedData.filter(
    (official) => official.position.toLowerCase() === "councilor"
  );

  return (
    <section className="bg-slate-100">
      <Hero
        src="officials"
        title="Officials"
        services={false}
        subtitle="The Municipal"
      />

      <div className="w-full">
        {sortedData.map((official, index) => {
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
                    <span className="text-3xl text-center p-4 font-figlight text-black">
                      Mayor
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={500}
                      height={800}
                      className="rounded-md h-80 w-auto object-fill"
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
                    <span className="text-3xl text-center p-4 font-figlight text-black">
                      Vice Mayor
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={500}
                      height={800}
                      className="rounded-md h-80 w-auto object-fill"
                    />
                  </div>
                  <div className="divider"></div>
                </li>
              </ul>
            );
          }
        })}
        <div className="w-full">
          <h3 className="text-3xl text-center p-4 font-figlight text-black">
            Councilors
          </h3>
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
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
                      {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={500}
                      height={800}
                      className="rounded-md h-80 w-auto object-fill"
                    />
                  </div>
                  <div className="divider"></div>
                </li>
              ))}
          </ul>
        </div>

        {councilors.length % 3 === 2 && (
          <ul className="grid grid-cols-1 pt-4 md:grid-cols-2 justify-items-center">
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
                    {official.name}
                  </span>
                  <Image
                    alt={`${official.name}`}
                    src={official.image}
                    width={500}
                    height={800}
                    className="rounded-md h-80 w-auto object-fill"
                  />
                </div>
                <div className="divider"></div>
              </li>
            ))}
          </ul>
        )}

        {sortedData.map((official, index) => {
          const isLigaPresident =
            official.position.toLowerCase() === "liga president";
          const isSKPresident =
            official.position.toLowerCase() === "sk federation president";
          const isSecretary = official.position.toLowerCase() == "sb secretary";

          if (isSKPresident) {
            return (
              <ul
                key={index}
                className="flex flex-col space-y-2 relative w-full">
                <li className="flex w-full flex-col">
                  <div className="flex flex-col w-full items-center justify-center space-y-2">
                    <span className="absolute font-figmedium text-[3.2rem] leading-10 text-center w-full bottom-9 text-stone-400/40 tracking-tighter">
                      {official.position}
                    </span>
                    <span className="text-3xl text-center p-4 font-figlight text-black">
                      SK Federation President
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={500}
                      height={800}
                      className="rounded-md h-80 w-auto object-fill"
                    />
                  </div>
                  <div className="divider"></div>
                </li>
              </ul>
            );
          } else if (isLigaPresident) {
            return (
              <ul
                key={index}
                className="flex flex-col space-y-2 relative w-full">
                <li className="flex w-full flex-col">
                  <div className="flex flex-col w-full items-center justify-center space-y-2">
                    <span className="absolute font-figmedium text-[3.2rem] leading-10 text-center w-full bottom-9 text-stone-400/40 tracking-tighter">
                      {official.position}
                    </span>
                    <span className="text-3xl text-center p-4 font-figlight text-black">
                      Liga President
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={500}
                      height={800}
                      className="rounded-md h-80 w-auto object-fill"
                    />
                  </div>
                  <div className="divider"></div>
                </li>
              </ul>
            );
          } else if (isSecretary) {
            return (
              <ul
                key={index}
                className="flex flex-col space-y-2 relative w-full">
                <li className="flex w-full flex-col">
                  <div className="flex flex-col w-full items-center justify-center space-y-2">
                    <span className="absolute font-figmedium text-[3.2rem] leading-10 text-center w-full bottom-9 text-stone-400/40 tracking-tighter">
                      {official.position}
                    </span>
                    <span className="text-3xl text-center p-4 font-figlight text-black">
                      SB Secretary
                    </span>
                    <span className="text-left font-figsemibold break-words text-sm text-black">
                      {official.name}
                    </span>
                    <Image
                      alt={`${official.name}`}
                      src={official.image}
                      width={500}
                      height={800}
                      className="rounded-md h-80 w-auto object-fill"
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
