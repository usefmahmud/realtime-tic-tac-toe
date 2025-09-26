import { PlayerX, PlayerO } from './players';
import type { Turn } from '@/types';

interface WinnerAlertProps {
  winner: Turn | null;
  onPlayAgain: () => void;
}

const WinnerAlert = ({ winner, onPlayAgain }: WinnerAlertProps) => {
  if (!winner) return null;

  const isPlayerX = winner === 'X';
  const playerIcon = isPlayerX ? (
    <PlayerX className='fill-primary-2 size-12' />
  ) : (
    <PlayerO className='fill-primary-1 size-12' />
  );

  const textColor = isPlayerX ? 'text-primary-2' : 'text-primary-1';
  const buttonColor = isPlayerX ? 'bg-primary-1' : 'bg-primary-2';
  const buttonTextColor = isPlayerX ? 'text-background-2' : 'text-background-2';

  return (
    <div className='absolute inset-0 flex h-screen w-screen items-center bg-black/30 backdrop-blur-[2px]'>
      <div className='bg-background-2 flex w-full flex-col items-center justify-center gap-4 py-10'>
        <h1 className='text-secondary text-lg font-bold'>YOU WON!</h1>
        <p
          className={`${textColor} flex items-center gap-4 text-3xl font-extrabold`}
        >
          {playerIcon} TAKES THE ROUND
        </p>
        <button
          className={`${buttonColor} ${buttonTextColor} cursor-pointer rounded-lg px-4 py-2 font-extrabold shadow-[0_7px_0px_var(--color-primary-1)]`}
          onClick={onPlayAgain}
        >
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default WinnerAlert;
