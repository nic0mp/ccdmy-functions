// FUNCTION DECLARATIONS
function getReminder() {
    console.log('Water the plants.')
  }
  
  function greetInSpanish() {
    console.log('Buenas Tardes.')
  }

// FUNCTION CALLS
function sayThanks(){
    console.log('Thank you for your purchase! We appreciate your business.')
  }
  sayThanks()
  sayThanks()
  sayThanks()

// ARGUMENTS AND PARAMETERS
// Add a parameter called name to the function declaration for sayThanks().
// With name as a parameter, it can be used as a variable in the function body of sayThanks().
function sayThanks(name) {
    console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
  }
  sayThanks('Cole')
// ^^Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.