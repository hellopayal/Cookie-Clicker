import { useEffect, useState } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import './App.css'

const App = () => {

  const [click, setClick] = useState(0)
  const [emoji, setEmoji] = useState('🍪')

  const handleClick = () => {
    setClick(click + 1);

    if (click % 2 === 0 && click >= 2) {
      setEmoji(emoji + '🍪')
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p>click:{click}</p>
      <p>{emoji}</p>
      {click >= 10 && <p>Victory</p>}
    </div>
  )
}
export default App;