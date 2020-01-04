import React, { Component } from 'react';
import RepoCard from './RepoCard/RepoCard';
import Tag from "./Tag/Tag";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";


let borderColor, langTextColor;

class Feed extends Component {
    state = {

    };

    isTagSelected(post) {
        for (let i = 0; i < this.props.tags.length; i++) {
            if (post.tags.includes(this.props.tags[i])) return true;
        }
        return false;
    }

    isQueryMatched(post) {
        const q = this.props.search.toLowerCase();
        if (post.name.toLowerCase().includes(q)) return true;
        else if (post.desc.toLowerCase().includes(q)) return true;
        else if (post.date.toLowerCase().includes(q)) return true;
        // else if (post.lang.toLowerCase().includes(q)) return true;
        return false;
    }


    render () {
        let results;
            if (this.props.tags.length > 0 && this.props.search.length > 0) {
                results = this.props.projects.filter((post) =>
                    this.isTagSelected(post) && this.isQueryMatched(post)
                );
            } else if (this.props.tags.length > 0) {
                results = this.props.projects.filter((post) =>
                    this.isTagSelected(post)
                );
            } else if (this.props.search.length > 0) {
                results = this.props.projects.filter((post) =>
                    this.isQueryMatched(post)
                );
            }
            else {
                results = this.props.projects;
            }

            return (
                <>
                <div style={{clear: "both", marginTop: "0.5em", minHeight: "480px"}}>
                    {results.map(post => (
                        <RepoCard
                            key={post.id}
                            id={post.id}
                            lang={post.lang}
                            name={post.name}
                            date={post.date}
                            desc={post.desc}
                            website={post.website}
                            github={post.github}
                            tags={post.tags}
                        />
                    ))}
                </div>
                <div style={{clear: "both"}}>
                </div>
                </>
            )
        }
}

const mapStateToProps = (state) => ({
    tags: state.tags,
    search: state.search
});

export default connect(mapStateToProps)(Feed);