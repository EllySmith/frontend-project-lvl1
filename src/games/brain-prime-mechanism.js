import runGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const isPrime = (number) => {
  if (number === 1) {
    return true;
  }
  let primeOrNot = true;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      primeOrNot = false;
      break;
    }
  }
  return primeOrNot;
};

const getRoundData = () => {
  const randomNumber = getRandomNumber();
  const question = `Question: ${randomNumber}`;

  const realAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, realAnswer];
};

const startPrimeGame = () => {
  runGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRoundData);
};

export default startPrimeGame;
