// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Sam Clements
//  2. Francisco Scala


// 1. "YOU SIGNED... WHO?!"

function Client(name, age, quote){
  this.name = name;
  this.age = age;
  this.quote = quote;
}



// 2. "Here they Come!"

var adamSandler = new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!")
  
var kristinBell = new Client("Kristen Bell", 33, "Do you wanna build a snowman?")

var jimCarrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!")

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";





// 4. "SHOW 'EM OFF!"

var clientArray = [adamSandler, kristinBell, jimCarrey, shooterMcGavin]

for (n = 0; n < clientArray.length; n++  )

{
     console.log("Our Client's name is " + clientArray[n].name + ", is age " + clientArray[n].age + ", and their quote is " + clientArray[n].quote);
}



// ** BONUS **

function showQuote(name, age, quote){
	return = Client.quote;
}

console.log (showQuote)


//  Your Reflection:
//
//What questions did you have while coding? What resources did you find to help you answer them? What concepts are you having trouble with, or did 
//you just figure something out? If so, what?
//I was struggling a bit with constructors but our guide sent us over to Mozilla developer network for some good material and gave us nice 
//instructions. We were not able to do the bonus correctly
//
//Did you learn any new skills or tricks?
// I learnt cmd + / to turn a whole selection into a comment 
//
//
//How confident are you with each of the Learning Competencies?
//I'm ok but i feel like I still have a way to go
//
//
//Which parts of the challenge did you enjoy?
//In this instance, I didn't enjoy a lot because I had a problem with my connection that disrupted the pairing so that frustrated me and made me
//self conscious
//
//Which parts of the challenge did you find tedious?
//I don't feel like it was tedious
//
//
// 
// 
// 
