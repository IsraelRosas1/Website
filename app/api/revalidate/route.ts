import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    // Verify the request is from Sanity (optional but recommended)
    const secret = req.nextUrl.searchParams.get('secret')
    
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    const body = await req.json()
    
    // Revalidate blog index
    revalidatePath('/blog')
    
    // If a specific post was updated, revalidate that too
    if (body?.slug?.current) {
      revalidatePath(`/blog/${body.slug.current}`)
    }
    
    return NextResponse.json({ 
      revalidated: true, 
      now: Date.now(),
      paths: ['/blog', body?.slug?.current ? `/blog/${body.slug.current}` : null].filter(Boolean)
    })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 })
  }
}
