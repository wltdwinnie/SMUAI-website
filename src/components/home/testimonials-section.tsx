import { Quote } from "lucide-react";
import { testimonials } from "@/content/home";

export default function TestimonialsSection() {
  return (
    <section className="bg-white px-5 py-20 text-brand-deep-blue lg:px-8">
      <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-slate">Testimonials</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">What Our Community Says</h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">
            Perspectives from EXCO members and participants across SMUAI&apos;s events, workshops, and projects.
          </p>
        </div>
      </div>

      <div className="testimonial-marquee relative left-1/2 mt-12 w-screen -translate-x-1/2 overflow-hidden">
        <div className="testimonial-track px-2 sm:px-4">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className="group relative mx-3 w-[380px] shrink-0 rounded-3xl border border-brand-soft bg-white p-8 shadow-[0_25px_50px_-40px_rgba(27,43,84,0.35)] md:w-[460px]"
            >
              <Quote className="text-brand-deep-blue/75" size={28} />
              <p className="mt-5 text-lg leading-relaxed text-brand-slate">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-8 border-t border-brand-soft pt-5">
                <p className="text-base font-bold text-brand-deep-blue">{testimonial.name}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-[0.15em] text-brand-slate">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
