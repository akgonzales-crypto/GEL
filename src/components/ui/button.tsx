import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fff0f5] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between bg-[#ffb6c1] px-4 shadow-md sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/next.svg"
            alt="Logo"
            width={30}
            height={30}
            className="rounded-full bg-white p-1"
          />
          <span className="text-xl font-bold text-white">My Personal Site</span>
        </div>
        <nav className="hidden sm:flex gap-4">
          <a href="#home" className="text-white hover:underline">
            Home
          </a>
          <a href="#about" className="text-white hover:underline">
            About
          </a>
          <a href="#education" className="text-white hover:underline">
            Education
          </a>
          <a href="#hobbies" className="text-white hover:underline">
            Hobbies
          </a>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-start py-8 space-y-12 w-full">
        {/* Home Section */}
        <section id="home" className="w-full max-w-2xl rounded-xl bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#ff69b4] mb-4">Home</h2>
          <p className="text-gray-700">
            Welcome to my personal website! Here you can learn about me, my education, hobbies, and how to get in touch.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="w-full max-w-2xl rounded-xl bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#ff69b4] mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi! I'm [Your Name], a passionate developer and lifelong learner. I enjoy building modern web applications and exploring new technologies.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="w-full max-w-2xl rounded-xl bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#ff69b4] mb-4">Education</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Bachelor's Degree in [Your Major] - [University Name]</li>
            <li>High School - [School Name]</li>
            <li>Certifications: [Relevant Certifications]</li>
          </ul>
        </section>

        {/* Hobbies Section */}
        <section id="hobbies" className="w-full max-w-2xl rounded-xl bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#ff69b4] mb-4">Hobbies</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Reading and learning new things</li>
            <li>Coding personal projects</li>
            <li>Photography and art</li>
            <li>Sports and outdoor activities</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full max-w-2xl rounded-xl bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold text-[#ff69b4] mb-4">Contact</h2>
          <ul className="text-gray-700 space-y-1">
            <li>Email: your.email@example.com</li>
            <li>Phone: +123-456-7890</li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-[#ff69b4] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/yourprofile
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/yourusername"
                className="text-[#ff69b4] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/yourusername
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="w-full py-4 bg-[#ffb6c1] text-center text-white">
        &copy; 2025 My Personal Website
      </footer>
    </div>
  );
}
