import React, { Component } from 'react';
import '../CSS/Navbar.css'
import { fallDown as Menu } from 'react-burger-menu'

class Navbar extends Component {
  render() {
    return (
       
      <div className = "container navbar">
        <h3>Julio Barajas</h3> 
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li> 
      </ul>
      <div className="container mobile">
        <Menu isOpen={false} width={'50%'} noOverlay >
          <a href="#about" className="menu-item">About</a>
          <a href="#education" className="menu-item">Education</a>
          <a href="#skills" className="menu-item">Skills</a>
          <a href="#experience" className="menu-item">Experience</a>
          <a href="#projects" className="menu-item">Projects</a>
        </Menu>
      </div>

      </div>
       
      
    );
  }
}

export default Navbar;
