import { useState } from 'react';

function Sqaure() {
  const [value, setValue] = useState(null);

  function handleClick(){
    setValue('X');
  }
  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Sqaure/>
        <Sqaure/>
        <Sqaure/>
      </div>
      <div className="board-row">
        <Sqaure/>
        <Sqaure/>
        <Sqaure/>
      </div>
      <div className="board-row">
        <Sqaure/>
        <Sqaure/>
        <Sqaure/>
      </div>
    </>
  );
}

