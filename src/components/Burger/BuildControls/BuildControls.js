import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import './BuildControls.css';

const controls = [
    {label: 'SALAD', type: 'salad', cost: 4},
    {label: 'BACON', type: 'bacon', cost: 5},
    {label: 'CHEESE', type: 'cheese', cost: 5},
    {label: 'MEAT', type: 'meat', cost: 8}
];

const buildControls = (props) => {
    let controlElements = controls.map(
        (control) => (
            <BuildControl
                key={control.type}
                label={control.label}
                adder={(comment) => props.adder(control.type, comment)}
                remover={() => props.remover(control.type)}
                disableLower={props.ingredients[control.type] === 0}
            />
        )
    );

    return (
        <div className="BuildControls">
            <p>Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {controlElements}
            <button onClick={props.order} className="OrderButton" disabled={props.orderDisable()}>ORDER NOW</button>
        </div>
    );
};

export default buildControls;