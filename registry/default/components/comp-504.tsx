"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";
import { addDays, subDays } from "date-fns";

export default function Component() {    
  const today = new Date();
  const [date, setDate] = useState<Date[] | undefined>([
    subDays(today, 17),
    addDays(today, 2),
    addDays(today, 6),
    addDays(today, 8),
  ]);

  return (
    <div>
      <Calendar
        mode="multiple"
        selected={date}
        onSelect={setDate}     
        className="rounded-lg border border-border p-2"
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Multiple date selection - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
