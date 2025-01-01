import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Community from "@/components/sections/Community";
import Contact from "@/components/sections/Contact";

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Community />
      <Contact />
    </div>
  );
};

export default Home;
