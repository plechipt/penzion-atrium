"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/UI/popover";
import { cn } from "@/utils/cn";
import { Label } from "@/components/UI/label";
import { Button } from "@/components/UI/button";
import { Calendar } from "@/components/UI/calendar";

import { format } from "date-fns";
import { en, cs } from "date-fns/locale";

export function DatePicker({ date, setDate, label, placeholder }) {
  const locale = useLocale();

  const currentLocale = locale === "cs" ? cs : en;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div>
          {label && <Label className="text-sm font-bold">{label}</Label>}
          <Button
            type="button"
            variant={"outline"}
            className={cn(
              "w-full justify-between text-left font-normal border border-neutral-200 bg-neutral-100"
            )}
          >
            {date ? (
              format(date, "PPP", { currentLocale })
            ) : (
              <span className="text-neutral-700 text-base">{placeholder}</span>
            )}
            <CalendarIcon className="h-4 w-4 text-indigo-800" />
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={currentLocale}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
