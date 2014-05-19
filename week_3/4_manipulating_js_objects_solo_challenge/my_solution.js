// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
}
/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
Create an empty object called adam

2. Give adam a name property with the value "Adam".
Add name property with "Adam" value to adam object

3. Add a spouse property to terah and assign it the value of adam.


4. Change the value of the terah weight property to 125.
Remove 5 pounds from weight property value

5. Remove the eyeColor property from terah.


6. Add a spouse property to adam and assign it the value of terah.


7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
Create empty object called theChildren
Add property children to terah with value the Children

8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
Create carsonObject
Add name property to carsonObject with value "Carson"
Add carson property to theChildren object with value carsonObject

9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
Create carterObject
Add name property to carterObject with value "Carter"
Add carter property to theChildren object with value carterObject

10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
Create coltonObject
Add name property to coltonObject with value "Colton"
Add colton property to theChildren object with value coltonObject

11. Add a children property to adam and assign it the value of terah children.


*/

// __________________________________________
// Write your code below.
var adam = {}

adam.name = "Adam"

terah.spouse = adam

terah.weight = terah.weight - 5

terah.eyeColor = undefined

adam.spouse = terah

var theChildren = {}
terah.children = theChildren

var carsonObject = {}
carsonObject.name = "Carson"
theChildren.carson = carsonObject

var carterObject = {}
carterObject.name = "Carter"
theChildren.carter = carterObject

var coltonObject = {}
coltonObject.name = "Colton"
theChildren.colton = coltonObject

adam.children = theChildren



//REFACTOR
//your code
var adam = {};

adam.name = "Adam";

terah.spouse = adam;

terah.weight = terah.weight - 5;

terah.eyeColor = undefined;

adam.spouse = terah;

var theChildren = {};
terah.children = theChildren;

var carsonObject = {
  name:"Carson",
};
theChildren.carson = carsonObject;

var carterObject = {
  name:"Carter",
};
theChildren.carter = carterObject;

var coltonObject = {
  name:"Colton",
};
theChildren.colton = coltonObject;

adam.children = theChildren;

// __________________________________________
// Reflection: Use the reflection guidelines
// 
// /*What parts of your strategy worked? What problems did you face?
//I paid special attention to the pseudocode and dedicated not only to get right what I had to do, but in what order it should be done,
// considering that the way the user stories were written did not follow the same logical path my code had to.
//
//What questions did you have while coding? What resources did you find to help you answer them?
//I just used the "Back to Basics: JavaScript Object Syntax" provided in the instructions to double check where comas and semi colons had to go.
//
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//I had a bit of trouble with the user stories, they were a bit of a mess to me but I don't know if that's just because I'm a begginner or if 
// it was done on purpose to get us to untangle them. An example of this is that i still don't know if I was supposed to reference the objects 
//I created for each of the children or their names. Considering all the tests passed, I decided to move on and get more done, especially 
//considering that I have faith I could reference their names if I had to.
//
//Did you learn any new skills or tricks?
//No tricks, I think the challenge just really helped cement what objects are and how to tinker with them. Of course I'm sure there a another ton
//of ways to tinker, but I mean the basics, the nature of it.
//
//How confident are you with each of the Learning Competencies?
//Pretty confident! My only doubt was what I mentioned before about instructions not being totally clear and not being sure whether I assigned to the property what i was supposed to.
//
//Which parts of the challenge did you enjoy?
//I enjoyed all of it, as a matter of fact I refactored just for the hell of it!
//
//Which parts of the challenge did you find tedious?
// The reflection :) I'm a bit lazy with reflections, but I know they are important, so no complaints!
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
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)
