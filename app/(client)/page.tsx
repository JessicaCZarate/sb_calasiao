import Hero from "@/components/section/Hero";
import Officials from "@/components/section/Officials";
export default function Home() {
  return (
    <>
      <Hero
        src="default"
        title="Calasiao"
        subtitle="Municipality of"
        services={true}
      />
      <Officials />
    </>
  );
}
