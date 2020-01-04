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
        for (let i = 0; i < post.tags.length; i++) {
            if (post.tags[i].toLowerCase().includes(q)) return true;
        }
        return post.lang.toLowerCase().includes(q) || post.date.toLowerCase().includes(q) || post.desc.toLowerCase().includes(q) || post.name.toLowerCase().includes(q);
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
                <div className="repo-card-wrapper" style={{clear: "both", marginTop: "1.5em", minHeight: "53vh"}}>
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