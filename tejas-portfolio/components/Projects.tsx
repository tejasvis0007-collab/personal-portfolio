export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 min-h-screen px-8 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="uppercase tracking-[0.4em] text-green-400 text-sm text-center">
          Featured Work
        </p>

        <h2 className="mt-6 text-5xl lg:text-6xl font-black text-center">
          Projects
        </h2>

        <p className="mt-6 text-gray-400 text-center max-w-2xl mx-auto">
          Every project represents another milestone in my journey of
          becoming a better developer. Here's what I've been building.
        </p>

        <div className="mt-20 grid lg:grid-cols-2 gap-8">

          {/* Project 1 */}

          <div className="rounded-3xl border border-gray-800 bg-neutral-900/50 p-10 hover:border-green-400 hover:-translate-y-2 transition-all duration-300">

            <span className="text-green-400 text-sm uppercase tracking-widest">
              Completed
            </span>

            <h3 className="mt-4 text-3xl font-bold">
              Personal Brand Website
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              The very website you're exploring right now.
              Designed and developed from scratch using Next.js and Tailwind CSS,
              with a strong focus on clean design, smooth interactions,
              and a premium user experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                Next.js
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                React
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                Tailwind CSS
              </span>

              <span className="px-4 py-2 rounded-full bg-white/10 text-sm">
                TypeScript
              </span>

            </div>

          </div>

          {/* Project 2 */}

          <div className="rounded-3xl border border-dashed border-gray-700 p-10 flex flex-col justify-center">

            <span className="text-yellow-400 text-sm uppercase tracking-widest">
              Coming Soon
            </span>

            <h3 className="mt-4 text-3xl font-bold">
              New Projects Loading...
            </h3>

            <p className="mt-6 text-gray-500 leading-8">
              I'm constantly learning, experimenting, and building.
              More exciting products will soon become part of this collection.
            </p>

            <div className="mt-10">

              <div className="h-2 rounded-full bg-neutral-800 overflow-hidden">

                <div className="h-full w-2/3 bg-green-400 animate-pulse rounded-full"></div>

              </div>

              <p className="mt-4 text-sm text-gray-500">
                Progress never stops.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}