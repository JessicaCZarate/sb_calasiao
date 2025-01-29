export default function Hero() {
  return (
    <div className="-mt-[4.5rem] relative bg-blend-multiply bg-gray-600 bg-[url('/image/sb.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative isolate px-6 py-32">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <p className="text-2lg font-medium text-pretty text-gray-300 sm:text-xl/9">
              Municipality of
            </p>
            <div className="relative inline-block isolate">
            <h1 className="text-6xl font-semibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-800 bg-clip-text sm:text-8xl z-10">
              CALASIAO
            </h1>
            <h1 className="absolute top-0 text-6xl font-semibold tracking-tight text-balance text-transparent bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text sm:text-8xl blur ">
              CALASIAO
            </h1></div>
          </div>
        </div>
      </div>
    </div>
  );
}
