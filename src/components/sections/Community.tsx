import Image from "next/image";

const Community = () => {
  const communityWork = [
    {
      title: "Open Source",
      description:
        "Active contributor to React and Next.js ecosystem. Maintained several popular open-source packages with over 1M downloads.",
      image: "/community/opensource.png",
      link: "https://github.com/yourusername",
    },
    {
      title: "Tech Community",
      description:
        "Regular speaker at tech conferences and local meetups. Organized workshops on React, TypeScript, and web development.",
      image: "/community/speaking.png",
      link: "https://meetup.com/yourusername",
    },
  ];

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Community Involvement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityWork.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative h-64">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">{item.description}</p>
                <a href={item.link} className="text-blue-600 hover:underline text-lg">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
