"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const frameworks = [
  { value: "ordinance", label: "ORDINANCE" },
  { value: "resolution", label: "RESOLUTION" },
  { value: "general correspondence", label: "GENERAL CORRESPONDENCE" },
  { value: "annual budget", label: "ANNUAL BUDGET" },
];

interface ComboboxDemoProps {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

export function ComboboxDemo({
  selectedValue,
  setSelectedValue,
}: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-96 justify-between text-xl [&_svg]:size-5 shadow py-7 tracking-wide font-figtree">
          {
            frameworks.find((framework) => framework.value === selectedValue)
              ?.label
          }
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  className="w-full max-w-lg"
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setSelectedValue(currentValue);
                    setOpen(false);
                  }}>
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedValue === framework.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
