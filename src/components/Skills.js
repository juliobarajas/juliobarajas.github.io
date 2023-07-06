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
            </div>
        );
    }
}

export default Skills;
