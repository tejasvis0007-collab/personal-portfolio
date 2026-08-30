const projects = [
  { label: "Completed", title: "Personal Brand Website", body: "A premium portfolio experience crafted with Next.js, responsive layouts, layered motion, glass surfaces, and a refined visual system.", tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"] },
  { label: "In Progress", title: "AI Product Experiments", body: "A growing collection of small, useful builds that combine software craft, AI workflows, and business-first thinking.", tags: ["AI", "UX", "Analytics", "MVPs"] },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 px-5 py-24 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-card mx-auto max-w-3xl text-center"><p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-300">Featured work</p><h2 className="mt-5 text-5xl font-black tracking-[-0.05em] sm:text-6xl lg:text-7xl">Projects with polish.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Every build is a milestone: sharper design, cleaner engineering, and a better understanding of what makes products feel valuable.</p></div>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="glass-card reveal-card group rounded-[2rem] p-6 transition duration-500 hover:-translate-y-2 sm:p-8" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">{project.label}</span>
                <h3 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">{project.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-400">{project.body}</p>
                <div className="mt-8 flex flex-wrap gap-3">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300 transition group-hover:border-emerald-300/30 group-hover:text-emerald-100">{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
