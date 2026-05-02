import Link from "next/link"
import { Post } from "@/sanity/lib/types"

const topicLabels: Record<string, string> = {
  egitim: "Eğitim",
  gorus: "Görüş",
  "derin-analiz": "Derin Analiz",
  notlar: "Notlar",
}

interface Props {
  posts: Post[]
}

export function RelatedPosts({ posts }: Props) {
  if (!posts?.length) return null

  return (
    <section className="mx-auto max-w-2xl px-6 py-16 border-t border-border">
      <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
        Diğer yazılar
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/yazilar/${post.slug.current}`}
            className="block group"
          >
            {post.topic && (
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                {topicLabels[post.topic] ?? post.topic}
              </p>
            )}
            <h3 className="text-lg text-foreground group-hover:text-muted-foreground transition-colors">
              {post.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  )
}
