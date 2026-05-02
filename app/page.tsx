import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedArticle } from "@/components/featured-article"
import { LatestPosts } from "@/components/latest-posts"
import { Topics } from "@/components/topics"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedArticle />
        <LatestPosts />
        <Topics />
      </main>
      <Footer />
    </div>
  )
}
