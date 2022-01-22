const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ){
      return userInput;
    } else {
      console.log('Error')
    }
  };
  console.log(getUserChoice('rock'))
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
        return 'Computer Won!';
        } else {
        return 'User Won!';
        }
    } if(userChoice === 'paper') {
        if(computerChoice === 'scissors' ) {
        return 'Computer Won!';
            } else {
        return 'User Won!';
        }
    } if(userChoice === 'scissors') {
        if(computerChoice === 'rock' ) {
        return 'Computer Won!';
        } else {
        return 'User Won!';
        }
    }
};
console.log(determineWinner('rock','scissors'))
function playGame() {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
}
playGame()