import { useState, useEffect } from 'react';
import './App.css';
import { Hole } from './Components/Hole';
import axios from 'axios';

export const App = () => {
  const [dogFacts, setDogFacts] = useState([]);

  const url = 'https://dog-api.kinduff.com/api/facts?number=3';

  useEffect(() => {
    const fetchDogFacts = async () => {
      const res = await axios.get(url);
      setDogFacts(res.data.facts);
    };

    fetchDogFacts();
  }, [url]);

  const Holes = Array(6)
    .fill(true)
    .map((item, index) => <Hole key={index} id={index + 1} />);

  if (!dogFacts) {
    return <div>Loading...</div>;
  }

  const dogFact = dogFacts.map((dogFact) => <li>{dogFact}</li>);

  return (
    <div className="App">
      <header>
        <h1>WHAC-A-MOLE!</h1>
      </header>
      <div className="game">{Holes}</div>
      <div className="dog-facts-container">
        <ul>{dogFact}</ul>
      </div>
    </div>
  );
};
