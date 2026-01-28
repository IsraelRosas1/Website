import { client } from '@/lib/sanity'
import { PortableText } from '@portabletext/react'
import { createImageUrlBuilder } from '@sanity/image-url'
import Link from 'next/link'

const builder = createImageUrlBuilder(client)
const urlFor = (source: any) => builder.image(source)

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

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
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

  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white py-20">
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
