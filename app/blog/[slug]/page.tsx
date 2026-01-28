import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { createImageUrlBuilder } from '@sanity/image-url'
import Link from 'next/link'
import type { Metadata } from 'next'

const builder = createImageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source)

interface BlogPostProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    "excerpt": pt::text(body)[0...160]
  }`
  const post = await client.fetch(query, { slug })

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const ogImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : undefined

  return {
    title: `${post.title} | Israel Rosas Blog`,
    description: post.excerpt || `Read ${post.title} on Israel Rosas' blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Israel Rosas' blog`,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Israel Rosas'],
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Israel Rosas' blog`,
      images: ogImage ? [ogImage] : [],
    },
  }
}

const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-10">
        <img
          src={urlFor(value).url()}
          alt={value.alt || 'Blog image'}
          className="rounded-xl w-full"
        />
        {value.alt && (
          <span className="text-sm text-gray-400 mt-2 block text-center">
            {value.alt}
          </span>
        )}
      </div>
    ),
  },
}

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`
  const posts = await client.fetch(query)
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params
  
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    body,
    mainImage,
    publishedAt
  }`
  
  const post = await client.fetch(query, { slug })

  if (!post) {
    return (
      <div className="min-h-screen bg-hero bg-cover bg-center text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Israel Rosas',
    },
    image: post.mainImage ? urlFor(post.mainImage).url() : undefined,
  }

  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-6">
        <Link 
          href="/blog" 
          className="inline-block mb-8 text-white/60 hover:text-white transition"
        >
          ← Back to Blog
        </Link>
        
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        
        <p className="text-white/60 mb-8">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
        
        {post.mainImage && (
          <img 
            src={urlFor(post.mainImage).url()} 
            alt={post.mainImage.alt || post.title} 
            className="rounded-2xl mb-10 w-full"
          />
        )}

        <div className="prose prose-lg lg:prose-xl max-w-none prose-invert prose-headings:text-white prose-p:text-white prose-a:text-accent prose-strong:text-white prose-li:text-white prose-code:text-white prose-blockquote:text-white/90">
          <PortableText value={post.body} components={components} />
        </div>
      </article>
    </div>
  )
}
