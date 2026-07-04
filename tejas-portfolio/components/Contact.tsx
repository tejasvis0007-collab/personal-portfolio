export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 min-h-screen flex items-center justify-center px-8 py-32"
    >
      <div className="max-w-3xl w-full text-center">

        <p className="uppercase tracking-[0.4em] text-green-400 text-sm">
          Contact
        </p>

        <h2 className="mt-6 text-5xl md:text-6xl font-black">
          Let's Build
          <br />
          Something Great.
        </h2>

        <p className="mt-8 text-gray-400 text-lg leading-8">
          Whether you're looking for a modern portfolio,
          business website, or simply want to connect,
          I'd love to hear from you.
        </p>

        <div className="mt-16 space-y-6">

          <div className="border border-gray-800 rounded-2xl p-6 bg-white/5 backdrop-blur-md hover:border-green-400 transition">
            <h3 className="text-xl font-semibold text-white">
              📧 Email
            </h3>

            <a
              href="mailto:tejas7b@gmail.com"
              className="mt-3 block text-green-400 hover:text-green-300 transition"
            >
              tejas7b@gmail.com
            </a>
          </div>

          <div className="border border-gray-800 rounded-2xl p-6 bg-white/5 backdrop-blur-md hover:border-pink-400 transition">
            <h3 className="text-xl font-semibold text-white">
              📷 Instagram
            </h3>

            <a
              href="https://instagram.com/tejasms007"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-pink-400 hover:text-pink-300 transition"
            >
              @tejasms007
            </a>
          </div>

        </div>

        <p className="mt-16 text-gray-500 text-sm">
          © 2026 Tejas M S • Built with Next.js & Tailwind CSS
        </p>

      </div>
    </section>
  );
}