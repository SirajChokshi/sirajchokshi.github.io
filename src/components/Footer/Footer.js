import React, { Component } from 'react';
import './Footer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub as github, faLinkedin as linkedin, faDribbble as dribbble } from '@fortawesome/free-brands-svg-icons';

export default class Footer extends Component {
    state = {

    };

    render () {

        return (
            <footer>
                <p>
                    <a href="https://github.com/sirajchokshi" target="_blank" rel="noreferrer noopener" style={{backgroundColor: "#121212", color: "white"}}><FontAwesomeIcon icon={github} /> Github</a> &nbsp;
                    <a href="https://linkedin.com/in/sirajchokshi" target="_blank" rel="noreferrer noopener" style={{backgroundColor: "#dbf3ff", color: "#0077b5"}}><FontAwesomeIcon icon={linkedin} /> LinkedIn</a> &nbsp;
                    <a href="https://dribbble.com/sirajchokshi" target="_blank" rel="noreferrer noopener" style={{backgroundColor: "#f7bcd3", color: "#cc2d6b"}}><FontAwesomeIcon icon={dribbble} /> Dribbble</a>
                    <span id="copy">&copy; Copyright {(new Date()).getFullYear()} <a href="https://sirajchokshi.com">Siraj Chokshi</a></span>
                </p>
            </footer>
        )
    }

}