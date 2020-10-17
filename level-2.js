// Question 1:

for (var i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }    
}

// Question 2:

var innerFunction = function iAmFunction() {
    console.log("I am a function");
}
/** 
 * The above could be written without a function name, using an anonymous function. Like this:
 * var innerFunction = function () {}
 */

function outerFunction(argument) {
    argument();
}

outerFunction(innerFunction);