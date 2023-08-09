import './App.css';
import { Hole } from './Components/Hole';

function App() {
  return (
    <div className="App">
      <header>
        <h1>WHAC-A-MOLE!</h1>
      </header>
      <div className="game">
        {Array(6)
          .fill(true)
          .map((item, index) => (
            <Hole key={index} id={index + 1} />
          ))}
      </div>
    </div>
  );
}

export default App;
