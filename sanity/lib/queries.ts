import { groq } from 'next-sanity'

export const featuredPostQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0] {
    _id, title, slug, description, topic, publishedAt, readingTime
  }
`

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...4] {
    _id, title, slug, description, topic, publishedAt, readingTime
  }
`

export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, description, topic, publishedAt, readingTime
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, description, body, topic, publishedAt, readingTime, featured
  }
`

export const relatedPostsQuery = groq`
  *[_type == "post" && topic == $topic && slug.current != $slug] | order(publishedAt desc)[0...3] {
    _id, title, slug, topic
  }
`

export const allSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`
