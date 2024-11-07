import { useState } from 'react';

function Sqaure({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Sqaure value={squares[0]} onSquareClick={handleClick}/>
        <Sqaure value={squares[1]} onSquareClick={handleClick}/>
        <Sqaure value={squares[2]} onSquareClick={handleClick}/>
      </div>
      <div className="board-row">
        <Sqaure value={squares[3]} onSquareClick={handleClick}/>
        <Sqaure value={squares[4]} onSquareClick={handleClick}/>
        <Sqaure value={squares[5]}/>
      </div>
      <div className="board-row">
        <Sqaure value={squares[6]} onSquareClick={handleClick}/>
        <Sqaure value={squares[7]} onSquareClick={handleClick}/>
        <Sqaure value={squares[8]} onSquareClick={handleClick}/>
      </div>
    </>
  );
}

