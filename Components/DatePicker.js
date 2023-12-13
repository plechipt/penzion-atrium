"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import { Label } from "./ui/label";

export function DatePicker({ date, setDate, label, placeholder }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          {label && (
            <Label className="text-neutral-700 text-sm font-bold">
              {label}
            </Label>
          )}
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-between text-left font-normal border border-neutral-200 bg-neutral-100"
            )}
          >
            {date ? format(date, "PPP") : <span className="text-neutral-700 text-base">{placeholder}</span>}
            <CalendarIcon className="h-4 w-4 text-neutral-700" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
