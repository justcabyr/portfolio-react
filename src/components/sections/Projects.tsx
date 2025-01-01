import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A full-stack web application built with Next.js and TypeScript",
      tech: ["React", "Node.js", "TypeScript"],
      link: "#",
      image: "/projects/project1.png",
    },
    {
      title: "Project 2",
      description: "Mobile-first e-commerce platform with real-time updates",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#",
      image: "/projects/project2.png",
    },
    {
      title: "Project 3",
      description: "AI-powered data visualization dashboard",
      tech: ["Python", "TensorFlow", "D3.js"],
      link: "#",
      image: "/projects/project3.png",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-48">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-600 hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
