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

// DEFAULT PARAMETERS
// the = operator to assign the parameter name a default value of 'stranger'
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
// When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', 
// will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console. 
greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

function makeShoppingList(item1='milk', item2='bread', item3='eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}