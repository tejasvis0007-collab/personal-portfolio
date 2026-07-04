export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}

        <a
          href="#"
          className="text-2xl font-black tracking-wide hover:text-green-400 transition"
        >
          Tejas<span className="text-green-400">.</span>
        </a>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-10 text-gray-300">

          <a
            href="#about"
            className="relative group transition"
          >
            About

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#projects"
            className="relative group transition"
          >
            Projects

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>

          </a>

          <a
            href="#contact"
            className="relative group transition"
          >
            Contact

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-400 transition-all duration-300 group-hover:w-full"></span>

          </a>

        </div>

        {/* GitHub Button */}

        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block border border-green-400 text-green-400 px-5 py-2 rounded-full hover:bg-green-400 hover:text-black transition-all duration-300"
        >
          GitHub
        </a>

      </div>

    </nav>
  );
}