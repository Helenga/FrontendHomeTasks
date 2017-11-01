import React, { Component } from 'react';
import './index.css';

class NavBar extends Component {
    render() {
        return (
            <div className={"navBar"}>
                {this.props.items.map((item, index) =>
                    <a href={item.link} key={index}>{item.label} </a>
                )}
            </div>
        )
    }
}

export default NavBar;