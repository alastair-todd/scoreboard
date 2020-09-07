import React, { Component } from 'react';
import { initialState, getGameScore, setScore } from '../scoreboard';

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleClick(playerNumber) {
    this.setState(setScore(playerNumber, this.state));
  }

  render() {
    return (
      <div>
        <h1>Tennis Scoreboard</h1>
        <h2 id="score">Score: { getGameScore((this.state || initialState).gamePoints).scoreCall }</h2>
        <button className="player1-scores" type="button" onClick={() => this.handleClick(1)}>
          Player 1 scores
        </button>
        <button className="player2-scores" type="button" onClick={() => this.handleClick(2)}>
          Player 2 scores
        </button>
      </div>
    );
  };
}

export default Scoreboard;
