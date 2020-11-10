import React from 'react';
import '../styles/index.css';

export const Square = (props) => {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    );
}
