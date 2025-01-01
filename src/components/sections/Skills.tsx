import Image from "next/image";

const Skills = () => {
  const technologies = [
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "AWS", icon: "devicon-amazonwebservices-original colored" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <i className={`${tech.icon} text-4xl mb-1`}></i>
              <span className="text-xs">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
