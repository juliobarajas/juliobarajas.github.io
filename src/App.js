import logo from './logo.svg';
import react from 'react';
import image from './julioimage.jpg';
import './CSS/App.css';
import './CSS/Sidebar.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <div class="header">
        <h1>Personal Website</h1>
        
      </div>
      <div class="leftcolumn">
        <Sidebar></Sidebar>
      </div>
      
      <div class="rightcolumn">
        This is the right?
      </div>
    </div>
  );
}

export default App;
