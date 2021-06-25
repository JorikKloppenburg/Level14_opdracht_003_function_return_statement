//Checking if a number is big
const biggerThan100 = function (number1) {
    const numberIsToBig = number1 > 100;
    return numberIsToBig;
};

const result = biggerThan100(101);
console.log(result);

//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
// >> This is a function that's only produce something because i'ts looking for a number bigger than 100

//Bouncer at a club
const enterTheClub = function (maxnumber, currentnumber, age) {
    if(age < 21){
        return "this is a club for adults";
    }
    else if(currentnumber < maxnumber){
        return "come in";
    }
        return "it's too busy now, come back later";
};

const result2 = enterTheClub(100, 100, 22);
console.log(result2);

//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
// >> This is a function that does both.

//Calculating the average
const average = function (number1, number2, number3, number4, number5) {
    const isAverage = Math.round((number1 + number2 + number3 + number4 + number5) / 5);
    return isAverage;
};

const result3 = average(101, 102, 103, 104, 150);
console.log(result3);

//Now think about the categories of functions we discussed: functions that do something and functions that produce something. What kind of function is this?
// >> This is a function that produce a average
