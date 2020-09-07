
export const initialState = {
  gamePoints: {
    player1: 0,
    player2: 0
  }
};

export const setScore = (playerNumber, previousState) => {
  return {
    gamePoints: Object.assign({}, previousState.gamePoints, {
      [`player${playerNumber}`]: previousState.gamePoints[`player${playerNumber}`] + 1
    })
  };
}

export const getGameScore = (gamePoints) => {
  return {
    scoreCall: getScoreDisplay(gamePoints),
    winningPlayer: getWinner(gamePoints)
  };
}


const isDeuce =  (gamePoints)  => gamePoints.player1 >= 3 && gamePoints.player1 === gamePoints.player2;

const playerWithHighestScore = (gamePoints) => {
  if (gamePoints.player1 > gamePoints.player2) {
    return 'player1';
  }
  else {
    return 'player2';
  }
};

const hasWinner = (gamePoints) => {
  if (gamePoints.player2 >= 4 && gamePoints.player2 >= gamePoints.player1 + 2)
    return true;
  return gamePoints.player1 >= 4 && gamePoints.player1 >= gamePoints.player2 + 2;
};

const getWinner = (gamePoints) => {
  return hasWinner(gamePoints) ? playerWithHighestScore(gamePoints) : null;
};

const hasAdvantage = (gamePoints) => {
  if (gamePoints.player2 >= 4 && gamePoints.player2 === gamePoints.player1 + 1)
    return true;
  return gamePoints.player1 >= 4 && gamePoints.player1 === gamePoints.player2 + 1;
};

const translateScore = (score) => {
  switch ((score)) {
    case 3:
      return "40";
    case 2:
      return "30";
    case 1:
      return "15";
    case 0:
      return "love";
    default: throw new Error('Invalid score:' + score);
  }
};

 const getScoreDisplay = (gamePoints) => {

    if (hasWinner(gamePoints)) {
     return `Game, ${playerWithHighestScore(gamePoints)}`;
   }

   if (hasAdvantage(gamePoints)) {
     return `Advantage, ${playerWithHighestScore(gamePoints)}`;
   }

   if (isDeuce(gamePoints))
     return "Deuce";

   if (gamePoints.player1 === gamePoints.player2) {
     return `${translateScore(gamePoints.player1)}-all`;
   }

   return `${translateScore(gamePoints.player1)}-${translateScore(gamePoints.player2)}`;
 }

