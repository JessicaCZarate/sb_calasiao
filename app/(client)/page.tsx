import Hero from "@/components/Hero";
import Card from "@/components/Card";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex flex-wrap gap-6 px-6 py-12 mx-auto max-w-7xl justify-center">
      {/* <div className="flex flex-cols-4 gap-6 px-6 py-12 mx-auto max-w-7xl sm:flex-cols-2 lg:flex-cols-3 lg:px-8"> */}
        {Array.from({ length: 9 }).map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </>
  );
}
