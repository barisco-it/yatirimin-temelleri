import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleContent } from '@/components/article-content'
import { RelatedPosts } from '@/components/related-posts'
import { client } from '@/sanity/lib/client'
import { postBySlugQuery, relatedPostsQuery, allSlugsQuery } from '@/sanity/lib/queries'
import { Post } from '@/sanity/lib/types'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await client.fetch<{ slug: string }[]>(allSlugsQuery)
  return slugs.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch<Post>(postBySlugQuery, { slug })
  return {
    title: post ? `${post.title} | Yatırımın Temelleri` : 'Yazı bulunamadı',
    description: post?.description,
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const post = await client.fetch<Post>(postBySlugQuery, { slug })

  if (!post) notFound()

  const relatedPosts = await client.fetch<Post[]>(relatedPostsQuery, {
    topic: post.topic ?? '',
    slug: post.slug.current,
  })

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ArticleContent post={post} />
        <RelatedPosts posts={relatedPosts} />
      </main>
      <Footer />
    </div>
  )
}
