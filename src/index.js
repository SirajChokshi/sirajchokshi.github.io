import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './main.css';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';

const initialState = {
    search: "",
    tags: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SEARCH":
            state = {
                ...state,
                search: action.searchQuery
            };
            break;
        case "ADD_TAG":
            if (!state.tags.includes(action.tag)) {
                let list = new Array(state.tags.length + 1);
                for (let i = 0; i < list.length - 1; i++) {
                    list[i] = state.tags[i];
                }
                list[list.length - 1] = action.tag;
                state = {
                    ...state,
                    tags: list
                };
            }
            break;
        case "DEL_TAG":
            const index = state.tags.indexOf(action.tag);
            if (index > -1) {
                let list = new Array(state.tags.length - 1);
                for (let i = 0; i < index; i++) {
                    list[i] = state.tags[i];
                }
                for (let i = index + 1; i < state.tags.length; i++) {
                    list[i - 1] = state.tags[i];
                }
                state = {
                    ...state,
                    tags: list
                };
            }
            break;
        default:
            break;
    }
    return state;
};

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
