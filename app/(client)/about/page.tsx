import Hero from "@/components/section/Hero";

export default function Page() {
  return (
    <section>
      <Hero
        src="about"
        title="About Us"
        services={false}
        subtitle="Secretariat Services"
      />
      <div>
        <h2>Vision</h2>
        <p>
          A dynamic responsive and effective Sangguniang Bayan Secretariat
          guided by the Divine Providence with the firm commitment in the
          ultimate priority of the general welfare of the people og Calasiao,
          Pangasinan through quality legislation, to make Calasiao, Pangasinan
          as the best place to live, invest, work, and raise a family.
        </p>
      </div>
      <div>
        <h2>Mission</h2>
        <p>
          To ensure efficient and effective delivery of administrative and
          Secretariat services of the Sangguniang Bayan of Calasiao, Pangasinan.
        </p>
      </div>
    </section>
  );
}
