import React from 'react'
import { Fish, MapPin, Users, Star, ExternalLink, Award, Smartphone, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProjectHighlight(){
  const features = [
    { icon: MapPin, text: "Interactive fishing location maps" },
    { icon: Users, text: "Social features & community" },
    { icon: Sparkles, text: "Artificial Intelligence for fish species recognition" },
    { icon: Smartphone, text: "Native iOS & Android experience" }
  ]

  // Images are in the public folder, so use root path
  const images = Array.from({ length: 11 }, (_, i) => `/IMG_${i + 1}.PNG`)

  const scrollContainer = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-16 relative" id="projects">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">Featured Project</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            FTS <span className="text-accent">Fishing App</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive mobile fishing application built for TechTown Detroit
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: App mockup/visual */}
            <div className="relative">
              <div className="aspect-[9/16] max-w-xs mx-auto bg-gradient-to-br from-accent/20 to-orange-500/20 rounded-3xl border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-8">
                  <Fish className="w-20 h-20 text-accent mx-auto mb-4" />
                  <div className="text-2xl font-bold mb-2">FTS Fishing</div>
                  <div className="text-sm text-white/60">Your fishing companion</div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent text-black px-4 py-2 rounded-full font-semibold shadow-lg">
                <Star className="w-4 h-4 inline mr-1" />
                TechTown Detroit
              </div>
            </div>

            {/* Right: Description and features */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">About the Project</h3>
                <p className="text-white/80 leading-relaxed">
                  FTS is a comprehensive mobile application designed to enhance the fishing experience. 
                  Built with React Native and TypeScript, it provides anglers with interactive maps, 
                  location tracking, trip planning, and a vibrant community platform. The app features 
                  offline support for remote locations and delivers a native experience on both iOS and Android.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-white/90">Key Features</h4>
                <div className="grid grid-cols-1 gap-3">
                  {features.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Icon className="w-5 h-5 text-accent" />
                        </div>
                        <span className="text-white/80">{feature.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-semibold mb-3 text-white/90">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["React Native", "TypeScript", "Python", "API Integration", "Maps SDK"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screenshot Gallery */}
        <div className="max-w-5xl mx-auto mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold">App Screenshots</h3>
            <p className="text-white/60 mt-2">Explore the FTS Fishing App interface</p>
          </div>
          
          <div className="relative group">
            {/* Scroll buttons */}
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 hover:bg-black/80 transition-all opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Scrollable container */}
            <div
              ref={scrollContainer}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-56 md:w-72 aspect-[9/19.5] glass rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition-transform duration-300 bg-white/5"
                >
                  <img
                    src={img}
                    alt={`FTS Fishing App Screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Failed to load image: ${img}`)
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="400"%3E%3Crect fill="%23222" width="200" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23888"%3EImage ${index + 1}%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
