import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import PDFViewer from "@/components/PDFViewer";
import { Button } from "@/components/shadcn/components/button";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: document, error } = await supabase
    .from("documents")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !document) {
    return notFound();
  }

  return (
    <div className="p-6 space-y-4 flex lg:flex">
      <div className="max-w-screen-sm text-center flex flex-col p-5 gap-3">
        <h1 className="text-xl text-stone-950 font-bold">{document.title}</h1>
        <p className="text-gray-800 text-md px-3">{document.heading}</p>
        <div>
          <Link href={document.pdf_download} download>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Download PDF
            </Button>
          </Link>
        </div>
      </div>
      <div className="pdf-viewer w-full bg-stone-900 p-3 pr-2 rounded">
        <PDFViewer pdf_preview={document.pdf_preview} />
      </div>
    </div>
  );
}
