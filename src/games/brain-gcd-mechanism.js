import readlineSync from 'readline-sync';

import * as dialog from './../cli.js';

import { name } from './../cli.js';

const thirdGame = () => {
  const thirdGameArr = [];

  const thirdGameIntroduction = 'Find the greatest common divisor of given numbers.';
  thirdGameArr.push(thirdGameIntroduction);

  const randomNumber1 = Math.floor(Math.random() * 40 + 1);
  const randomNumber2 = Math.floor(Math.random() * 40 + 1);

  const thirdGameQuestion = `Question: ${randomNumber1} ${randomNumber2}`;
  thirdGameArr.push(thirdGameQuestion);

  const denominatorsOne = [];

  for (let i = 0; i <= randomNumber1; i++) {
    if (randomNumber1 % i === 0) {
      denominatorsOne.push(i);
    }

    else {
      continue;
    }
  }

  const denominatorsTwo = [];

  for (let i = 0; i <= randomNumber2; i++) {
    if (randomNumber2 % i === 0) {
      denominatorsTwo.push(i);
    } else {
      continue;
    }
  }

  const commonDenominators = [];

  for (const denominator of denominatorsOne) {
    if (denominatorsTwo.includes(denominator)) {
      commonDenominators.push(denominator);
    }
  }

  const thirdGameAnswer = commonDenominators[commonDenominators.length - 1];
  thirdGameArr.push(thirdGameAnswer);
  return thirdGameArr;
};

let game = thirdGame(1);
console.log(game[0]);
console.log(game[1]);

const answer = readlineSync.question('Your answer: ');
if (answer === game[2].toString()) {
  console.log('Correct!');
  let game = thirdGame(2);
  console.log(game[1]);  
  const answer = readlineSync.question('Your answer: ');
    if (answer === game[2].toString()) {
      let game = thirdGame(2);
      console.log(game[1]);  
      const answer = readlineSync.question('Your answer: ');
      if (answer === game[2].toString()) {
      console.log(`Correct!\nCongratulations, ${name}!`);
      }
      else {
        console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
        
      }
    }
    else {
      console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
      
    }
  }
  else {
    console.log(`Wrong!\n"${answer}" is wrong answer ;(. Correct answer was '${game[2]}'\nLet's try again, ${name}!`);
    }

export { thirdGame };