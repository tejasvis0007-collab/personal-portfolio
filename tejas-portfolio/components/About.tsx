const values = [
  ["Discipline", "Cleared JEE Main and Advanced through consistency and focus."],
  ["Curiosity", "Learning software, AI, and business analytics by building in public."],
  ["Self-made", "Choosing earned progress over borrowed identity every day."],
];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 sm:px-8 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal-card"><p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-300">About me</p><h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-7xl">More than just code.</h2></div>
        <div className="glass-card reveal-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
          <p className="text-lg leading-9 text-slate-300">My journey began with curiosity and a belief that every small step compounds into something extraordinary. I completed schooling through ICSE, continued higher secondary education under CBSE, and cleared JEE Main and JEE Advanced—milestones that shaped discipline, resilience, and consistent effort.</p>
          <p className="mt-6 text-xl font-bold text-white">I believe in being self-made, not surname-made.</p>
          <p className="mt-6 text-lg leading-9 text-slate-300">I want every achievement to be earned through relentless learning and the willingness to build from nothing. I am grateful to my closest friends, <span className="font-semibold text-emerald-300">Anvik</span> and <span className="font-semibold text-emerald-300">Surya</span>, whose belief continues to push me forward.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">{values.map(([title, body]) => <div key={title} className="rounded-2xl border border-white/10 bg-black/25 p-5"><h3 className="font-bold text-emerald-200">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{body}</p></div>)}</div>
        </div>
      </div>
    </section>
  );
}
