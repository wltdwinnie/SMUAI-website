"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { Globe, Linkedin, X } from "lucide-react";
import { partners } from "@/content/partners";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import type { Partner } from "@/content/partners";

function PartnerNode({
  partner,
  onOpen,
}: {
  partner: Partner;
  onOpen: (partner: Partner) => void;
}) {
  const { name, logo } = partner;
  return (
    <button
      type="button"
      onClick={() => onOpen(partner)}
      aria-label={name}
      className="flex h-full w-full items-center justify-center rounded-full p-2 text-center shadow-[0_18px_30px_-24px_rgba(27,43,84,0.6)] transition hover:scale-105"
    >
      {logo ? (
        <div className="relative h-full w-full overflow-hidden rounded-full">
          <Image src={logo} alt={name} fill className="object-cover" sizes="92px" />
        </div>
      ) : (
        <span className="text-xs font-semibold leading-tight text-brand-deep-blue">{name}</span>
      )}
    </button>
  );
}

export default function PartnersPage() {
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const ring1 = useMemo(() => partners.slice(0, 9), []);
  const ring2 = useMemo(() => partners.slice(9, 15), []);
  const ring3 = useMemo(() => partners.slice(15, 18), []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPartner(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2">
      <section className="relative bg-brand-cloud px-4 py-6 sm:px-6 sm:py-7 lg:px-8">
        <div className="relative mx-auto w-full max-w-[1320px]">
          <div>
            <h1 className="text-2xl font-semibold">Partners</h1>
            <p className="mt-1 text-sm text-brand-slate">Organizations we have collaborated with.</p>
          </div>

          <div className="group/orbit relative mx-auto mt-1 flex h-[640px] w-full max-w-[1220px] items-center justify-center overflow-visible sm:h-[700px]">
          {ring1.length > 0 && (
            <OrbitingCircles
              radius={300}
              path
              iconSize={92}
              speed={0.8}
              className="z-20 group-hover/orbit:[animation-play-state:paused]"
            >
              {ring1.map((partner) => (
                <PartnerNode key={`${partner.name}-ring1`} partner={partner} onOpen={setSelectedPartner} />
              ))}
            </OrbitingCircles>
          )}

          {ring2.length > 0 && (
            <OrbitingCircles
              radius={190}
              path
              reverse
              iconSize={92}
              speed={1}
              className="z-20 group-hover/orbit:[animation-play-state:paused]"
            >
              {ring2.map((partner) => (
                <PartnerNode key={`${partner.name}-ring2`} partner={partner} onOpen={setSelectedPartner} />
              ))}
            </OrbitingCircles>
          )}

          {ring3.length > 0 && (
            <OrbitingCircles
              radius={65}
              path
              iconSize={92}
              speed={1.2}
              className="z-20 group-hover/orbit:[animation-play-state:paused]"
            >
              {ring3.map((partner) => (
                <PartnerNode key={`${partner.name}-ring3`} partner={partner} onOpen={setSelectedPartner} />
              ))}
            </OrbitingCircles>
          )}
          </div>
        </div>
      </section>

      {selectedPartner && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 p-4"
          onClick={() => setSelectedPartner(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl bg-white p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-brand-deep-blue">{selectedPartner.name}</h2>
              <button
                type="button"
                aria-label="Close partner details"
                onClick={() => setSelectedPartner(null)}
                className="rounded-full border border-brand-soft p-1.5 text-brand-slate transition hover:bg-brand-cloud"
              >
                <X size={16} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-brand-slate">{selectedPartner.description}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedPartner.website ? (
                <a
                  href={selectedPartner.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-deep-blue px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-deep-blue/90"
                >
                  <Globe size={16} />
                  Website
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-slate"
                >
                  <Globe size={16} />
                  Website Soon
                </button>
              )}

              {selectedPartner.linkedin ? (
                <a
                  href={selectedPartner.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-soft px-4 py-2 text-sm font-semibold text-brand-deep-blue transition hover:bg-brand-pale-gold"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-slate"
                >
                  <Linkedin size={16} />
                  LinkedIn Soon
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
