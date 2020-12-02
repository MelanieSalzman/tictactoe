const calculateWinnerLine = squares => {
  const possibleWinnerLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

  return possibleWinnerLines.find(line => {
    const [first, second, third] = line

    return (squares[first] !== null && squares[first] === squares[second] && squares[first] === squares[third])
  })
}

export default calculateWinnerLine
