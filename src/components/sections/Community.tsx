const Community = () => {
  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Community Involvement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Open Source</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Description of your open source contributions and involvement
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Tech Community</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Description of your community involvement, speaking engagements, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
