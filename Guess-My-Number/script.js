'use strict';

const randomNumber = () =>{return Math.trunc(Math.random() *20)+1}

const displayMessage = (message) => { return document.querySelector('.message').textContent = message};

let secretNumber = randomNumber();

let score = 20;

let highScore = 0;



document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  secretNumber = randomNumber();
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
})

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when no input
  if (!guess) {
    displayMessage('No number 😥😥');

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number! 🎉');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //when high score is set
    if(highScore < score){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  
    
  
  }else if(guess !== secretNumber) {
    if(score > 1){
      displayMessage(guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉');
      score--;
      document.querySelector('.score').textContent = score;
    }else{
      displayMessage(' You lost the game 🤣');
      document.querySelector('.score').textContent = 0;
    }
  }
});
