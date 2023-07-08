import React, { Component } from 'react';
import '../CSS/Experience.css';
import ppexample from '../assets/ppexample.jpg';
import ppgraph from '../assets/ppgraph.jpg';

class Experience extends Component {
    render() {
        return (
            <div className="container experience" id="experience">
                <h2>Experience</h2>
                <div className="job">
                    <h3><i className="highlight">PeerPresents Technical Advisor</i></h3> 
                    <h3><i>January 2023 - May 2023</i></h3>
                </div>    
                <h3><i>The University of Memphis</i></h3>
                <div className="summary">
                    <h3>What is PeerPresents?</h3>
                    <p>PeerPresents is a web-based system for in-class peer feedback during student presentations. Peer feedback systems enable students to get feedback without substantially burdening the instructor. PeerPresents is a novel system for in-class peer review where students can quickly exchange feedback on projects without being burdened by additional work outside of class.</p>
                    <h3>Example Student Presentation</h3>
                    <img src={ppexample} alt="PeerPresents example"></img>
                    <h3>My Role</h3>
                    <p>Advise and help a team of students during the development of data display feature for instructor accounts on the PeerPresents website under the project leadership of Dr. Cook</p>
                    <ul>
                        <li>Developed presentation and pitched the project to classroom of computer science students at The University of Memphis to gather together a team of 3 other students.</li>
                        <li>Served as an advisor to students working on the project by providing instruction, explaining codebase, and helping developers where needed. </li>
                        <li>Took leadership by meeting weekly with Dr. Cook to communicate team progress and any requests from her back to the team, led weekly team code reviews, and reviewed team pull requests.</li>
                    </ul>
                    <h3>Outcome</h3>
                    <img src={ppgraph} alt="PeerPresents Graph"></img>
                    <p>Resulted in functioning data page for instructors where they can create datasets made up of specific student presentations to view student statistics. Data shown is based off chosen student presentations in the dataset and is displayed in an easy to read bar graph. Instructors are also able to change what kind of data they are viewing.</p>
                    <p className="highlight">Leveraged knowledge in: Full stack web development, microservice architecture, Git, React.js, JSX, HTML, CSS, Javascript, MongoDB.</p>
                </div>
            </div>
        );
    }
}

export default Experience;
