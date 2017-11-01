import React, { Component } from 'react';
import Lot from './lot';
import './index.css';

const lots = [Lot];

class LotList extends Component {
    render() {
        return (
            <div className={"lotList"}>
                {
                    lots.map((item) => item)
                }
            </div>
        )
    }
}

export default LotList;