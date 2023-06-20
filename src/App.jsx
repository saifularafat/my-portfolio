
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';
import SocialLinks from './components/SocialLinks';

const App = () => {
  return (
    <div>
      <Home />
      <SocialLinks />
      <div className='bg-gradient-to-tr from-[#432848] to-[#211C30] h-full'>
        <About />
        <Project />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default App;
