import React, { Component } from 'react';
import '../CSS/About.css';
import image from '../julioimage.jpg';

class About extends Component {
    render() {
        return (
            <div className="card">
                <h2>About Me</h2>
                <img src={image} ></img>
                <p>As a recent graduate from the University of Memphis with a degree in Computer Science, I am eager to begin my career in the technology industry. I enjoy coding and problem-solving, and I am excited to work collaboratively with others to create innovative solutions. My experience working on group projects has strengthened my ability to communicate effectively and work efficiently in a team environment. I am committed to continuous learning and improvement, and I am confident that my skills and enthusiasm will make a valuable contribution to any team.</p>
            </div>
        );
    }
}

export default About;
