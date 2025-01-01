const Hero = () => {
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
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            When I'm not coding, you can find me [your interests/hobbies].
          </p>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
