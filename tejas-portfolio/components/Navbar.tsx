const links = ["about", "projects", "contact"];

export default function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-6">
        <a href="#home" className="group text-lg font-black tracking-tight sm:text-2xl">Tejas<span className="text-emerald-300 transition group-hover:text-teal-200">.</span></a>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex">
          {links.map((link) => <a key={link} href={`#${link}`} className="rounded-full px-5 py-2 text-sm font-medium capitalize text-slate-300 transition hover:bg-white/10 hover:text-white">{link}</a>)}
        </div>
        <a href="https://github.com/tejasvis0007-collab" target="_blank" rel="noopener noreferrer" className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-300 hover:text-black sm:px-5">GitHub</a>
      </div>
    </nav>
  );
}
