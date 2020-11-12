import React, { useState } from 'react';
import './styles.css';
import { Board } from '../Board/index'

export const Game = () => {

    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }])

    const handleClick = (i) => {

        const historyCopy = history.slice(0, stepNumber + 1);
        const current = historyCopy[historyCopy.length - 1];
        const squaresCopy = current.squares.slice();

        if (calculateWinner(squaresCopy) || squaresCopy[i]) {
            return;
        }

        squaresCopy[i] = xIsNext ? 'X' : 'O';

        setHistory(historyCopy.concat([{ squares: squaresCopy }]))
        setStepNumber(historyCopy.length)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (step) => {
        setStepNumber(step)
        setXIsNext((step % 2) === 0)
    }

    const historyCopy = history;
    const current = historyCopy[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = historyCopy.map((step, move) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

const calculateWinner = (squaresText) => {
    const boardLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],];
    const winnerLine = boardLines.find(line => checkIfSquaresTextsAreEqual(line, squaresText))
    return getTextOfWinner(winnerLine, squaresText)
}

const checkIfSquaresTextsAreEqual = (line, squaresText) => {
    const [firstPosition, secondPosition, thirdPosition] = line
    return (squaresText[firstPosition] === squaresText[secondPosition] && squaresText[firstPosition] === squaresText[thirdPosition]) ? true : false
}

const getTextOfWinner = (winnerLine, squaresText) => {
    return (winnerLine !== undefined) ? squaresText[winnerLine[0]] : null
}



