import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center px-6 lg:px-20"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto">

        {/* LEFT SIDE */}

        <div>
          <p className="uppercase tracking-[0.4em] text-green-400 text-sm">
            ● Building in Public
          </p>

          <h1 className="mt-6 text-6xl lg:text-8xl font-black leading-none">
            Tejas
            <br />
            M S
          </h1>

          <h2 className="mt-8 text-3xl lg:text-5xl font-bold text-gray-300 leading-tight">
            Building before
            <br />
            I have the title.
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            Engineering Aspirant • Developer • Builder
            <br />
            <br />
            Documenting my journey from student to software engineer,
            building meaningful products and learning in public.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#about"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]"
            >
              ✨ Explore
            </a>

            <a
              href="https://github.com/tejasvis0007-collab"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-700 px-8 py-4 rounded-full transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:scale-105"
            >
              GitHub
            </a>

          </div>

          {/* Status */}

          <div className="mt-16 flex items-center gap-3 text-gray-500">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>

            <span>Currently building my future.</span>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">
          <div className="relative">

            {/* Green Glow */}

            <div className="absolute inset-0 rounded-full bg-green-400/20 blur-3xl animate-pulse"></div>

            {/* Profile Image */}

            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border border-gray-700 shadow-2xl">

              <Image
                src="/tejas.png"
                alt="Tejas M S"
                fill
                priority
                className="object-cover"
              />

            </div>

          </div>
        </div>

      </div>

      {/* Scroll Indicator */}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
        ↓ Scroll
      </div>
    </section>
  );
}