"use client";

import { useMemo, useState } from "react";
import { eventsByYear } from "@/content/events";

export default function EventsPage() {
  const years = useMemo(() => Object.keys(eventsByYear).sort((a, b) => Number(b) - Number(a)), []);
  const [year, setYear] = useState(years[0]);

  const events = eventsByYear[year];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Events</h1>
          <p className="text-sm text-brand-slate">
            Posters, details, and registration links by year.
          </p>
        </div>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full rounded-xl border bg-white px-3 py-2 text-sm sm:w-48"
        >
          {years.map((y) => (
            <option key={y} value={y}>
              AY{y}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((ev) => (
          <div key={ev.title} className="group overflow-hidden rounded-2xl border">
            <div className="relative aspect-4/5 bg-brand-soft">
              {/* later: next/image poster */}
              <div className="absolute inset-0 flex items-center justify-center text-xs text-brand-slate">
                Poster placeholder (4:5)
              </div>
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-black/20" />
            </div>

            <div className="space-y-2 p-4">
              <div className="font-medium leading-tight">{ev.title}</div>
              <div className="text-sm text-brand-slate">{ev.date}</div>

              <div className="flex items-center gap-3 pt-1">
                {ev.registration && (
                  <a
                    href={ev.registration}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border px-3 py-2 text-sm hover:bg-brand-pale-gold"
                  >
                    Register
                  </a>
                )}
                {ev.details && (
                  <a
                    href={ev.details}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline underline-offset-4 hover:opacity-80"
                  >
                    Details
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}