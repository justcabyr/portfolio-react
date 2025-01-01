const Experience = () => {
  const experiences = [
    {
      company: "Company Name",
      position: "Senior Developer",
      period: "2020 - Present",
      description: "Led development of multiple web applications using React and Node.js",
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
