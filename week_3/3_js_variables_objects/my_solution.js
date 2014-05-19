// I paired with Tanner Blummer on this challenge.




// Pseudocode
//define a variable assigning a name and inputing a value on the second term
//define a string variable named password
//define a variable named allowedIn with a boolean value
// define a variable called members
// 
// 
// 


// __________________________________________
// Write your code below.

//Code
var secretNumber = 5;
var secretNumber = 7;
var password = "This is my password";
var password = "just open the door";
var allowedIn = 5<9;
var allowedIn = 5>9;
var members = "There are two members";
members = new Array();
members = new Array("John");
members[3] = "Mary";



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 
//var secretNumber = 5;
var secretNumber = 7;
//var password = "This is my password";
var password = "just open the door";
//var allowedIn = 5<9;
var allowedIn = 5>9;
//var members = "There are two members";
//members = new Array();
//members = new Array("John");
//members[3] = "Mary";
members = ["John", 3, 4,"Mary"];


// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
//What parts of your strategy worked? What problems did you face?
// The strategy worked as a whole, we organized the challenge and went orderly through pseudocode, code and refactoring. I feel like it is strange
// to talk about strategies, I feel like I generally approach challenges in the same way and mostly under the directions of the challenge itself
//
//What questions did you have while coding? What resources did you find to help you answer them?
//Not a lot really. Between what I had read on Ruby and Javascript, plus Tanner's guidance, this was a pretty straightforward challenge
//
//
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//I don't feel like I encountered any really troublesome concepts.
//
//
//Did you learn any new skills or tricks?
// mmmmmm I don't think so. Each time I type 'no' or 'I don't think so' I feel like I'm failing to profit from the challenge but in general it
//doesn't feel like tricks or however you might call. It feels more like I'm taking in the learning competencies in varying degrees.
//
//How confident are you with each of the Learning Competencies?
// I feel quite confident but I'm not letting my guard down, there's a lot more to learn for sure!
//
//
//Which parts of the challenge did you enjoy?
//I really enjoyed the pairing in itself and also when refactoring we spent a little bit of time trying to see if we could come up with a statement
//that defined values 0 and 3 of the array without having to define 1 and 2. No luck for now
//
//Which parts of the challenge did you find tedious?
//
//
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

