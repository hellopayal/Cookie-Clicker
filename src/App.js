import { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import './App.css'

function App() {

  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');
  const [image, setImage] = useState('');
  const [flipped, setFlipped] = useState(false);


  const fetchData = async () => {
    const res = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const data = await res.json();
    setQuote(data[0].quote);
    setCharacter(data[0].character);
    setImage(data[0].image)

  };

  const flippedCard = () => {
    setFlipped(!flipped);
  };

  useEffect = (() => {
    fetchData();
  }, []);


  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={flippedCard}>
      <div>

        <h2>"{quote}"</h2>
        <button onClick={fetchData}>New Quote</button>
      </div>
      <div>
        <img src={image} alt={character}></img>
        <h4>{character}</h4>
      </div>
    </div>

  )
}
export default App;
