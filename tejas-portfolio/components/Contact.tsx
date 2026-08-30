const contacts = [
  { icon: "✉️", title: "Email", value: "tejas7b@gmail.com", href: "mailto:tejas7b@gmail.com" },
  { icon: "📷", title: "Instagram", value: "@tejasms007", href: "https://instagram.com/tejasms007" },
  { icon: "💼", title: "LinkedIn", value: "tejas-ms007", href: "https://www.linkedin.com/in/tejas-ms007" },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-20">
      <div className="mx-auto w-full max-w-5xl text-center">
        <div className="reveal-card"><p className="text-sm font-bold uppercase tracking-[0.4em] text-emerald-300">Contact</p><h2 className="mt-5 text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-8xl">Let&apos;s build something remarkable.</h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-400">Whether you need a modern portfolio, a business website, or a thoughtful collaborator, I would love to hear what you are building.</p></div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {contacts.map((contact) => (
            <a key={contact.title} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined} className="glass-card reveal-card group rounded-[2rem] p-6 text-left transition hover:-translate-y-2">
              <span className="text-3xl">{contact.icon}</span><h3 className="mt-5 text-xl font-bold text-white">{contact.title}</h3><p className="mt-2 text-sm text-slate-400 transition group-hover:text-emerald-200">{contact.value}</p>
            </a>
          ))}
        </div>
        <p className="mt-16 text-sm text-slate-500">© 2026 Tejas M S • Built with Next.js & Tailwind CSS</p>
      </div>
    </section>
  );
}
