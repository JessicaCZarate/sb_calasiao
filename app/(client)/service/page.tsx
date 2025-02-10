import { createClient } from "@/utils/supabase/server";

export default async function Documents() {
  const supabase = await createClient();
  const { data: documents } = await supabase.from("documents").select();

  return (
    <pre className="text-xs text-black break-words">
      {JSON.stringify(documents)}
    </pre>
  );
}
