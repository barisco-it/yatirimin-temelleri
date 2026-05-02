"use client"

import Link from "next/link"
import { Fragment, useState } from "react"
import { Post } from "@/sanity/lib/types"
import { SectionDivider } from "@/components/section-divider"

const categories = [
  { slug: "tumunu", name: "Tümü" },
  { slug: "egitim", name: "Eğitim" },
  { slug: "gorus", name: "Görüş" },
  { slug: "analiz", name: "Analiz" },
  { slug: "notlar", name: "Notlar" },
]

const topicLabels: Record<string, string> = {
  egitim: "Eğitim",
  gorus: "Görüş",
  "analiz": "Analiz",
  notlar: "Notlar",
}

interface Props {
  posts: Post[]
  initialCategory?: string
}

export function ArticleList({ posts, initialCategory }: Props) {
  const [activeCategory, setActiveCategory] = useState(initialCategory ?? "tumunu")

  const filteredPosts =
    activeCategory === "tumunu"
      ? posts
      : posts.filter((post) => post.topic === activeCategory)

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => setActiveCategory(category.slug)}
            className={`text-sm transition-colors ${
              activeCategory === category.slug
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div>
        {filteredPosts.map((post, index) => (
          <Fragment key={post._id}>
            <article>
              <Link href={`/yazilar/${post.slug.current}`} className="group block">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  {post.topic && <span>{topicLabels[post.topic] ?? post.topic}</span>}
                  {post.topic && post.publishedAt && <span>·</span>}
                  {post.publishedAt && (
                    <span>{new Date(post.publishedAt).getFullYear()}</span>
                  )}
                  {post.readingTime && <span>·</span>}
                  {post.readingTime && <span>{post.readingTime} dk okuma</span>}
                </div>
                <h2 className="text-xl font-medium text-foreground group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                )}
              </Link>
            </article>
            {index < filteredPosts.length - 1 && (
              <SectionDivider className="my-10" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
