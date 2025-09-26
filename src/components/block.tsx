import type { Turn } from '@/types';
import { PlayerX, PlayerO } from './players';

interface BlockProps {
  value: Turn;
  onClick: () => void;
}

const Block = ({ value, onClick }: BlockProps) => {
  return (
    <div
      className='pointer-none bg-background-2 flex size-26 cursor-pointer items-center justify-center rounded-lg shadow-[0_10px_0px_var(--color-background-3)] select-none'
      onClick={onClick}
    >
      {value === 'X' ? <PlayerX /> : value === 'O' ? <PlayerO /> : null}
    </div>
  );
};

export default Block;
