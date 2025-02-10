import Hero from "@/components/section/Hero";
import Officials from "@/components/section/Officials";
import Services from "@/components/section/Services";
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
      <Services />
      <div className="divider mb-10"></div>
    </>
  );
}
