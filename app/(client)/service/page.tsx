"use server";

import { createClient } from "@/utils/supabase/server";
import Service from "@/components/Service";

export default async function ServicePage() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("documents").select();

  if (error) {
    console.error("Error fetching documents:", error);
    return {
      props: { documents: [] },
      revalidate: 10,
    };
  }
  return <Service documents={data} />;
}
