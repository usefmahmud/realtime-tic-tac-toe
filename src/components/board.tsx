import Block from './block';
import { useState } from 'react';
import type { Turn } from '@/types';

const Board = () => {
  const [turn, setTurn] = useState<Turn>('X');
  const [board, setBoard] = useState<Turn[]>(Array(9).fill(null));

  const handleClick = (index: number) => {
    if (board[index] !== null) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');

    const winner = checkWinner(newBoard);
    if (winner) {
      setTimeout(() => {
        alert(`${winner} wins!`);
        setBoard(Array(9).fill(null));
        setTurn((prev) => (prev === 'X' ? 'O' : 'X'));
      }, 100);
    }
  };

  const checkWinner = (board: Turn[]) => {
    const winningCombinations = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };
  return (
    <div className='grid w-fit grid-cols-3 gap-6'>
      {Array.from({ length: 9 }).map((_, index) => (
        <Block
          key={index}
          value={board[index]}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
