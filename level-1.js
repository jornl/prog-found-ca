// Question 1:

var myString = "Hello Universe!";

// Question 2:

var person = {
    name: "Peter Parker",
    secret: "Spiderman"
};

// Question 3:

var outOfStock = false;

if (outOfStock === true) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

// Question 4:

var numbersArray = [1,2,3,4];

for (var i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

// Question 5:

for (var i = 15; i <= 25; i++) {
    console.log(i);
}

// Question 6:

for (var i = 15; i <= 25; i++) {
    if (i === 20) {
        console.log(i);
    }
}

// Question 7:

var people = [
    {
        name: "Petter Smart",
        age: 35,
        status: false
    },
    {
        name: 'Donald Duck',
        age: 40,
        status: true
    }
];

for (var i = 0; i < people.length; i++) {
    console.log(people[i].age);
    console.log(people[i].status);
}

// Question 8:

function whatIDontLike(doesntLike) {
    console.log("I don't like " + doesntLike);
}

whatIDontLike("looking for fiberoptic links");

// Question 9:

function subtract(integerOne, integerTwo) {
    console.log(integerOne - integerTwo);
}

// Question 10:

var instantMessagePlatform = [];

function append(platform) {
    instantMessagePlatform.push(platform);
}

append("Teams");