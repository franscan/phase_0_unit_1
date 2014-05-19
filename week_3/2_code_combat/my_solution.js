// I worked on this challenge by myself! weeeee
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
// this.moveDown();
// this.moveDown();
// this.moveRight();
// this.moveRight();
// this.moveUp();




 
// Rescue mission
//existing code: 2 down, 2 right, 1 up
//ADD
//delete1right
//add
// 1up
// 2right
// 1down
//attack
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();


 // Grab the mushroom
//existing code: 2 up, attack
//ADD 
//between the 2 ups:
// 1 right, 1 left
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();


// Drink me
//existing code: nothing
// ADD 
//attack, 1 right, 1 down, 1 up, 1 right, attack
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();


// Taunt the guards
//existing code
// Delete the "//" in front of each line below.
//this.moveRight();
//this.say("Hey there!");
//this.moveLeft();
//this.moveLeft();
//this.say("Attack!");
// Now get Phoebe to follow through the dungeon.
//this.moveRight();
//this.say("Follow me.");
//ADD 2 right, 1 up, 1 right, 1 down, 1 right, call trolls, 1 left, say attack twice, 1 follow me, 1 up, right, 1up
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.moveDown();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.say("Attack!");
this.say("Attack!");
this.say("Follow me.");
this.moveRight();
this.moveUp();
this.moveRight();


// It's a trap
//existing code: none
//ADD
// 2down, say you are a baby, 2up
this.moveDown();
this.moveDown();
this.say("You are a big baby");
this.moveUp();
this.moveUp();



// Break the prison
//if(name === "William")
//    return true;
//if(name === "Krogg")
//   return false;  // <-- Start here; Krogg is not a friend!
//return true;
//ADD 
//gort, brack, grul'thock as false values after krogg comma separated.
//REFACTOR
// also add Phoebe, Gordon, Lucas, Marcus, Robert as true values.
//REFACTOR
//add a return value for each name individually
//REFACTOR: sneaky ogre!!!!!
//REFACTOR: case sensitive
if(name === "William")
    return true;
if(name === "Krogg")
    return false;
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Robert")
    return true;
if(name === "Marcus")
    return false;
if(name === "MARCUS")
    return false;
if(name === "Gordon")
    return true;

return true;



// Taunt
//existing code: none
//ADD
//4xthis.say method
this.say("You fight like a dairy farmer.");
this.say("I got this scar on my face during a mighty struggle!");
this.say("Soon you'll be wearing my sword like a shish kebab!");
this.say("Look! A three headed monkey");


// Cowardly Taunt
//existing code
//this.moveXY(50, 16);
//this.moveXY(63, 20);
//this.moveXY(70, 10);  //This is a safe spot.
//this.say("I can lure them in here.");
//ADD
// 1lure, move(safecoord), move(27,38), lure, move(safecoord), move(64,52), lure, move(safecoord)
//REFACTOR
// move(46,19), 1lure, move(safecoord), move(65,45), lure, move(safecoord), move(41,41), lure, move(safecoord)
//REFACTOR
// move(46,19), 1lure, move(safecoord). Previous code finished this mission, this saves code.
this.moveXY(46, 19);  
this.say("You have the manners of a beggar.");
this.moveXY(70, 10);  



// Commanding followers
//existing code
//this.moveXY(49, 66);
//this.moveXY(60, 63);
//this.moveXY(75, 63);
//this.say("Hail, friends!");/
//ADD 1 follow, 1 attack, 1 move safe coord
//REFACTOR: 1 follow, 1 move (69,53), 1 attack, 1 move to safety
//REFACTOR: move closer
this.say("Follow me, friends!");
this.moveXY(61, 40);
this.say("Attack the ogres!");
this.moveXY(49, 66);



// Mobile artillery
//this.moveXY(30, 26);  // Move into range
//this.attackXY(46, 5);  // Shoot once in the middle of the ogres
//ADD repeat process twice keeping away enough from second group to attack. Coords 68'33 and 45'45 for moving. Coords 
//REFACTOR: big ogre needs 2 shots.
this.moveXY(68, 33);  
this.attackXY(69, 56);
this.attackXY(69, 46);
this.moveXY(45, 35);  
this.attackXY(48, 65);
this.attackXY(48, 55);

 
//What is this referring to? Think programming-wise rather than in the terms of the game.
//At this point, I don't fully understand 'this'. I have read it is a reference to the object that owns the function where 'this' is being used,
//which seems to be a fancy way of saying that 'this' is a replacement for the object name with which's functions I'm tinkering but there has to 
//be more than to it.

//What does the () do in JavaScript?
//The () in Javascript have several different uses. When declaring a function they will be used to enclose that function's arguments and in a loop 
// they enclose that loops parameters. Also, when invoking a funtion they are needed in order to execute it, even if there are no parameters within
// the parentheses. 

//What is the point of the semicolons?
//Semicolons are used in Javascript to separate statements that are in the same line of code. However, this a very general concept and the actual
//usage of semi colons is much more complex. For example, there are some cases in which statements with a line break could be parsed together so 
// there is still need for a semicolon, and cases where even if you don't have a line break, a semicolon isn't necessary. Such is the case when 
// after the statement to be semicolonised you find a closing curly bracket.
 
 
 
// Reflection:
// Write your reflection here.

//What parts of your strategy worked? What problems did you face?
//At first I didn't pay attention at refactoring which was not a good thing. 
//
//
//What questions did you have while coding? What resources did you find to help you answer them?
//I had doubts about 'this' and what it actually is, and there is a lot of material out there but I didn't get it outright. I need to separate
//some time to look into it further
//
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//I had trouble in break the prison with the lying ogre since at first I didn't understand if it was a glitch or something and then it took me
//another while to figure out it was case sensitive.
//
//Did you learn any new skills or tricks?
//It was a good practice in pseudocode and refactoring but I don't feel like I understood exactly what the code I was inputing meant until I did
// a bit more reading on 'this'
//
//How confident are you with each of the Learning Competencies?
//I think I need more reading on 'this' and ().
//
//
//Which parts of the challenge did you enjoy?
//I quite enjoyed the challenge as a whole, it was a game was it not????
//
//
//Which parts of the challenge did you find tedious?
//
//
//



