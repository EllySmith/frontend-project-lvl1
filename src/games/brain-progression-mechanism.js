import gameMechanism from '../index.js';

import getRandomNumber from '../randomnumber.js';

const fifthGameArr = () => {
  const array = [];

  const randomProgressionStep = getRandomNumber(3, 10);
  const randomProgression = [];
  let i = getRandomNumber(1, 6);
  randomProgression.push(i);
  let numberCount = 0;

  while (numberCount < 10) {
    i += randomProgressionStep;
    numberCount += 1;
    randomProgression.push(i);
  }
  const hiddenNumberIndex = Math.floor(Math.random() * randomProgression.length);
  const answer = randomProgression[hiddenNumberIndex];
  randomProgression[hiddenNumberIndex] = '..';

  let questionSequence = '';
  for (const number of randomProgression) {
    questionSequence += ` ${number}`;
  }
  const fifthGameQuestion = `Question:${questionSequence}`;
  array.push(fifthGameQuestion);
  array.push(answer);

  return array;
};

const firstRound = fifthGameArr(1);
const secondRound = fifthGameArr(2);
const thirdRound = fifthGameArr(3);
const questions = [firstRound[0], secondRound[0], thirdRound[0]];
const answers = [firstRound[1], secondRound[1], thirdRound[1]];

const fifthGame = () => {
  gameMechanism('What number is missing in the progression?', questions, answers);
};

export default fifthGame;
