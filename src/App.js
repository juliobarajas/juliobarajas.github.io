import react from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <About></About>
        <Education></Education>
        <Skills></Skills>
    </div>
  );
}

export default App;
