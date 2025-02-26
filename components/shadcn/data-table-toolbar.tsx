"use client";

import { Table } from "@tanstack/react-table";
import { X, Search } from "lucide-react";
// import * as XLSX from "xlsx";
import {
  Document as DocxDocument,
  Packer,
  Paragraph,
  Table as DocxTable,
  TableCell,
  TableRow,
} from "docx";
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

interface Document {
  title: string;
  heading: string;
  pdf_download: string;
  year: string;
}

export function DataTableToolbar<TData>({
  table,
  filteredYears,
  filteredPriorities,
  selectedRows,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  // const handleExportToExcel = () => {
  //   console.log("Export to Excel process started");

  //   const data = selectedRows.map((row) => {
  //     const { year, title, heading, pdf_download } = row as unknown as Document;
  //     return { year, title, heading, pdf_link: pdf_download };
  //   });

  //   const worksheet = XLSX.utils.json_to_sheet(data);
  //   const workbook = XLSX.utils.book_new();
  //   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  //   XLSX.writeFile(workbook, "export.xlsx");

  //   console.log("Export to Excel process completed");
  // };

  const handleExportToDoc = async () => {
    console.log("Export to Doc process started");

    const data = selectedRows.map((row) => {
      const { year, title, heading } = row as unknown as Document;
      return { title, heading, year };
    });

    const tableRows = data.map(
      (item) =>
        new TableRow({
          children: [
            new TableCell({
              children: [new Paragraph(item.year)],
            }),
            new TableCell({
              children: [new Paragraph(item.title)],
            }),
            new TableCell({
              children: [new Paragraph(item.heading)],
            }),
          ],
        })
    );

    const doc = new DocxDocument({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Table of Contents",
              heading: "Heading1",
            }),
            new Paragraph({
              text: "Sangguniang Bayan Public Documents",
              heading: "Heading3",
            }),
            new DocxTable({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph("Year")],
                    }),
                    new TableCell({
                      children: [new Paragraph("Title")],
                    }),
                    new TableCell({
                      children: [new Paragraph("Heading")],
                    }),
                  ],
                }),
                ...tableRows,
              ],
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "data.docx");

    console.log("Export to Doc process completed");
  };

  return (
    <div className="flex items-center justify-between pb-2 sm:py-0">
      <div className="flex flex-col md:flex-row gap-2 md:gap-0 flex-1 items-center space-x-2">
        <div className="flex flex-col sm:flex-row w-full md:w-auto gap-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Filter by title"
              value={
                (table.getColumn("title")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("title")?.setFilterValue(event.target.value)
              }
              className="h-8 w-full md:w-[150px] lg:w-[250px] bg-white pl-10"
            />
          </div>
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Filter by heading"
              value={
                (table.getColumn("heading")?.getFilterValue() as string) ?? ""
              }
              onChange={(event) =>
                table.getColumn("heading")?.setFilterValue(event.target.value)
              }
              className="h-8 w-full md:w-[150px] lg:w-[250px] bg-white pl-10"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-start items-start w-full flex-1 ">
          <div className="flex gap-2">
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
          </div>
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
      </div>
      {/* <Button className="mr-2 h-8 px-2 lg:px-3" onClick={handleExportToExcel}>
        Export to Excel
      </Button> */}
      <Button
        className="hidden md:block mr-2 h-8 px-2 lg:px-3"
        onClick={handleExportToDoc}>
        Export
      </Button>
      <DataTableViewOptions table={table} />
    </div>
  );
}
