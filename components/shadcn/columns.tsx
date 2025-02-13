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
  labels: { value: string; label: string }[]
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
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
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
          <div className="flex space-x-2">
            {label && <Badge variant="outline">{label.label}</Badge>}
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("title")}
            </span>
          </div>
        );
      },
      enableSorting: true,
      enableHiding: false,
    },
    {
      accessorKey: "heading",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Heading" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
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
        <DataTableColumnHeader column={column} title="Year" />
      ),
      cell: ({ row }) => {
        const year = years.find((year) => year.value === row.getValue("year"));

        if (!year) {
          return null;
        }

        return (
          <div className="flex w-[100px] items-center">
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
        <DataTableColumnHeader column={column} title="Priority" />
      ),
      cell: ({ row }) => {
        const priority = priorities.find(
          (priority) => priority.value === row.getValue("priority")
        );

        if (!priority) {
          return null;
        }

        return (
          <div className="flex items-center">
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
      cell: ({ row }) => <DataTableRowActions row={row} labels={labels} />,
    },
  ];
}
