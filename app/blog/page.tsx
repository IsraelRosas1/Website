import { client } from '@/lib/sanity'
import Link from 'next/link'

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    publishedAt,
    mainImage
  }`
  const data = await client.fetch(query)
  return data
}

export default async function BlogIndex() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Link 
          href="/" 
          className="inline-block mb-8 text-white/60 hover:text-white transition"
        >
          ← Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold mb-12">My Blog</h1>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post: any) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group border border-white/10 rounded-lg overflow-hidden hover:border-accent transition bg-white/5 backdrop-blur-sm"
            >
              <article>
                <h2 className="text-2xl font-semibold mb-2 p-6 group-hover:text-accent transition">
                  {post.title}
                </h2>
                <p className="text-sm text-white/60 px-6 pb-6">
                  {new Date(post.publishedAt).toLocaleDateString()}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
