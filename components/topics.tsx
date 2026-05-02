import Link from "next/link"

const topics = [
  { name: "Eğitim", slug: "egitim" },
  { name: "Görüş", slug: "gorus" },
  { name: "Derin Analiz", slug: "derin-analiz" },
  { name: "Notlar", slug: "notlar" },
]

export function Topics() {
  return (
    <section className="w-full py-16 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Konular
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/konular/${topic.slug}`}
              className="px-4 py-2 text-sm text-foreground border border-border rounded hover:bg-secondary transition-colors"
            >
              {topic.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
