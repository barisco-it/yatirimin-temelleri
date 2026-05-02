import { PortableText, PortableTextComponents } from "@portabletext/react"
import { Post } from "@/sanity/lib/types"
import { SectionDivider } from "@/components/section-divider"

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-xl font-normal tracking-tight text-foreground mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-lg font-normal tracking-tight text-foreground mt-10 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="text-foreground/80 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 pl-6 border-l border-border">
        <p className="text-foreground/70 italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 my-6 text-foreground/80">{children}</ul>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3">
        <span className="text-muted-foreground">—</span>
        <span>{children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
  },
}

const topicLabels: Record<string, string> = {
  egitim: "Eğitim",
  gorus: "Görüş",
  "analiz": "Analiz",
  notlar: "Notlar",
}

interface Props {
  post: Post
}

export function ArticleContent({ post }: Props) {
  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <header>
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
          {post.topic && <span>{topicLabels[post.topic] ?? post.topic}</span>}
          {post.topic && post.publishedAt && <span className="text-border">—</span>}
          {post.publishedAt && (
            <span>{new Date(post.publishedAt).getFullYear()}</span>
          )}
          {post.readingTime && <span className="text-border">—</span>}
          {post.readingTime && <span>{post.readingTime} dk okuma</span>}
        </div>

        <h1 className="text-3xl md:text-4xl font-normal leading-tight tracking-tight text-foreground mb-8">
          {post.title}
        </h1>

        {post.description && (
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {post.description}
          </p>
        )}
      </header>

      {post.body && (
        <>
          <SectionDivider />
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} components={portableTextComponents} />
          </div>
        </>
      )}

      {post.author && (
        <p className="mt-16 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {post.author}
        </p>
      )}
    </article>
  )
}
