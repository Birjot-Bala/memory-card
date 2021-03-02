import React, { useState } from "react";
import Scoreboard from './components/Scoreboard';
import CardList from './components/CardList';
import images from './images'
import './styles/app.css'


const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [memory, setMemory] = useState([]);

  const handleClick = (e) => {
    const targetId = e.currentTarget.id;;

    if (memory.includes(targetId)) {
      resetGame();
    } else {
      setMemory(oldMemory => [...oldMemory, targetId]);
      setScore(oldScore => oldScore + 1);
    }
  };

  const resetGame = () => {
    if (score > bestScore) {
      setBestScore(score);
    }

    setScore(0);
    setMemory([]);
  };

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />
      <CardList sources={images} onClick={handleClick} />
    </div>
  );
}

export default App;
