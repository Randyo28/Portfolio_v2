import Image from "next/image";

const portfolioProjects = [
  {
    id: 1,
    title: "Xanders Barbershop",
    img: "/next.svg",
    link: "https://xandersbarbershop.netlify.app/",
    description: "Created using Html, Css, Js, Gsap"
  },
  {
    id: 2,
    title: "Punk-Beer",
    img: "/vercel.svg",
    link: "https://punk-beer-one.vercel.app/",
    description: "Created using React, Punk API, Vercel"
  },
  {
    id: 3,
    title: "Rick and Morty Website",
    img: "/globe.svg",
    link: "https://rick-morty-randyo28.vercel.app/",
    description: "Created using React, Rick and Morty API, Vercel"
  },
  {
    id: 4,
    title: "Analytic Solutions",
    img: "/next.svg",
    link: "https://analytic-solutions.netlify.app/",
    description: "Created using Html, Css, Js, Netlify"
  },
  {
    id: 5,
    title: "Secret Family Recipe",
    img: "/vercel.svg",
    link: "https://secret-family-recipe-nu.vercel.app/",
    description: "Created using React, Vercel"
  },
  {
    id: 6,
    title: "Spacestagram",
    img: "/globe.svg",
    link: "https://spacestagram-spfy.vercel.app/",
    description: "Created using React, NASA API, Vercel"
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="w-full fixed top-0 left-0 bg-white/80 dark:bg-black/80 backdrop-blur z-10 shadow-sm">
        <ul className="flex justify-center gap-8 py-4 text-lg font-semibold">
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#resume" className="hover:text-blue-600 transition">Resume</a></li>
          <li><a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>
      </nav>

      <main className="flex flex-col items-center gap-32 pt-24 pb-16 px-4 max-w-5xl mx-auto">
        {/* About Section */}
        <section id="about" className="w-full flex flex-col items-center scroll-mt-24">
          <div className="w-full max-w-5xl bg-gray-900 dark:bg-black rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg">
            {/* Left: Image */}
            <div className="flex-shrink-0">
              <Image
                src="/Randy_updated_photo copy.png"
                alt="Randy Ortiz photo"
                width={260}
                height={260}
                className="rounded-lg object-cover border-4 border-gray-800 shadow-md"
              />
            </div>
            {/* Right: Info */}
            <div className="flex-1 text-left">
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-extrabold mb-2">About Me</h1>
                <div className="w-16 h-1 bg-blue-600 rounded mb-4 mx-auto md:mx-0"></div>
                <h2 className="text-blue-500 text-lg font-semibold mb-2">Who am I?</h2>
                <h3 className="text-2xl font-bold mb-2">I'm Randy Ortiz, Web Developer</h3>
                <p className="text-gray-300 mb-4">
                  I'm a Software Engineer with over 4 years of professional experience, specializing in building impactful and scalable software solutions. My passion lies in leveraging technology to solve real-world problems and deliver value to users. I thrive in collaborative environments and am always eager to learn and adopt new technologies. Outside of work, I enjoy expanding my skill set, taking long walks with my dogs, and exploring new places I've never been to.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-400 text-sm mb-4">
                  <div><span className="font-semibold text-gray-200">Name:</span> Randy Ortiz</div>
                  <div><span className="font-semibold text-gray-200">Email:</span> <a href="mailto:Randyortiz28@gmail.com" className="text-blue-400 underline">Randyortiz28@gmail.com</a></div>
                  <div><span className="font-semibold text-gray-200">Specialty:</span> Software Engineering</div>
                  <div><span className="font-semibold text-gray-200">From:</span> Howard Beach, NY</div>
                </div>
                {/* Social Icons */}
                <div className="flex gap-4 mt-2">
                  {/* Facebook */}
                  <a href="https://www.facebook.com/Randy.ortiz28" className="text-gray-400 hover:text-blue-500" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/randy-ortiz-6a8027193/" className="text-gray-400 hover:text-blue-500" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/Randyo28" className="text-gray-400 hover:text-blue-500" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.563.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/randyo28/?hl=en" className="text-gray-400 hover:text-blue-500" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="https://x.com/Randyo28" className="text-gray-400 hover:text-blue-500" aria-label="X" target="_blank" rel="noopener noreferrer">
                    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 2.47A12 12 0 0 0 2.47 17.53 12 12 0 0 0 17.53 2.47zm-1.06 1.06A10 10 0 1 1 3.53 18.47 10 10 0 0 1 16.47 3.53zm-7.07 2.12l3.54 4.95 3.54-4.95h-7.08zm8.48 1.41l-3.54 4.95 3.54 4.95v-9.9zm-9.9 0v9.9l3.54-4.95-3.54-4.95zm1.41 8.48l4.95-3.54 4.95 3.54h-9.9z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="w-full scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4 text-center">Resume</h2>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-gray-700 dark:text-gray-200 text-center">
            <p>My professional experience, education, and skills will be listed here soon.</p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="w-full scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {portfolioProjects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-contain bg-gray-50 dark:bg-gray-800"
                />
                <div className="p-4 text-center">
                  <h6 className="font-medium text-lg mb-1">{project.title}</h6>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm block mb-1">View Website Here</a>
                  {project.description && (
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{project.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full scroll-mt-24">
          <h2 className="text-3xl font-semibold mb-4 text-center">Contact</h2>
          <form
            className="flex flex-col gap-4 max-w-md mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow"
            action={`mailto:Randyortiz28@gmail.com`}
            method="POST"
            encType="text/plain"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={4}
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-semibold"
            >
              Send
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Or email me directly at <a href="mailto:Randyortiz28@gmail.com" className="underline">Randyortiz28@gmail.com</a>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
