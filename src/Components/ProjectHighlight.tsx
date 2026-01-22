import React from 'react'
import { Fish, MapPin, Users, Star, ExternalLink, Award, Smartphone, Wifi } from 'lucide-react'

export default function ProjectHighlight(){
  const features = [
    { icon: MapPin, text: "Interactive fishing location maps" },
    { icon: Users, text: "Social features & community" },
    { icon: Wifi, text: "Offline support & sync" },
    { icon: Smartphone, text: "Native iOS & Android experience" }
  ]

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
      </div>
    </section>
  )
}
