export default function Hero() {
  return (
    <div className="relative bg-blend-multiply bg-gray-600 bg-[url('/image/sb.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative isolate px-6 py-32">
        <div className="mx-auto max-w-2xl">
          <div className="text-center items-center flex flex-col -mt-14 md:mb-10">
            <p className="text-sm sm:text-lg md:text-2xl font-figregular text-pretty text-gray-300">
              Municipality of
            </p>
            <div className="relative inline-block isolate">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-800 bg-clip-text z-10">
                CALASIAO
              </h1>
              <h1 className="absolute top-0 text-6xl sm:text-7xl md:text-8xl font-figsemibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text blur opacity-60">
                CALASIAO
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
