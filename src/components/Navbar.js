import React, { Component } from 'react';
import '../CSS/Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className = "container navbar">
      <h3>Julio Barajas</h3> 
      <ul>
        <li><a class="active" href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="Experience">Experience</a></li>
        <li><a href="Projects">Projects</a></li> 
      </ul>
        
      </div>
    );
  }
}

export default Navbar;
