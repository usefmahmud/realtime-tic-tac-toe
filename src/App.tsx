import Board from './components/board';
import WinnerAlert from './components/winner-alert';
import { useState } from 'react';
import type { Turn } from './types';

function App() {
  const [turn, setTurn] = useState<Turn>('X');
  const [board, setBoard] = useState<Turn[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<Turn | null>(null);
  const [showWinnerAlert, setShowWinnerAlert] = useState(false);

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

  const handleClick = (index: number) => {
    if (board[index] !== null || showWinnerAlert) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    setTurn(turn === 'X' ? 'O' : 'X');

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setShowWinnerAlert(true);
    }
  };

  const handlePlayAgain = () => {
    setBoard(Array(9).fill(null));
    setTurn('X');
    setWinner(null);
    setShowWinnerAlert(false);
  };

  return (
    <div className='bg-background flex h-screen items-center justify-center p-20'>
      {showWinnerAlert && (
        <WinnerAlert winner={winner} onPlayAgain={handlePlayAgain} />
      )}
      <Board board={board} onBlockClick={handleClick} />
    </div>
  );
}

export default App;
