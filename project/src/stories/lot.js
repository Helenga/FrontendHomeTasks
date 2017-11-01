import React, { Component } from 'react';
import './index.css';

class Lot extends Component {
    render() {
        return (
            <div className={"lot"}>
                <image src="#" className={"lotImage"}>this.props.image</image>
                <a className={"lotName"}>this.props.title</a>
                <p className={"lotDescription"}>this.props.description</p>
            </div>
        )
    }
}

export default Lot;