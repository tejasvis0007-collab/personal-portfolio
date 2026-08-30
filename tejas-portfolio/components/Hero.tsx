import Image from "next/image";

const stats = ["IIM Lucknow", "AI & Analytics", "Builder"];

export default function Hero() {
  return (
    <section id="home" className="relative z-10 flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100 shadow-lg shadow-emerald-950/30 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.9)]" /> Building in public
          </div>
          <h1 className="mt-7 max-w-5xl text-6xl font-black leading-[0.88] tracking-[-0.08em] sm:text-7xl md:text-8xl lg:text-9xl">Tejas <span className="text-luxury">M S</span></h1>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-tight text-slate-200 sm:text-3xl lg:text-5xl">Designing a future before the title catches up.</p>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">I am an AI & Business Analytics student, developer, and builder documenting the path from curiosity to polished products—one disciplined iteration at a time.</p>
          <div className="mt-8 flex flex-wrap gap-3">{stats.map((stat) => <span key={stat} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-300">{stat}</span>)}</div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="rounded-full bg-white px-8 py-4 text-center font-bold text-black transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(255,255,255,0.22)]">Explore Work</a>
            <a href="https://www.linkedin.com/in/tejas-ms007" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-center font-bold text-white transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-300 hover:text-black">Connect on LinkedIn</a>
          </div>
        </div>
        <div className="animate-fade-up animation-delay-300 flex justify-center lg:justify-end">
          <div className="glass-card relative aspect-[0.82] w-full max-w-[24rem] rounded-[2.5rem] p-4 sm:max-w-[30rem]">
            <div className="absolute -right-4 top-10 h-20 w-20 rounded-full border border-emerald-200/30 [animation:orbit_9s_linear_infinite]" />
            <div className="relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-300/20 to-slate-950">
              <Image src="/tejas.png" alt="Portrait of Tejas M S" fill priority sizes="(max-width: 1024px) 90vw, 480px" className="object-cover object-center saturate-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/10" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/10 bg-black/45 p-4 backdrop-blur-xl"><p className="text-sm text-slate-300">Currently building</p><p className="mt-1 text-xl font-black">Premium web experiences</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
