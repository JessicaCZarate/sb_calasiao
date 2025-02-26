"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "./components/badge";
import { Checkbox } from "./components/checkbox";
import { Document } from "@/app/lib/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export default function createColumns(
  years: { value: string; label: string }[],
  priorities: { value: string; label: string }[],
  labels: { value: string; label: string }[],
  documents: Document[]
): ColumnDef<Document>[] {
  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            console.log("Select all checkbox changed:", value);
            table.toggleAllPageRowsSelected(!!value);
          }}
          aria-label="Select all"
          className="translate-y-[2px] hidden md:flex"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => {
            console.log("Row checkbox changed:", row.getValue("title"), value);
            row.toggleSelected(!!value);
          }}
          aria-label="Select row"
          className="translate-y-[2px] hidden md:flex"
        />
      ),

      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" className="hidden" />
      ),
      cell: ({ row }) => (
        <div className="w-[50px] hidden">{row.getValue("id")}</div>
      ),
      enableSorting: true,
      enableHiding: false,
    },
    {
      accessorKey: "title",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Title" />
      ),
      cell: ({ row }) => {
        const label = labels.find(
          (label) => label.value === row.original.label
        );

        return (
          <div className="flex flex-col space-x-2 gap-2 -ml-5">
            <div className="flex flex-row">
              {label && (
                <Badge variant="outline" className="hidden sm:block">
                  {label.label}
                </Badge>
              )}
              <span className="max-w-[300px]  truncate font-medium">
                {row.getValue("title")}
              </span>
            </div>
            <div className="md:hidden">
              <span className="max-w-sm text-wrap truncate font-medium line-clamp-3 text-slate-500">
                {row.getValue("heading")}
              </span>
            </div>
          </div>
        );
      },
      enableSorting: true,
      enableHiding: false,
    },
    {
      accessorKey: "heading",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Heading"
          className="hidden md:flex"
        />
      ),
      cell: ({ row }) => {
        return (
          <div className="md:flex space-x-2 hidden">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("heading")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "year",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Year"
          className="hidden lg:flex"
        />
      ),
      cell: ({ row }) => {
        const year = years.find((year) => year.value === row.getValue("year"));

        if (!year) {
          return null;
        }

        return (
          <div className="lg:flex w-[100px] items-center hidden">
            <span>{year.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: "priority",
      header: ({ column }) => (
        <DataTableColumnHeader
          column={column}
          title="Priority"
          className="hidden lg:flex"
        />
      ),
      cell: ({ row }) => {
        const priority = priorities.find(
          (priority) => priority.value === row.getValue("priority")
        );

        if (!priority) {
          return null;
        }

        return (
          <div className="lg:flex items-center hidden">
            <span>{priority.label}</span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="md:-ml-8 lg:-ml-0 -ml-0">
          <DataTableRowActions
            row={row}
            labels={labels}
            documents={documents}
          />
        </div>
      ),
    },
  ];
}
