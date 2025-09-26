import Board from './components/board';
import WinnerAlert from './components/winner-alert';

function App() {
  return (
    <div className='bg-background flex h-screen items-center justify-center p-20'>
      {/* <WinnerAlert /> */}
      <Board />
    </div>
  );
}

export default App;
