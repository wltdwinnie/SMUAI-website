import { Eye, Target } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="bg-brand-cloud px-5 py-16 text-brand-deep-blue lg:px-8">
      <div className="relative mx-auto w-full max-w-[1320px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-slate">Purpose</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Mission And Vision</h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">
            SMUAI exists to grow a thoughtful, capable, and action-oriented AI community at SMU.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-brand-soft bg-white p-9 shadow-[0_30px_60px_-45px_rgba(27,43,84,0.58)]">
            <div className="inline-flex items-center gap-4 text-brand-deep-blue">
              <div className="rounded-2xl border border-brand-soft bg-brand-cloud p-3">
                <Target size={24} />
              </div>
              <h3 className="text-3xl font-black tracking-tight text-brand-deep-blue">Mission</h3>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-brand-slate">
              To cultivate and spread ideas about Artificial Intelligence, and provide students with the tools, knowledge, and
              opportunities to excel in AI.
            </p>
          </article>

          <article className="rounded-3xl border border-brand-soft bg-white p-9 shadow-[0_30px_60px_-45px_rgba(27,43,84,0.58)]">
            <div className="inline-flex items-center gap-4 text-brand-deep-blue">
              <div className="rounded-2xl border border-brand-soft bg-brand-cloud p-3">
                <Eye size={24} />
              </div>
              <h3 className="text-3xl font-black tracking-tight text-brand-deep-blue">Vision</h3>
            </div>
            <p className="mt-6 text-lg leading-relaxed text-brand-slate">
              To be a hub of AI creativity and leadership that inspires groundbreaking ideas and empowers tomorrow&apos;s innovators
              by bridging passion with purpose.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
