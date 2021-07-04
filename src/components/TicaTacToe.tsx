import React, { useEffect, useState } from 'react';

interface BoxProps {
  c: string;
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
  grid: string[][];
  setGrid: React.Dispatch<React.SetStateAction<string[][]>>;
  pos: [number, number];
}

const Box = ({ c, pos, turn, setTurn, grid, setGrid }: BoxProps) => {
  return (
    <button
      disabled={!!c}
      onClick={() => {
        if (!c) {
          let _grid = [...grid];
          _grid[pos[0]][pos[1]] = turn;
          setTurn(turn === 'X' ? 'O' : 'X');
          setGrid(_grid);
        }
      }}
      className={`flex items-center justify-center w-20 h-20 bg-transparent border focus:outline-none ${
        !c ? 'active:opacity-50 border-white' : 'border-gray-700'
      }`}
    >
      <p className="text-2xl">{c}</p>
    </button>
  );
};

const TicaTacToe: React.FC = () => {
  const [grid, setGrid] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [turn, setTurn] = useState('X');
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    grid.forEach((row) => {
      let c = row[0];
      if (!!c) {
        let i = 0;
        row.forEach((x) => {
          if (c === x) i++;
        });
        if (i === 3) setIsOver(true);
      }
    });
  }, [grid]);

  useEffect(() => {
    if (isOver) {
      alert(`${turn === 'X' ? 'O' : 'X'} WINS!`);
      setTurn('X');
      setGrid([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]);
      setIsOver(false);
    }
  }, [isOver]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-white bg-black">
      <h1 className="mb-8 text-2xl">{turn}'s Turn</h1>
      <div>
        {grid.map((row, i) => (
          <div key={`row-${i * 2}`} className="flex">
            {row.map((item, j) => (
              <Box
                key={`box-${i * 1}-${j * 1}`}
                {...{ c: item, turn, setTurn, grid, setGrid, pos: [i, j] }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicaTacToe;
