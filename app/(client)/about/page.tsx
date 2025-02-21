import Hero from "@/components/section/Hero";
import TextContainer from "@/components/TextContainer";
import { secretariat } from "@/app/lib/secretariat";
import { employee } from "@/app/lib/employees";

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
      <div>
        <pre className="text-[10px] text-black text-wrap">
          {JSON.stringify(employee, null, 2)}
        </pre>
      </div>
    </section>
  );
}
