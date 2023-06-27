
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div className='bg-gradient-to-tr from-[#432848] to-[#211C30] h-full'>
      <Home />
      <SocialLinks />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
