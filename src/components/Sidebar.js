import React from 'react';
import '../CSS/Sidebar.css';

export default props => {
  return (
  <ul>
    <li><a class="active" href="About">About Me</a></li>
    <li><a href="Education">Education</a></li>
    <li><a href="Projects">Personal Projects</a></li>
    <li><a href="Experience">Experience</a></li>
    <li><a href="Skills">Skills & Abilities</a></li>
  </ul>
  );
};