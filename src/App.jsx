function Sqaure({value}) {
  return <button className="square">{value}</button>;
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

