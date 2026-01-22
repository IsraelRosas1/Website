import React from 'react'

function ShowcaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="glass p-6 rounded-2xl border border-white/10 shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
      <div className="mt-4">
        <button className="inline-flex items-center gap-2 bg-accent text-black px-3 py-1 rounded-md text-sm">View</button>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-hero bg-cover bg-center text-white flex flex-col">
      <header className="py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">My Apps</h1>
          <p className="mt-2 text-white/70">A selection of projects I've built.</p>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-16 flex-1">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShowcaseCard title="Project One" description="A short description of project one." />
          <ShowcaseCard title="Project Two" description="A short description of project two." />
          <ShowcaseCard title="Project Three" description="A short description of project three." />
        </section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto px-6 text-sm text-white/60">© {new Date().getFullYear()} — Built with React + Vite + Tailwind</div>
      </footer>
    </div>
  )
}
