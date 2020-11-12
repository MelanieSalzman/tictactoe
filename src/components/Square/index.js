import React from 'react';
import square from './styles.css';
import classNames from 'classnames'

export const Square = ({value, onClick}) => {
    return (
        <button
            className={classNames({square})}
            onClick={onClick}>
            {value}
        </button>
    );
}
