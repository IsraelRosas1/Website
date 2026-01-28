import React from 'react'
import { Smartphone, Code, Zap, Users, ShieldCheck, Rocket } from 'lucide-react'

export default function Services(){
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native-quality mobile applications built with React Native and TypeScript. From concept to App Store deployment, I handle the entire development lifecycle."
    },
    {
      icon: Code,
      title: "Cross-Platform Solutions",
      description: "Write once, deploy everywhere. I create efficient cross-platform apps that work seamlessly on iOS and Android while maintaining native performance."
    },
    {
      icon: Zap,
      title: "API Integration & Backend",
      description: "Robust backend development with Python, RESTful APIs, and database integration to power your mobile applications with reliable data management."
    },
    {
      icon: Users,
      title: "UI/UX Design",
      description: "User-centered design that prioritizes intuitive navigation, accessibility, and engaging interfaces that keep users coming back."
    },
    {
      icon: ShieldCheck,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing strategies ensuring your app is stable, secure, and performs flawlessly across all devices and scenarios."
    },
    {
      icon: Rocket,
      title: "Deployment & Support",
      description: "End-to-end deployment to app stores, continuous integration setup, and ongoing maintenance to keep your app running smoothly."
    }
  ]

  return (
    <section className="py-16" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I <span className="text-accent">Offer</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Comprehensive mobile app development services tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:scale-105"
              >
                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
