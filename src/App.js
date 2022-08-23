import React, { useState } from 'react';
import style from '/home/jake/repos/memory/src/App.css'
import data from './data';
import Cards from './Components/Cards';
import Header from './Components/Header';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  let movies = data.cards;

  const handleClick = (e) => {
    let selectedMovie = e.target.id;
    if (movies[selectedMovie].selected === true) {
      setScore(0);
      for (let i = 0; i < movies.length; i++) {
        movies[i].selected = false;
      }
    } else if (!movies[selectedMovie].selected === true) {
      setScore(score + 1);
      movies[selectedMovie].selected = true;
      if (score >= highScore) {
        setHighScore(score + 1);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header scoreData={score} highScoreData={highScore} />
      </header>
      <div>
        <Cards handleClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
