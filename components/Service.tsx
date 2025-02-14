"use client";

import { useState, useMemo } from "react";
import createColumns from "@/components/shadcn/columns";
import { DataTable } from "@/components/shadcn/components/data-table";
import { ComboboxDemo } from "@/components/shadcn/components/combobox";
import { Document } from "@/app/lib/types/document";

interface ServiceProps {
  documents: Document[];
}

export default function Service({ documents }: ServiceProps) {
  const [selectedValue, setSelectedValue] = useState<string>("ordinance");
  const filteredDocuments = useMemo(() => {
    return documents.filter(
      (document) => document.type.toLowerCase() === selectedValue.toLowerCase()
    );
  }, [documents, selectedValue]);

  const filteredYears = useMemo(() => {
    const uniqueYears = new Set(filteredDocuments.map((doc) => doc.year));
    return Array.from(uniqueYears)
      .sort((a, b) => parseInt(a) - parseInt(b)) // Sort ascending
      .map((year) => ({ value: year, label: year }));
  }, [filteredDocuments]);

  const filteredPriorities = useMemo(() => {
    const uniquePriorities = new Set(
      filteredDocuments.map((doc) => doc.priority)
    );
    return Array.from(uniquePriorities)
      .sort((a, b) => parseInt(a) - parseInt(b)) // Sort ascending
      .map((priority) => ({ value: priority, label: priority }));
  }, [filteredDocuments]);
  const filteredLabels = useMemo(() => {
    const uniqueLabels = new Set(filteredDocuments.map((doc) => doc.label));
    return Array.from(uniqueLabels).map((label) => ({ value: label, label }));
  }, [filteredDocuments]);

  const dynamicColumns = createColumns(
    filteredYears,
    filteredPriorities,
    filteredLabels,
    documents
  );

  return (
    <>
      <div className="sm:block md:hidden hidden">
        <p>hidden sm screen</p>
      </div>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-center space-y-2">
          <div className="flex flex-col text-center justify-center items-center">
            <h2 className="text-3xl sm:text-4xl tracking-wide text-black font-figmedium">
              Our Services
            </h2>
            <p className="leading-7 text-muted-foreground text-sm">
              Here&apos;s a list of Sangguniang Bayan&apos;s Public Documents
            </p>
          </div>
        </div>
        <ComboboxDemo
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <DataTable
          data={filteredDocuments}
          columns={dynamicColumns}
          filteredYears={filteredYears}
          filteredPriorities={filteredPriorities}
        />
      </div>
    </>
  );
}
