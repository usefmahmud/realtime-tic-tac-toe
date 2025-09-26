import Block from './block';
import type { Turn } from '@/types';

interface BoardProps {
  board: Turn[];
  onBlockClick: (index: number) => void;
}

const Board = ({ board, onBlockClick }: BoardProps) => {
  return (
    <div className='grid w-fit grid-cols-3 gap-6'>
      {Array.from({ length: 9 }).map((_, index) => (
        <Block
          key={index}
          value={board[index]}
          onClick={() => onBlockClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
