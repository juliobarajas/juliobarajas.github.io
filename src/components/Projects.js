import React, { Component } from 'react';
import '../CSS/Projects.css';
import parser from '../assets/parser.jpg';
import coffeemaker from '../assets/coffeemaker.jpg';
import sudoku from '../assets/sudoku.jpg';


class Projects extends Component {
    render() {
        return (
            <div className="container projects" id="projects">
                <h2>Projects</h2> 
                <div className="background">                        
                    <img src={parser} alt="parser" className="img1"></img>  
                    <div className="desc">
                        <h3><i className="highlight">English Grammar Parser</i></h3>
                        <p>Parses uploaded or inputted grammar using regular expressions and returns a bar graph of the data collected from the user's input. Built using: Python, HTML, CSS, Django, Parsimonious Parser, and Natural Language Toolkit.</p>
                    </div>
                    <div className="links">
                        <a href="https://juliobarajas.pythonanywhere.com/dashboard/" target="_blank">Live</a> 
                        <a href="https://github.com/juliobarajas/English-Grammar-Parser" target="_blank">Repo</a>
                    </div>
                </div>    
                <div className="background">
                    <img src={coffeemaker} alt="coffee maker" className="img2"></img>
                    <div className="desc">
                        <h3><i className="highlight">Coffee Maker Project </i></h3>
                        <p>Program that mimics functionality of a real life coffee maker using Java and Object Oriented Programming &#40;OOP&#41;.</p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/juliobarajas/Coffeemaker-Project/blob/master/README.md" target="_blank">README</a>
                        <a href="https://github.com/juliobarajas/Coffeemaker-Project" target="_blank">Repo</a>
                    </div>       
                </div>
                <div className="background">
                    <img src={sudoku} alt="Sudoku" className="img3"></img>
                    <div className="desc">
                        <h3><i className="highlight">Java Program Collection</i></h3>
                        <p>Collection of java programs I've written featuring Sudoku, Chess, MasterCard validator, ISBN book checker, and more.</p>
                    </div>
                    <div className="links">
                        <a href="https://github.com/juliobarajas/Comp-Java-Programs/tree/master/Collection" target="_blank">Repo</a>
                    </div>       
                </div>

            </div>
        );
    }
}

export default Projects;
