"use client";

import { useState } from "react";
import { Calendar } from "@/registry/default/ui/calendar";

export default function Component() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}        
        className="rounded-lg border border-border p-2"
        classNames={{
          day_button: "rounded-full",
        }}
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Custom select day style - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
