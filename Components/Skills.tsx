import React from 'react'
import { Code, Smartphone, Database, Layers, Terminal, Palette, GitBranch, Package } from 'lucide-react'

export default function Skills(){
  const skillCategories = [
    {
      category: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "iOS & Android", level: "Advanced" },
        { name: "Expo", level: "Advanced" }
      ]
    },
    {
      category: "Backend & APIs",
      icon: Database,
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Database Design", level: "Advanced" }
      ]
    },
    {
      category: "Frontend & UI",
      icon: Palette,
      skills: [
        { name: "React", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "UI/UX Design", level: "Advanced" },
        { name: "Responsive Design", level: "Expert" }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: Terminal,
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "CI/CD", level: "Intermediate" },
        { name: "App Store Deployment", level: "Advanced" },
        { name: "Agile Development", level: "Advanced" }
      ]
    }
  ]

  const technologies = [
    "React Native", "TypeScript", "Python", "JavaScript", "React",
    "Node.js", "Express", "PostgreSQL", "MongoDB", "Firebase",
    "Git", "REST APIs", "GraphQL", "Tailwind CSS", "Redux"
  ]

  return (
    <section className="py-16 bg-white/[0.02]" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A comprehensive skill set covering the full mobile development lifecycle
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="glass p-6 rounded-2xl hover:bg-white/5 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-sm px-2 py-1 rounded bg-accent/20 text-accent font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Technologies Cloud */}
        <div className="glass p-8 rounded-2xl">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <Package className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-semibold">Technologies & Tools</h3>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all text-sm font-medium cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
