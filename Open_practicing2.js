//Returning functions
function question(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + " is design's great websites");
        }
    } else if (job === 'architect') {
        return function(name) {
            console.log(name + " builds great buildings");
        }
    } else {
        return function(name) {
        console.log(name + " does something else");
        }
    }        
}

var questionDesigner = question('designer');
var questionArchitect = question('architect');
var questionDriver = question('driver');

questionDesigner('John');
questionArchitect('Dan');
questionDriver('Chris');
//Error first time "designer not fefined on line 16 because the arguments need to be in single quotes.


//IIFE: Immediatly Invoked Expressions Functions

(function numberGen(goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);


