"use client";
import React from "react";

interface PDFViewerProps {
  pdf_preview: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdf_preview }) => {
  return (
    <div className="pdf-container" style={{ width: "70%", height: "200vh" }}>
      <iframe
        src={pdf_preview}
        width="100%"
        height="100%"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default PDFViewer;
