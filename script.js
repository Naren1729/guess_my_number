'use strict';

// document.querySelector('.message');

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number!';

// document.querySelector('.number').textContent = 23;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 20;
// console.log(document.querySelector('.guess').value);

let secretnumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
  
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input
  if (!guess) {
    
    displaymessage('No  Number');
  }
  //when there is input
  else if (guess === secretnumber) {
    displaymessage('Correct Number 👌');
    document.querySelector('.number').textContent = secretnumber;
    //
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';


    if (score > highscore)
    {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    
  }
    
  else if (guess !== secretnumber)
  {
    if (score > 0) {
      document.querySelector('.message').textContent = guess > secretnumber ? 'Too High!' : 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      
      displaymessage('😢You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
    }
  //when input is wrong
  // else if (guess > secretnumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too High!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😢You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretnumber) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😢You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20)+1;
  displaymessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';


  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
