import React, { Component } from 'react';
import '../CSS/About.css';
import image from '../julioimage.jpg';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

class About extends Component {
    render() {
        return (
            <div className="container">
                <img className= "myimage" src={image} alt="personal" ></img>
                <div className="socials">
                    <a href="https://www.linkedin.com/in/julio-barajas-020828271/" target="_blank" title="Linkedin"><FaLinkedin size={50}/></a>  
                    <a href="https://github.com/juliobarajas" target="_blank" title="GitHub"><FaGithub size={50}/></a>
                    <a href="email" title="E-mail"><MdEmail size={50}/></a> 
                </div>
                
                <div className="mytext">
                    <h3>HEY THERE,</h3>
                    <h1>I'm Julio.</h1>
                    <p>As a recent graduate from the University of Memphis with a degree in Computer Science, I am eager to begin my career in the technology industry. I enjoy coding and problem-solving, and I am excited to work collaboratively with others to create innovative solutions. My experience working on group projects has strengthened my ability to communicate effectively and work efficiently in a team environment. I am committed to continuous learning and improvement, and I am confident that my skills and enthusiasm will make a valuable contribution to any team.</p>
                </div>
            </div>
        );
    }
}

export default About;
