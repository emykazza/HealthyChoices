var years = [1980, 1984, 1988, 1994, 1999, 2001, 2003];
/*
function ofAge(arr, fn) {
    arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//the el will be current position of array.  fn(arr[i])
function calcAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 21;
}

function heartRate(el) {
   if (el >= 18 && el <= 81) {
      return Math.round(206.9 - (.67 * el)); 
   } else {
       return -1;
   }
    
}

var ages = ofAge(years, calcAge);
console.log(ages);
var fullAge = ofAge(ages, isFullAge);
console.log(fullAge);
var exercise = ofAge(ages, heartRate);
console.log(exercise);
*/

function ageCalc(arr, fn) {
    arrRes = [];
    for (var i = 0; i <= arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculation(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}


var ages = ageCalc(years, calculation);
console.log(ages);

var usFull = ageCalc(ages, isFullAge.bind(this, 20));
console.log(usFull);