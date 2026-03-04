import { partners } from "@/content/partners";

export default function PartnersPage() {
  return (
    <div className="space-y-8 pt-6 lg:pt-8">
      <div>
        <h1 className="text-2xl font-semibold">Partners</h1>
        <p className="text-sm text-brand-slate">
          Organizations that support SMUAI initiatives.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.website}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-5 hover:bg-brand-pale-gold"
          >
            <div className="font-medium">{p.name}</div>
            <div className="mt-1 text-sm text-brand-slate">{p.tagline ?? "—"}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
