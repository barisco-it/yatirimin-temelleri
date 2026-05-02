import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedArticle } from "@/components/featured-article"
import { LatestPosts } from "@/components/latest-posts"
import { Topics } from "@/components/topics"
import { Footer } from "@/components/footer"
import { client } from "@/sanity/lib/client"
import { featuredPostQuery, latestPostsQuery } from "@/sanity/lib/queries"
import { Post } from "@/sanity/lib/types"

export const revalidate = 60

export default async function Home() {
  const [featuredPost, latestPosts] = await Promise.all([
    client.fetch<Post>(featuredPostQuery),
    client.fetch<Post[]>(latestPostsQuery),
  ])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedArticle post={featuredPost} />
        <LatestPosts posts={latestPosts} />
        <Topics />
      </main>
      <Footer />
    </div>
  )
}
