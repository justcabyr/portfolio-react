import './App.scss';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
