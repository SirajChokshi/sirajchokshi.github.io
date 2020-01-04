import React, { Component } from 'react';
import './RepoCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub as github } from '@fortawesome/free-brands-svg-icons';
import { faLink as website } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tag from "../Tag/Tag";

let borderColor = "rgba(255, 204, 0, 0.2)";
let langTextColor = "rgba(230, 190, 0, 1)";

export default class RepoCard extends Component {
    state = {
        tags: this.props.tags
    };

    render () {
        switch(this.props.lang) {
            case "HTML":
                borderColor = "#e6937c";
                langTextColor = "#873a0c";
                break;
            case "JavaScript":
                borderColor = "#ffe88c";
                langTextColor = "#857910";
                break;
            case "React":
                borderColor = "rgba(28,158,247,0.3)";
                langTextColor = "rgb(28,130,218)";
                break;
            case "CSS":
                borderColor = "rgba(78,6,145,0.2)";
                langTextColor = "rgb(127,41,193)";
                break;
            default:
                break;
        }

        return (
            <section className="repo-card" style={{borderLeftColor: borderColor}}>
                <span className="lang" style={{color: langTextColor}}>{this.props.lang}</span>
                <div className="content">
                    {/*<Link to={"/" + this.props.id}>*/}
                        <h3 className="name">{this.props.name}</h3>
                    <p className="date">{this.props.date}</p>
                    <p className="desc">{this.props.desc}</p>
                    {/*</Link>*/}
                    {this.props.website ? <a href={this.props.website} style={{marginRight: "5px"}} className="link"><FontAwesomeIcon icon={website}/> Website</a> : null}
                    {this.props.github ? <a href={this.props.github} className="link"><FontAwesomeIcon icon={github} /> Github</a> : null}
                    <div className="tag-wrapper">
                        {
                            this.props.tags.map(post => (
                                <Tag
                                    key={post}
                                    message={post}
                                    textColor={langTextColor}
                                    background={borderColor}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }

}