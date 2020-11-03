// Function for computerPlay. This picks a random weapon for the computer
    function computerPlay() {
        const weapon = ['Rock', 'Paper', 'Scissors']
        const random = Math.floor(Math.random() * 3)
  
        return weapon[random]
      }
  
// playRound Function for playerSelection and computerSelection.
// Give each weapon a variable      
      function playRound(playerSelection, computerSelection) {
        const rock = 'rock'
        const paper = 'paper'
        const scissors = 'scissors'
  
// Tie Game  
        if (playerSelection === computerSelection) {
          console.log('Tie, try again')
          return null
        }

// You Win
        if (playerSelection === rock && computerSelection === scissors) {
            console.log('You Win! Rock beats Scissors')
            return true
        } else if (playerSelection === paper && computerSelection === rock) {
          console.log('You Win! Paper beats Scissors')
          return true
        } else if (playerSelection === scissors && computerSelection === paper) {
            console.log('You Win!, Scissors beat Paper')
            return true

// You Lose            
        } else if (playerSelection === paper && computerSelection === scissors) {
          console.log('You Lose! Scissors beat Paper')
          return false
        } else if (playerSelection === rock && computerSelection === paper) {
            console.log('You Lose! Paper beats Rock')
            return false  
        } else if (playerSelection === scissors && computerSelection === rock) {
          console.log('You Lose! Rock beats scissors')
          return false

// Else incase of error          
        } else {
          console.log('Error, Something is wrong')
          return null
        }
      }


// Game, both computer and player variables start at 0   
      function game() {
        let computerScore = 0
        let playerScore = 0

    // Increase score if they win a round (based on true or false if statements above)  
    // Loops for 5 rounds.
        for (let i = 0; i < 5; i++) {
          const  playerSelection = prompt('Choose your weapon: Rzock, Paper or Scissors?')
          const computerSelection = computerPlay()

    // Result based on playerSelection vs ComputerSelection. 
    // Make playerSelection to LowerCase / case insensitive  
          const result = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase())

    // If the result = true, Player wins. If the result is False, computer wins.
    // Increase the score variables by 1 using ++
          switch (result) {
            case true:
              playerScore++
              break
            case false:
              computerScore++
              break
            default:
              break
          }
        }

    // After 5 rounds have been played, console.log the final scores.
        console.log('!!!')
        console.log('You:', playerScore, 'Computer:', computerScore)

    // If the computer score is higher than player score, then computer wins.
        if (computerScore > playerScore) {
          console.log('Computer Wins!')
        } else if (playerScore > computerScore) {
          console.log('Congratulations! you win')
        } else {
          console.log('It\'s a Tie!, no one wins')
        }
        
        console.log('!!!')
      }

    // Run the game function..
      game()
  