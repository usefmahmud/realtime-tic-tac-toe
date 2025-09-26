import { PlayerX } from './players';

const WinnerAlert = () => {
  return (
    <div className='absolute inset-0 flex h-screen w-screen items-center bg-black/30 backdrop-blur-[2px]'>
      <div className='bg-background-2 flex w-full flex-col items-center justify-center gap-4 py-10'>
        <h1 className='text-secondary text-lg font-bold'>YOU WON!</h1>
        <p className='text-primary-2 flex items-center gap-4 text-3xl font-extrabold'>
          <PlayerX className='fill-primary-2 size-12' /> TAKES THE ROUND
        </p>
        <button className='bg-primary-1 text-background-2 rounded-lg px-4 py-2 font-extrabold shadow-[0_7px_0px_var(--color-primary-1)]'>
          PLAY AGAIN
        </button>
      </div>
    </div>
  );
};

export default WinnerAlert;
