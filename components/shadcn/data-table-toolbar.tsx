/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

import { Button } from "@/components/shadcn/components/button";
import { Input } from "@/components/shadcn/components/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filteredYears: { value: string; label: string }[];
  filteredPriorities: { value: string; label: string }[];
  selectedRows: TData[];
}

export function DataTableToolbar<TData>({
  table,
  filteredYears,
  filteredPriorities,
  selectedRows,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleDownload = async () => {
    if (selectedRows.length === 1) {
      // Single file download
      const document = selectedRows[0] as any;
      const link = document.pdf_download;
      const a = document.createElement("a");
      a.href = link;
      a.download = link.split("/").pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else if (selectedRows.length > 1) {
      // Multiple files download as zip
      const zip = new JSZip();
      const folder = zip.folder("documents");

      if (folder) {
        for (const document of selectedRows) {
          const response = await fetch((document as any).pdf_download);
          const blob = await response.blob();
          folder.file((document as any).pdf_download.split("/").pop(), blob);
        }
      }

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "documents.zip");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter by title"
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] bg-white"
        />
        <Input
          placeholder="Filter by heading"
          value={(table.getColumn("heading")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("heading")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px] bg-white"
        />
        {table.getColumn("year") && filteredYears.length > 0 && (
          <DataTableFacetedFilter
            column={table.getColumn("year")}
            title="Year"
            options={filteredYears}
          />
        )}

        {table.getColumn("priority") && filteredPriorities.length > 0 && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={filteredPriorities}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3">
            Reset
            <X />
          </Button>
        )}
      </div>
      <Button className="mr-2 h-8 px-2 lg:px-3" onClick={handleDownload}>
        Download
      </Button>
      <DataTableViewOptions table={table} />
    </div>
  );
}
