import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArticleContent } from "@/components/article-content"
import { RelatedPosts } from "@/components/related-posts"

export const metadata = {
  title: "Yatırım nedir? Gerçekten ne yapıyoruz? | Yatırımın Temelleri",
  description: "Yatırımın temel kavramlarını ve gerçek anlamını keşfedin.",
}

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ArticleContent />
        <RelatedPosts />
      </main>
      <Footer />
    </div>
  )
}
