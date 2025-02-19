import Hero from "@/components/section/Hero";

export default function Page() {
  return (
    <section>
      <Hero
        src="about"
        title="About Us"
        services={false}
        subtitle="Secretariat Services and Personnel"
      />
    </section>
  );
}
