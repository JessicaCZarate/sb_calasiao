import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import PDFViewer from "@/components/PDFViewer";

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

  console.log(document.pdf_link);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{document.title}</h1>
      <p className="text-gray-700">{document.heading}</p>
      <p>Year: {document.year}</p>
      <p>Priority: {document.priority}</p>
      <p>Label: {document.label}</p>
      <div className="pdf-viewer">
        <PDFViewer pdf_preview={document.pdf_preview} />
      </div>
    </div>
  );
}
