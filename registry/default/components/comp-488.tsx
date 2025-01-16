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
        // formatters={{
        //   formatWeekdayName: (day) => day?.toLocaleDateString('en-US', { weekday: 'narrow' })
        // }}      
        className="rounded-lg border border-border p-2"
      />
      <p className="mt-4 text-xs text-muted-foreground text-center" role="region" aria-live="polite">Calendar - <a className="underline hover:text-foreground" href="https://daypicker.dev/" target="_blank" rel="noopener nofollow">React DayPicker</a></p>
    </div>
  );
}
