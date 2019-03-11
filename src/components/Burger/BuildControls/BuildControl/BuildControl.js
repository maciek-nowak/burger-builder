import React from 'react';
import './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="Less" onClick={props.remover} disabled={props.disableLower}>Less</button>
            <button className="More" onClick={() => props.adder("Fun")}>More</button>
        </div>
    );
}

export default buildControl;