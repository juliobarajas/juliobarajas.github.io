import React, { Component } from 'react';
import '../CSS/About.css';
import image from '../assets/julioimage.jpg';
import {BiLogoLinkedinSquare} from 'react-icons/bi';
import {BiLogoGithub} from 'react-icons/bi';
import {BiSolidEnvelope} from 'react-icons/bi';
import {BiSolidFilePdf} from 'react-icons/bi';
import { IconContext } from 'react-icons';
import resume from '../assets/resume.pdf';

class About extends Component {
    render() {
        return (
            <div className="container about" id="about">
                <h2>About Me</h2>
                <div className="images">
                    <img className= "myimage" src={image} alt="personal" ></img>
                    <div className="socials">
                        <IconContext.Provider value={{size: 60}}>
                            <a href="https://www.linkedin.com/in/julio-barajas-020828271/" target="_blank" title="Linkedin"><BiLogoLinkedinSquare fill="#0A66C2"/></a>  
                            <a href="https://github.com/juliobarajas" target="_blank" title="GitHub"><BiLogoGithub fill="silver"/></a>
                            <a href={resume} title="Download Resume" download="Julio Barajas Resume.pdf"><BiSolidFilePdf fill="#F40F02"/></a>
                            <a href="#contact" title="E-mail"><BiSolidEnvelope fill="white"/></a>     
                        </IconContext.Provider>
                    </div>
                </div>
                
                <div className="mytext">
                    <h3>HEY THERE,</h3>
                    <h1>I'm Julio.</h1>
                    <p>I'm a software developer mainly focused on frontend development. My favorite things of the software development process are self-learning, problem-solving, and working in a collaborative team to communicate & share knowledge. As a recent Computer Science graduate from the University of Memphis I am committed to continuous learning & improvement. I am fluent in both English & Spanish. In my free time you can catch me playing all types of video games, reading up on the latest computer hardware & technology, or playing soccer with my friends. </p>
                </div>
            </div>
        );
    }
}

export default About;
