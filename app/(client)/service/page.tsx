import { createClient } from "@/utils/supabase/server";

export default async function Documents() {
  const supabase = await createClient();
  const { data: documents } = await supabase.from("documents").select();

  return (
    <pre className="text-[10px] text-black break-words text-wrap">
      {JSON.stringify(documents, null, 2)}
    </pre>
  );
}
