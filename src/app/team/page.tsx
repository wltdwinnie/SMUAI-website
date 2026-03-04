"use client";

import { useMemo, useState } from "react";
import { teamByYear } from "@/content/team";

export default function TeamPage() {
  const years = useMemo(() => Object.keys(teamByYear).sort((a, b) => Number(b) - Number(a)), []);
  const [year, setYear] = useState(years[0]);

  const members = teamByYear[year];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Executive Committee</h1>
          <p className="text-sm text-brand-slate">Select a year to view the team.</p>
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl border p-5">
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-brand-soft">
              {/* later: replace with next/image */}
              <div className="flex h-full items-center justify-center text-xs text-brand-slate">
                Photo placeholder
              </div>
            </div>

            <div className="mt-4">
              <div className="font-medium">{m.name}</div>
              <div className="text-sm text-brand-slate">{m.position}</div>

              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm underline underline-offset-4 hover:opacity-80"
                >
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}