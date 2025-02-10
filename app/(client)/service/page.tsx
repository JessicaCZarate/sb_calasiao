import { createClient } from "@/utils/supabase/server";

export default async function Instruments() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return (
    <pre className="text-sm text-black">
      {JSON.stringify(instruments, null, 2)}
    </pre>
  );
}
