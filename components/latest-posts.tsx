import Link from "next/link"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Yatırım nedir?",
    description: "Yatırımın temel tanımı ve neden herkes için önemli olduğu üzerine.",
    slug: "yatirim-nedir",
  },
  {
    title: "Varlık sınıfları",
    description: "Hisse, tahvil, emtia, gayrimenkul: Her birinin riskleri ve getirileri.",
    slug: "varlik-siniflari",
  },
  {
    title: "ETF nedir?",
    description: "Borsa yatırım fonları ve düşük maliyetli yatırımın temelleri.",
    slug: "etf-nedir",
  },
  {
    title: "Dolar bazlı düşünmek",
    description: "TL bazlı getiriler neden yanıltıcı olabilir? Reel getiri hesabı.",
    slug: "dolar-bazli-dusunmek",
  },
]

export function LatestPosts() {
  return (
    <section className="w-full py-16 border-t border-border">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Son Yazılar
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/yazilar/${post.slug}`} className="block">
                <h3 className="text-lg font-medium text-foreground group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {post.description}
                </p>
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
