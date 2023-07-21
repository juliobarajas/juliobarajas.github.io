import React, { Component } from 'react';
import '../CSS/Skills.css'
import {BiLogoJava} from 'react-icons/bi';
import {BiLogoPython} from 'react-icons/bi';
import {BiLogoHtml5} from 'react-icons/bi';
import {BiLogoCss3} from 'react-icons/bi';
import {BiLogoJavascript} from 'react-icons/bi';
import {BiLogoReact} from 'react-icons/bi';
import {BiLogoGit} from 'react-icons/bi';
import {BiLogoDjango} from 'react-icons/bi';
import {RiFileExcel2Line} from 'react-icons/ri';

class Skills extends Component {
    render() {
        return (
            <div className="container skills" id="skills">
                <h2>My Skills</h2>
                <ul>
                    <li>Java
                        <li><BiLogoJava size={60} fill="#5382a1"/></li>
                    </li>
                    <li>Python
                        <li><BiLogoPython size={60} fill="#4B8BBE" /></li>
                    </li>    
                    <li>HTML
                        <li><BiLogoHtml5 size={60} fill="#e34c26" /></li>
                    </li>  
                    <li>CSS
                        <li><BiLogoCss3 size={60} fill="#264de4" /></li>
                    </li>
                    <li>Javascript
                        <li><BiLogoJavascript size={60} fill="#F0DB4F" /></li>
                    </li>
                    <li>React.js
                        <li><BiLogoReact size={60} fill="#61DBFB" /></li>
                    </li>  
                    <li>Django
                        <li><BiLogoDjango size={60} fill="#092e20" /></li>
                    </li>
                    <li>Git
                        <li><BiLogoGit size={60} fill="#F1502F" /></li>
                    </li>
                </ul>
                <h3 className="highlight">Certifications:</h3>
                <div className="certifications">
                    <a href="https://certificates.simnetonline.com/a78ddbab-de2d-4d54-8343-0272eef14f09" target ="_blank" ><i>McGraw Hill - Level 2: Excel Yellow Belt</i>  <RiFileExcel2Line size={40} fill="#1D6F42"/></a>
                    <p><i>April 2023</i></p>
                    
                </div>

                  
            </div>
        );
    }
}

export default Skills;
