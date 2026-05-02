import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Post } from "@/sanity/lib/types"

interface Props {
  posts: Post[]
}

export function LatestPosts({ posts }: Props) {
  if (!posts?.length) return null

  return (
    <section className="w-full py-16 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Son Yazılar
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post._id} className="group">
              <Link href={`/yazilar/${post.slug.current}`} className="block">
                <h3 className="text-lg font-medium text-foreground group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
                {post.description && (
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                )}
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  <span>Oku</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
