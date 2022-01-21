const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissor' ){
      return userInput;
    } else {
      console.log('Error')
    }
  };
  console.log(getUserChoice('Paper'))
  function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
      case 0:
        return 'rock';
        break;
      case 1:
        return 'scissors';
        break;
      case 2:
        return 'paper';
        break;
    };
  }
  console.log(getComputerChoice())
  function determineWinner(userChoice,computerChoice) {
    if(userChoice === computerChoice){
      return 'TIE!';
    } if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer Won!'
      } else {
        return 'User Won!';
      }
    } if 
  }