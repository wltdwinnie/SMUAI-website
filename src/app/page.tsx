export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">SMUAI</h1>
        <p className="text-muted-foreground">
          Building an AI community at SMU through events, projects, and partnerships.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Card title="About Us" />
        <Card title="Our Vision" />
        <Card title="Our Mission" />
        <Card title="Our Values" />
      </section>
    </div>
  );
}

function Card({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border p-6">
      <h2 className="text-lg font-medium">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">Placeholder text for now.</p>
    </div>
  );
}