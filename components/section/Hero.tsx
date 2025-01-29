import ServicesStrip from "@/components/ServicesStrip";

export default function Hero() {
  return (
    <div className="relative bg-blend-multiply bg-gray-600 bg-[url('/image/sb.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative isolate px-6 py-32 bg-gradient-to-b from-transparent to-90% to-slate-950/80">
        <div className="mx-auto max-w-2xl">
          <div className="text-center items-center flex flex-col -mt-16 md:mb-10">
            <p className="text-lg sm:text-xl md:text-2xl font-figsemibold text-pretty text-gray-300 tracking-wider">
              Municipality of
            </p>
            <div className="relative inline-block isolate">
              <h1 className="text-[52px] sm:text-7xl md:text-8xl font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-800 bg-clip-text z-10">
                CALASIAO
              </h1>
              <h1 className="absolute top-0 text-[52px] sm:text-7xl md:text-8xl font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text blur opacity-60">
                CALASIAO
              </h1>
            </div>
            <ServicesStrip />
          </div>
        </div>
      </div>
    </div>
  );
}
