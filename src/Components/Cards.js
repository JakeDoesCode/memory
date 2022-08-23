import React from 'react';
import data from '../data';
import styles from '/home/jake/repos/memory/src/myStyle.module.css';

const Cards = (props) => {
  let movies = data.cards;
  let displayedMovies = [];

  const shuffle = () => {
    let randomIndex = Math.floor(Math.random() * 18);
    if (displayedMovies.length === 12) return;
    if (!displayedMovies.includes(movies[randomIndex])) {
      displayedMovies.push(movies[randomIndex]);
      shuffle();
    } else {
      shuffle();
    }
  };
  shuffle();

  const createMovieCards = displayedMovies.map((element) => {
    return (
      <div className={styles.card} key={element.id}>
        <img
          src={element.pic}
          alt={element.name}
          name={element.name}
          id={element.id}
          onClick={props.handleClick}
        />
      </div>
    );
  });
  return <div className={styles.cardContainer}>{createMovieCards}</div>;
};
export default Cards;
