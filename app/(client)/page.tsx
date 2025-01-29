import Hero from "@/components/section/Hero";
import Card from "@/components/Card";
import Officials from "@/components/section/Officials";
export default function Home() {
  return (
    <>
    <div className="hidden">
      <Hero />
      <Officials />
      <div className="flex flex-wrap gap-6 px-6 py-12 mx-auto max-w-7xl justify-center">
        {Array.from({ length: 9 }).map((_, index) => (
          <Card key={index} />
        ))}
        </div>
      </div>
    </>
  );
}
