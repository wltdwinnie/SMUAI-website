"use client";

import Image from "next/image";
import Gravity, { MatterBody } from "@/components/fancy/physics/cursor-attractor-and-gravity";
import { heroGalleryImages } from "@/content/home";

const heroParticles = Array.from({ length: 80 }, (_, index) => {
  const seedX = (index * 37 + 11) % 100;
  const seedY = (index * 53 + 17) % 100;
  const size = (index % 3) + 4;

  return {
    x: `${seedX}%`,
    y: `${seedY}%`,
    size,
  };
});

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100svh-78px)] flex-col justify-center overflow-hidden bg-white pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(27,43,84,0.06),transparent_42%),radial-gradient(circle_at_80%_70%,rgba(81,97,133,0.08),transparent_44%)]" />
      <div className="absolute inset-0 opacity-80">
        <Gravity attractorStrength={0} cursorStrength={0.00032} cursorFieldRadius={180} className="h-full w-full" addTopWall={false}>
          {heroParticles.map((particle, index) => (
            <MatterBody
              key={`hero-particle-${index}`}
              bodyType="circle"
              x={particle.x}
              y={particle.y}
              matterBodyOptions={{ friction: 0.5, restitution: 0.28, density: 0.0007 }}
            >
              <div className="rounded-full bg-brand-gold/70" style={{ width: `${particle.size}px`, height: `${particle.size}px` }} />
            </MatterBody>
          ))}
        </Gravity>
      </div>

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center px-5 text-center lg:px-8">
        <div className="max-w-4xl">
          <div className="relative mx-auto inline-flex overflow-hidden rounded-[28px] border border-brand-soft/80 px-5 py-4 shadow-[0_28px_60px_-48px_rgba(27,43,84,0.55)]">
            <Image
              src="/brand/smuai_navy_logo.png"
              alt="SMUAI"
              width={420}
              height={131}
              priority
              className="relative z-10 mx-auto h-auto w-[270px] sm:w-[340px] lg:w-[420px]"
            />
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-[20px] leading-relaxed text-brand-slate">
            SMUAI is a student-led ThinkTank that facilitates the sharing of ideas in the field of Artificial Intelligence.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-[20px] leading-relaxed text-brand-slate">
            We are proudly supported by the Singapore Management University&apos;s Institute of Innovation and Entrepreneurship (SMU
            IIE).
          </p>
        </div>
      </div>

      <div className="marquee relative mt-12 w-full overflow-hidden py-6">
        <div className="marquee-track">
          {[...heroGalleryImages, ...heroGalleryImages].map((src, index) => (
            <figure
              key={`${src}-${index}`}
              className="mx-3 inline-flex h-48 w-72 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-brand-soft bg-brand-cloud"
            >
              <Image src={src} alt={`SMUAI gallery ${index + 1}`} width={288} height={192} className="h-full w-full object-cover" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
