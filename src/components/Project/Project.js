import React, { Component } from 'react';
import { projects } from "../../static/projects";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink as website} from "@fortawesome/free-solid-svg-icons";
import {faGithub as github} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './Project.css';
import Tag from "../Tag/Tag";

let background = "rgba(255, 204, 0, 0.2)";
let textColor = "rgba(230, 190, 0, 1)";

export default class Feed extends Component {
    state = {
        project: []
    };

    UNSAFE_componentWillMount() {
        for (let i = 0; i < projects.length; i++) {
            if (this.props.projectID === projects[i].id) {
                this.setState({project: projects[i]});
                break;
            }
        }
    }

    render () {

        switch(this.state.project.lang) {
            case "HTML":
                background = "rgba(245,140,39,0.3)";
                textColor = "rgb(228,154,52)";
                break;
            case "JavaScript":
                background = "rgba(255, 204, 0, 0.2)";
                textColor = "rgba(230, 190, 0, 1)";
                break;
            case "React":
                background = "rgba(28,158,247,0.3)";
                textColor = "rgb(28,130,218)";
                break;
            case "CSS":
                background = "rgba(78,6,145,0.2)";
                textColor = "rgb(127,41,193)";
                break;
            default:
                break;
        }

        return (
            <>
                <Link to='/'>&larr; Back to Projects</Link>
                <h2>{this.state.project.name}</h2>
                <p className="date">{this.state.project.date}</p>
                <p className="desc">{this.state.project.desc}</p>
                <a href={this.state.project.website} className="link"><FontAwesomeIcon icon={website} /> {this.parseURL(this.state.project.website)}</a>
                <a href={this.state.project.github} className="link"><FontAwesomeIcon icon={github} /> Repository</a>
                <div className="tag-wrapper">
                    {
                        this.state.project.tags.map(post => (
                            <Tag
                                key={post}
                                message={post}
                                textColor={textColor}
                                background={background}
                            />
                        ))
                    }
                </div>
            </>
        )
    }

    parseURL(website) {
        for (let i = 0; i < website.length; i++) {
            if (website.substring(i, i + 3) === '://') {
                return website.substring(i + 3, website.length);
            }
        }
    }
}