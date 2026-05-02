import Link from "next/link"

const relatedPosts = [
  {
    title: "Bileşik faiz: Zamanın gücü",
    slug: "bilesik-faiz",
    category: "Eğitim",
  },
  {
    title: "Portföy çeşitlendirmesi neden önemli?",
    slug: "portfoy-cesitlendirmesi",
    category: "Strateji",
  },
  {
    title: "İlk yatırımınızı yapmadan önce",
    slug: "ilk-yatiriminiz",
    category: "Başlangıç",
  },
]

export function RelatedPosts() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 border-t border-border">
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
        Diğer yazılar
      </p>
      
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/yazilar/${post.slug}`}
            className="block group"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
              {post.category}
            </p>
            <h3 className="text-lg text-foreground group-hover:text-muted-foreground transition-colors">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
