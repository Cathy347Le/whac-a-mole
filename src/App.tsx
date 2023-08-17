import './App.css';
import { Hole } from './Components/Hole';

export const App = () => {
  const Holes = Array(6)
    .fill(true)
    .map((item, index) => <Hole key={index} id={index + 1} />);
  return (
    <div className="App">
      <header>
        <h1>WHAC-A-MOLE!</h1>
      </header>
      <div className="game">{Holes}</div>
    </div>
  );
};
