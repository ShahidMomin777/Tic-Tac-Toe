import './style.scss';
import Board from './Components/Board';
import Square from './Components/Square';

function App() {
  return (
    <div className="app">
      <div>
        <Square />
        <Board />
      </div>
    </div>
  );
}

export default App;
