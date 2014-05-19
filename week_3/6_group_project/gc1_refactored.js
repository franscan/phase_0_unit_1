/**
I want to test if a function behaves properly and evaluates to true given a specific number value and gives me the feedback. 

The function accepts three parameters: codesnippet (true or false), errormessage (a string) and testNumber (an integer) and provides a feedback of the test result.

If the codesnippet evaluates to true, a message saying the test is passed will be printed out and the function returns true.
Otherwise, it will be printed to the console that the tested function evaluates to false and a custom error message (the input string in the 'errormessage' parameter) will be thrown by the function.
*/
function assert(codesnippet, errorMessage, testNumber) {
    if (codesnippet === true); {
      console.log(testNumber + "true");
      return true;
    } else {
      console.log(testNumber + "false");
      throw "Error: " + errorMessage;
    }
}

/** 
Create two new arrays of numbers for testing. One with even number of elements and one with odd number of elements. 
*/
var oddLengthArray = [1, 2, 3, 4, 5, 5, 7];
var evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7];

/** 
I want a function that returns the sum of all the elements contained in an array of numbers.
*/
function sum(arr) {
    var total = arr[0];
    for (var i = 1; i < arr.length; i++) {
      total += arr[i];
    }
    console.log(total);
}

/** 
I want a function that returns the average (or mean) of all the elements contained in an array of numbers.
*/
function mean(arr) {
    var sum = 0;
    for (var i = 0, l = arr.length; i < l; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

/**
I want a function that returns the median value of all elements contained in an array of numbers.
*/
function median(arr) {
    
    // Sort the array in ascending order
    arr.sort( function(a,b) { return a - b } );
    
    // Find the median value
    var length = arr.length;
    if (length % 2 !== 0){
        return arr[(Math.floor(arr.length / 2))];
    }
    var middle = arr.length / 2;
    return (arr[middle] + arr[middle - 1]) / 2;
}






//What parts of your strategy worked? What problems did you face?
//For this exercise I paired and we both had english as a second language so it was a bit of a language barrier but we made do, my counterpart was
// especially patient in explainig anything I didn't get as many times as needded.
//
//
//What questions did you have while coding? What resources did you find to help you answer them?
//A lot, since this was a group thing I worked on it with my knowledge at its weakest and I was really lost. However, like I said before, my pair
//came through and gave me all the help I needed
//
//
//What concepts are you having trouble with, or did you just figure something out? If so, what?
//I was weak in functions and loops coming into this exercise but since I re read and did codecademy stuff and I feel more comfortable
//
//
//Did you learn any new skills or tricks?
//I this instance I was just trying to keep up.
//
//How confident are you with each of the Learning Competencies?
//I think I need a bit more regarding the tests. Those in the group that had to run the tests e-mailed saying everything ran smoothly but I can't
// get it to work.
//
//
//
//Which parts of the challenge did you enjoy? Which parts of the challenge did you find tedious?
//Unfortunately I had to pair after midnight due to time zones and I wasn't strong on the knowledge necessary so I didn't have a lot of fun 
//on this one. That doesn't mean it was tedious, more like a bit uncomfortable since I was working with someone and my contribution wasn't very
//considerable
//
//
//What was this experience like? Was your group successful in passing the tests?
//It wasn't my best so far. Like I said, I went in a bit lacking and the division of work didn't help. I guess part of the challenge was to exercise
//performing tasks out of context but it made me a bit even more lost. Like I pointed before, I can't even get to run the test properly and I'm not 
//or if I'm supposed to worry about that since apparently the other guys were able to run it okay. I think it is something to check fast in tutoring 
//or office hours
//
//
//What did you learn about writing user stories, pseudocoding, writing code, refactoring, etc.?
//I was in the refactoring part of the challenge and I don't feel in this instance I built a lot of skills on it. I took much more away from
//challenges 2, 3 and 4.
//
//
//
//



