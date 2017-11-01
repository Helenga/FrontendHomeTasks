import React, { Component } from 'react';
import './index.css';

class SetBetForm extends Component {
    render() {
        return (
            <form className={"setBetForm"}>
                <input type={"text"} className={"input"}/><br/>
                <input type={"value"} className={"input"}/><br/>
                <input type={"file"} className={"imageLoaderInput"}/>
            </form>
        )
    }
}

export default SetBetForm;