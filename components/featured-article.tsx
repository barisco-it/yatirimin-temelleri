import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Post } from "@/sanity/lib/types"

interface Props {
  post: Post | null
}

export function FeaturedArticle({ post }: Props) {
  if (!post) return null

  return (
    <section className="w-full py-16 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Öne Çıkan Yazı
        </span>
        <article className="mt-6">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-foreground leading-snug text-balance">
            {post.title}
          </h2>
          {post.description && (
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              {post.description}
            </p>
          )}
          <Link
            href={`/yazilar/${post.slug.current}`}
            className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:opacity-70 transition-opacity group"
          >
            <span>Devamını oku</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </article>
      </div>
    </section>
  )
}
