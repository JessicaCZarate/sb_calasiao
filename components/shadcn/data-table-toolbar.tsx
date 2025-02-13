"use client";

import { Table } from "@tanstack/react-table";
import { X } from "lucide-react";

import { Button } from "@/components/shadcn/components/button";
import { Input } from "@/components/shadcn/components/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filteredYears: { value: string; label: string }[];
  filteredPriorities: { value: string; label: string }[];
}

export function DataTableToolbar<TData>({
  table,
  filteredYears,
  filteredPriorities,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

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
      <DataTableViewOptions table={table} />
    </div>
  );
}
