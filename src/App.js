import logo from './logo.svg';
import react from 'react';
import './CSS/App.css';
import './CSS/Sidebar.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
        <h1>Personal Website</h1>
        <h2>Check out the different sections with the sidebar!</h2>
      </div>  
    </div>
  );
}

export default App;
