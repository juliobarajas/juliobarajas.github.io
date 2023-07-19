import react from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div id="page">
        <Navbar></Navbar>
        <div id="body">
          <About/>
          <Skills/>
          <Education/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
    </div>
  );
}

export default App;
