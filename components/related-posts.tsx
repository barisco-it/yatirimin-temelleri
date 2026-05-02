import Link from "next/link"
import { Post } from "@/sanity/lib/types"
import { SectionDivider } from "@/components/section-divider"

const topicLabels: Record<string, string> = {
  egitim: "Eğitim",
  gorus: "Görüş",
  "analiz": "Analiz",
  notlar: "Notlar",
}

interface Props {
  posts: Post[]
}

export function RelatedPosts({ posts }: Props) {
  if (!posts?.length) return null

  return (
    <section className="mx-auto max-w-2xl px-6 pb-16">
      <SectionDivider className="mb-16" />
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
