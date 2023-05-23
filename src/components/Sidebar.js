import React from 'react';
import '../CSS/Sidebar.css';
import { slide as Menu } from 'react-burger-menu';


export default props => {
  return (
    <Menu width={200}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/education">
        Education
      </a>
      <a className="menu-item" href="/experience">
        Experience
      </a>
      <a className="menu-item" href="/projects">
        Software Projects
      </a>
      <a className="menu-item" href="/skills">
        Skills & Abilities
      </a>
      
    </Menu>
  );
};