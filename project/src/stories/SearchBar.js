import React, { Component } from 'react';
import './index.css';

class SearchBar extends Component {
    render() {
        return (
            <input className={"input"} type={"text"} placeholder={"Search"}>
            </input>
        )
    }
}

export default SearchBar;