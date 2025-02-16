import { notFound } from "next/navigation";
import { Document } from "@/app/lib/types/document";
import ServicePage from "../page";

export default async function Page({ params }: { params: { id: string } }) {
  const serviceComponent = await ServicePage();
  const documents = (await serviceComponent.props.documents) as Document[];

  // Find the document by ID
  const document = documents.find((doc) => doc.id.toString() === params.id);

  if (!document) {
    return notFound();
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">{document.title}</h1>
      <p className="text-gray-700">{document.heading}</p>
      <p>Year: {document.year}</p>
      <p>Priority: {document.priority}</p>
      <p>Label: {document.label}</p>
      <a
        href={document.pdf_link}
        target="_blank"
        className="text-blue-600 underline">
        View PDF
      </a>
    </div>
  );
}
