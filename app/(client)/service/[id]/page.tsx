import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import PDFViewer from "@/components/PDFViewer";
import { Button } from "@/components/shadcn/components/button";
import { ExternalLink } from "lucide-react";
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
        <div className="divider"></div>
        <div className="flex flex-row justify-center w-full">
          <Link href={document.pdf_download} download>
            <Button>Download PDF</Button>
          </Link>
          <div className="divider divider-horizontal"></div>
          <Link
            href={document.pdf_link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2">
            <Button variant="outline">
              Visit Google Drive <ExternalLink className="w-4 h-4 ml-1" />
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
