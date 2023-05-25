import logo from './logo.svg';
import react from 'react';
import image from './julioimage.jpg';
import './CSS/App.css';
import './CSS/Sidebar.css';
import Sidebar from './components/Sidebar';
import About from './components/About';

function App() {
  return (
    <div>
      <div className="header">
        <h1>Personal Website</h1>
      </div>

      <div className="leftcolumn">
        <Sidebar></Sidebar>
      </div>

      <div className="rightcolumn">
        <About></About>
      </div>
    </div>
  );
}

export default App;
