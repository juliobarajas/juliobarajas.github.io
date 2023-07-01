import react from 'react';
import './CSS/Navbar.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <About></About>
      </div>

    </div>
  );
}

export default App;
