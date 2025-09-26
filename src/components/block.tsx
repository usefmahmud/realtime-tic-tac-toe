import type { Turn } from '@/types';

interface BlockProps {
  value: Turn;
  onClick: () => void;
}

const Block = ({ value, onClick }: BlockProps) => {
  return (
    <div
      className='pointer-none: flex size-20 items-center justify-center border-2 select-none'
      onClick={onClick}
    >
      {value === 'X' ? <X /> : value === 'O' ? <O /> : null}
    </div>
  );
};

export default Block;

const X = () => {
  return <span className='text-6xl font-bold text-red-700'>x</span>;
};

const O = () => {
  return <span className='text-6xl font-bold text-blue-700'>o</span>;
};
