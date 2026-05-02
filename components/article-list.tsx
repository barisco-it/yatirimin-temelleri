"use client"

import Link from "next/link"
import { useState } from "react"

const categories = [
  { slug: "tumunu", name: "Tümü" },
  { slug: "egitim", name: "Eğitim" },
  { slug: "gorus", name: "Görüş" },
  { slug: "derin-analiz", name: "Derin Analiz" },
  { slug: "notlar", name: "Notlar" },
]

const articles = [
  {
    slug: "yatirim-nedir",
    title: "Yatırım nedir? Gerçekten ne yapıyoruz?",
    category: "Eğitim",
    categorySlug: "egitim",
    date: "2026",
    readingTime: "6 dk okuma",
    description: "Yatırım kavramını sade bir yerden ele alarak, aslında ne yaptığımızı anlamaya çalışıyoruz.",
  },
  {
    slug: "varlik-siniflari",
    title: "Varlık sınıfları nedir?",
    category: "Eğitim",
    categorySlug: "egitim",
    date: "2026",
    readingTime: "8 dk okuma",
    description: "Hisse, tahvil, emtia, gayrimenkul ve diğer varlık sınıflarını anlamak.",
  },
  {
    slug: "dolar-bazli-dusunmek",
    title: "Dolar bazlı düşünmek ne demek?",
    category: "Görüş",
    categorySlug: "gorus",
    date: "2026",
    readingTime: "5 dk okuma",
    description: "Enflasyon ortamında paranın değerini korumak için farklı bir bakış açısı.",
  },
]

export function ArticleList() {
  const [activeCategory, setActiveCategory] = useState("tumunu")

  const filteredArticles = activeCategory === "tumunu"
    ? articles
    : articles.filter(article => article.categorySlug === activeCategory)

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

      <div className="space-y-12">
        {filteredArticles.map((article) => (
          <article key={article.slug}>
            <Link 
              href={`/yazilar/${article.slug}`}
              className="group block"
            >
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                <span>{article.category}</span>
                <span>·</span>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readingTime}</span>
              </div>
              <h2 className="text-xl font-medium text-foreground group-hover:opacity-70 transition-opacity">
                {article.title}
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {article.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
