import React, { Component } from 'react';
import '../CSS/Projects.css';
import parser from '../assets/parser.jpg';
import coffeemaker from '../assets/coffeemaker.jpg';


class Projects extends Component {
    render() {
        return (
            <div className="container projects" id="projects">
                <h2>Projects</h2> 
                <a href="https://github.com/juliobarajas/English-Grammar-Parser" target="_blank" className="background">
                    <img src={parser} alt="parser" className="img1"></img>  
                    <div className="desc">
                        <h3><i className="highlight">English Grammar Parser</i></h3>
                        <p>Built using: Python, HTML, CSS, Django, and Parsimonious Parser</p>
                    </div>
                </a>  
                <a href="https://github.com/juliobarajas/Coffeemaker-Project" target="_blank" className="background">
                    <img src={coffeemaker} alt="coffee maker" className="img2"></img>
                    <div className="desc">
                        <h3><i className="highlight">Coffee Maker Project </i></h3>
                        <p>Built using: Java, Object Oriented Programming</p>
                    </div>    
                </a>   
                <a href="https://github.com/juliobarajas/Comp-Java-Programs/tree/master/Collection" target="_blank" className="other">
                    <h3><i className="highlight">Other Java Programs I've Written</i></h3>   
                </a>
            </div>
        );
    }
}

export default Projects;
