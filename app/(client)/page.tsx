import { Hero } from "@/components";
import { Card } from "@/components";
export default function Home() {
  return (
    <>
      <Hero />
      <div className="hidden">
        <Card />
      </div>
    </>
  );
}
