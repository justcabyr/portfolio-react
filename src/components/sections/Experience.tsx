const Experience = () => {
  const experiences = [
    {
      company: "Tech Corp",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description:
        "Led development of enterprise-scale applications using Next.js and Node.js. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      company: "Startup Inc",
      position: "Frontend Developer",
      period: "2020 - 2022",
      description:
        "Built responsive web applications using React and TypeScript. Improved application performance by 40% through code optimization.",
    },
    {
      company: "Digital Agency",
      position: "Web Developer",
      period: "2018 - 2020",
      description:
        "Developed custom websites and e-commerce solutions. Collaborated with designers to implement pixel-perfect interfaces.",
    },
    // Add more experiences
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-blue-600 pl-4">
              <h3 className="text-xl font-bold">{exp.position}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
