import "./App.css";

const puzzle: (string | null)[][] = [];

const numberOfRows = 10;
const numberOfColumns = 14;

for (let i = 0; i < numberOfRows; i++) {
  const row = [];
  for (let j = 0; j < numberOfColumns; j++) {
    if (Math.random() > 0.4) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      row.push(randomColor);
    } else {
      row.push(null);
    }
  }
  puzzle.push(row);
}

const App = () => (
  <div className="board">
    {puzzle.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((column, columnIndex) => (
          <div
            className="cell"
            key={columnIndex}
            {...(column !== null && { style: { backgroundColor: column } })}
          >
            {column}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default App;
