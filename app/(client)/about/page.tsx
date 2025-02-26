import Hero from "@/components/section/Hero";
import TextContainer from "@/components/TextContainer";
import { secretariat } from "@/app/lib/secretariat";
import Employees from "@/components/section/Employees";

import { createClient } from "@/utils/supabase/server";

export default async function Page() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("employees").select();

  if (error) {
    console.error("Error fetching emplopyees:", error);
    return {
      props: { employees: [] },
      revalidate: 10,
    };
  }

  return (
    <section>
      <Hero
        src="about"
        title="About Us"
        services={false}
        subtitle="Secretariat Services"
      />
      <TextContainer map={secretariat} />
      <Employees employees={data} />
    </section>
  );
}
