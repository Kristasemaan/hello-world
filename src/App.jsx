function Sqaure() {
  return <button className="square">1</button>;
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
      <div className="board-row">
        <Sqaure />
        <Sqaure />
        <Sqaure />
      </div>
    </>
  );
}

