import React, { Component } from 'react';
import '../CSS/Skills.css'

class Skills extends Component {
    render() {
        return (
            <div className="container skills" id="skills">
                <h2>My Skills</h2>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React.js</li>
                </ul>
                <ul>    
                    <li>Django</li>
                    <li>Bash</li>
                    <li>Git</li>
                    <li>MySQL</li>
                </ul>
                <h3 className="highlight">Certifications:</h3>
                <div className="certifications">
                    <a href="https://certificates.simnetonline.com/a78ddbab-de2d-4d54-8343-0272eef14f09" target ="_blank" ><i>McGraw Hill - Level 2: Excel Yellow Belt</i></a>
                    <p><i>April 2023</i></p>
                </div>
            </div>
        );
    }
}

export default Skills;
