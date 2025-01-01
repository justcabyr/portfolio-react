"use client";

const Hero = () => {
  const scrollToNextSection = () => {
    const skills = document.getElementById("skills");
    if (skills) {
      skills.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer passionate about building web applications. I specialize in
            JavaScript/TypeScript, React, Node.js, and modern web technologies.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            When I'm not coding, you can find me [your interests/hobbies].
          </p>
          <button
            onClick={scrollToNextSection}
            className="animate-bounce p-2 rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
            aria-label="Scroll to next section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
