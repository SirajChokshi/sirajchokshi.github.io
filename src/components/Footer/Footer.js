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
                    <a href="https://github.com/sirajchokshi" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={github} /> Github</a> &nbsp;|&nbsp;&nbsp;
                    <a href="https://linkedin.com/in/sirajchokshi" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={linkedin} /> LinkedIn</a> &nbsp;|&nbsp;&nbsp;
                    <a href="https://dribbble.com/sirajchokshi" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={dribbble} /> Dribbble</a>
                    <span id="copy">&copy; Copyright {(new Date()).getFullYear()}. <a href="https://sirajchokshi.com">Siraj Chokshi</a></span>
                </p>
            </footer>
        )
    }

}