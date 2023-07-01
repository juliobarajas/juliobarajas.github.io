import React from 'react';
import '../CSS/Navbar.css';

export default props => {
  return (
  <ul className="container">
    <li><a href="Projects">Projects</a></li>
    <li><a href="Experience">Experience</a></li>
    <li><a href="Skills">Skills</a></li>
    <li><a href="Education">Education</a></li>
    <li><a class="active" href="About">About</a></li>
    <h3 className="name">Julio Barajas</h3>
  </ul>
  );
};