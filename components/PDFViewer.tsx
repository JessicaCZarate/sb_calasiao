"use client";
import React from "react";

interface PDFViewerProps {
  pdf_preview: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdf_preview }) => {
  return (
    <div className="w-full h-screen">
      <embed
        src={pdf_preview}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default PDFViewer;
