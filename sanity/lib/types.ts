export interface Post {
  _id: string
  title: string
  slug: { current: string }
  author?: string
  description?: string
  body?: any[]
  topic?: string
  publishedAt?: string
  readingTime?: number
  featured?: boolean
}
