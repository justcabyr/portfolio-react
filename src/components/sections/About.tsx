const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="max-w-3xl">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a full stack developer with X years of experience building web applications. I
            specialize in JavaScript/TypeScript, React, Node.js, and modern web technologies.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me [your interests/hobbies].
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
