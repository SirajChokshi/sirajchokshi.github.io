import React, { Component } from 'react';
import './Tag.css';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimes as close } from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";

class Tag extends Component {
    state = {

    };

    render () {

        if(this.props.type === "DEL") {
            return (
                <span className="tag del" style={{backgroundColor: this.props.background, color: this.props.textColor, marginTop: "0.35em", cursor: "default"}} >
                    {this.props.message}
                    <a onClick={this.handleDelClick} style={{paddingLeft: "5px", color: this.props.textColor, cursor: "pointer"}}>
                        <FontAwesomeIcon icon={close} />
                    </a>
                </span>
            )
        }
        else
            return (
            <a onClick={this.handleAddClick} className="tag" style={{backgroundColor: this.props.background, color: this.props.textColor, cursor: "pointer"}}>
                {this.props.message}
            </a>
        )
    }

    handleAddClick = () => {
        this.props.addTag(this.props.message);
    };

    handleDelClick = () => {
        this.props.delTag(this.props.message);
    }

    // spaceToHyphen(str) {
    //     let out = "";
    //     try {
    //         for (let i = 0; i < str.length; i++) {
    //             if (str.charAt(i) === ' ') {
    //                 out = str.substring(0, i) + '-' + str.substring(i + 1, str.length);
    //             }
    //         }
    //     } catch(e) {
    //         console.error(e);
    //     }
    //     return out.toLowerCase();
    // }

}


const mapDispatchToProps = (dispatch) => {
    return {
        addTag: (tag) => { dispatch({type: 'ADD_TAG', tag: tag}) },
        delTag: (tag) => { dispatch({type: 'DEL_TAG', tag: tag}) }
    }
};

const mapStateToProps = (state) => ({
    tags: state.tags,
    search: state.search
});

export default connect(mapStateToProps, mapDispatchToProps)(Tag);