import Hero from "@/components/section/Hero";
import TextContainer from "@/components/TextContainer";
import { secretariat } from "@/app/lib/secretariat";

export default function Page() {
  return (
    <section>
      <Hero
        src="about"
        title="About Us"
        services={false}
        subtitle="Secretariat Services"
      />

      <TextContainer map={secretariat} />
    </section>
  );
}
