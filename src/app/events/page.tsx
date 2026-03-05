"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";
import { eventsByYear, type EventItem } from "@/content/events";

export default function EventsPage() {
  const years = useMemo(
    () =>
      Object.keys(eventsByYear).sort((a, b) => {
        const startA = Number(a.split("/")[0]);
        const startB = Number(b.split("/")[0]);
        return startB - startA;
      }),
    [],
  );
  const [year, setYear] = useState(years[0]);
  const [nowTs] = useState(() => Date.now());
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const events = useMemo(
    () =>
      [...(eventsByYear[year] ?? [])].sort(
        (a, b) => new Date(b.startAt).getTime() - new Date(a.startAt).getTime(),
      ),
    [year],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedEvent(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="space-y-8 pt-6 lg:pt-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Events</h1>
          <p className="text-sm text-brand-slate">
            Latest events are shown first. Luma signup is disabled after each event ends.
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

      <div className="space-y-3">
        {events.map((ev) => {
          const isEnded = nowTs > new Date(ev.endAt ?? ev.startAt).getTime();
          const hasLuma = Boolean(ev.lumaLink);
          const isLumaEnabled = hasLuma && !isEnded;

          return (
            <article
              key={`${ev.title}-${ev.startAt}`}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedEvent(ev)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedEvent(ev);
                }
              }}
              className="w-full rounded-2xl bg-white p-3 text-left ring-1 ring-brand-soft transition hover:ring-brand-slate/40"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative h-24 w-full overflow-hidden rounded-xl bg-brand-soft sm:h-28 sm:w-[88px] sm:shrink-0">
                  {ev.poster ? (
                    <Image
                      src={ev.poster}
                      alt={ev.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 640px) 88px, 100vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[10px] text-brand-slate">
                      Poster
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="truncate text-base font-semibold leading-tight text-brand-deep-blue">
                    {ev.title}
                  </h2>
                  <div className="mt-1 text-sm text-brand-slate">
                    {ev.dateLabel} • {ev.timeLabel}
                  </div>
                </div>

                <div className="sm:ml-2">
                  {isLumaEnabled ? (
                    <a
                      href={ev.lumaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-brand-deep-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep-blue/90"
                    >
                      Luma Sign Up
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-slate"
                    >
                      {isEnded ? "Event Ended" : "Luma Link Soon"}
                    </button>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-brand-soft px-5 py-4">
              <h2 className="pr-4 text-lg font-semibold text-brand-deep-blue">Event Details</h2>
              <button
                type="button"
                aria-label="Close event details"
                onClick={() => setSelectedEvent(null)}
                className="rounded-full border border-brand-soft p-1.5 text-brand-slate transition hover:bg-brand-cloud"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-[240px_1fr]">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-brand-soft">
                {selectedEvent.poster ? (
                  <Image
                    src={selectedEvent.poster}
                    alt={selectedEvent.title}
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-brand-slate">
                    No poster
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold leading-tight text-brand-deep-blue">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm text-brand-slate">
                  {selectedEvent.dateLabel}
                </p>
                <p className="text-sm font-medium text-brand-deep-blue">
                  {selectedEvent.timeLabel}
                </p>

                <div className="pt-2">
                  {selectedEvent.lumaLink &&
                  nowTs <= new Date(selectedEvent.endAt ?? selectedEvent.startAt).getTime() ? (
                    <a
                      href={selectedEvent.lumaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-brand-deep-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep-blue/90"
                    >
                      Luma Sign Up
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex cursor-not-allowed rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-slate"
                    >
                      {nowTs > new Date(selectedEvent.endAt ?? selectedEvent.startAt).getTime()
                        ? "Event Ended"
                        : "Luma Link Soon"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
