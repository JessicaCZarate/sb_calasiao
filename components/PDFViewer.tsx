"use client";
import React from "react";

interface PDFViewerProps {
  pdf_preview: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdf_preview }) => {
  return (
    <div className="w-full h-screen">
      <iframe src={pdf_preview} width="100%" height="100%" />
    </div>
  );
};

export default PDFViewer;
