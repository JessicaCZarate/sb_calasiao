import { officials } from "@/app/lib/officials";

export default function Page() {
  return (
    <section className="h-screen bg-slate-100">
      <h1>Municipal Officials</h1>
      {officials.map((official, index) => (
        <ul key={index} className="flex flex-col space-y-2">
          <li className="flex w-full py-1 sm:w-full">
            <div className="flex flex-col sm:flex-row w-full items-start sm:items-center">
              <span className="sm:flex-none font-figmedium text-md text-stone-400 py-1 mb-1 tracking-wider">
                {official.position}
              </span>
              <hr className="flex-grow mx-2 border-t-[0.3px] border-black/20" />
              <span className="sm:flex-none text-left font-figsemibold sm:text-base break-words text-sm pl-24 sm:pl-0 text-black">
                {official.name}
              </span>
            </div>
          </li>
        </ul>
      ))}
    </section>
  );
}
