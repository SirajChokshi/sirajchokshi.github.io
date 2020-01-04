import React, { Component } from 'react';
import './Filter.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch as search, faTimes as close} from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import Tag from '../Tag/Tag';

class Filter extends Component {
    state = {

    };

    handleFilterChange = () => {
        const val = document.getElementById('search-bar').value;
        this.props.updateSearch(val);
    };

    render () {

        return (
            <form>
                <label htmlFor="search-bar"><FontAwesomeIcon icon={search} /></label>
                <input id="search-bar" onChange={this.handleFilterChange} type="search" placeholder="Filter (e.g. 'react app')" />
                <div className="tag-wrapper" style={{marginTop: "1em"}}>
                {
                    this.props.tags.map(post => (
                        <Tag
                            key={post}
                            message={post}
                            type="DEL"
                            background="black"
                            textColor="white"
                        />
                    ))
                }
                </div>
            </form>

        )

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (query) => { dispatch({type: 'SEARCH', searchQuery: query}) }
    }
};


const mapStateToProps = (state) => ({
    tags: state.tags,
    search: state.search
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);