import React from 'react';

const Header = (props) => {
  const { scoreData, highScoreData } = props;

  return (
    <div>
      <h1>Movie Memory</h1>
      <h2>
        Current Score: {scoreData}
        <br /> High Score: {highScoreData}
      </h2>
    </div>
  );
};

export default Header;
