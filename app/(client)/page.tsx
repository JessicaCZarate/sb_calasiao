import Hero from "@/components/section/Hero";
import Officials from "@/components/section/Officials";
import Services from "@/components/section/Services";

import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("officials").select();

  if (error) {
    console.error("Error fetching officials:", error);
    return {
      props: { officials: [] },
      revalidate: 10,
    };
  }

  return (
    <>
      <Hero
        src="default"
        title="Calasiao"
        subtitle="Municipality of"
        services={true}
      />
      <Officials officials={data} />
      <Services />
      <div className="divider"></div>
    </>
  );
}
