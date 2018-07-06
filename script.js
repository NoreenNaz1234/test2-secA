let arr = [1,3,4]
console.log(arr[1]);

let price = 430;
price += 100 + 2;
console.log(price);

let start = 3;
let end = 7;

for (let m = 0 ; m < end - start ; m++) {
    console.log(m + 1);
}

function calcSquare(numb) {
    return numb * numb;
}

calcSquare(3);

let fruits = ['mango', 'banana', 'apple'];

for (let i = fruits.length ; i > 0 ; i--) {
    console.log(fruits[i]);
}

let count = 100;
let ans1 = 5;
let ans2 = 9;
let ans3 = 55;

if (ans1 > 100 || ans2 > 100 || ans3 > 100) {
    count + 8;
} else {
    count + 6;
}

console.log(count);

let start2 = 5;
let end2 = 10;

for (let i = start2; i > end2; i++) {
    console.log(i);
}

let isHappy = true;

function toggleValue(val) {
    return !(val);
}

console.log(toggleValue(isHappy));


let a = 2+9;
let b = a;

console.log(a+b);

function calcSum(n1, n2) {
    console.log(n1 + n2);
}

function calcDiff(n1, n2) {
    console.log(n1 - n2);
}

if (calcSum(2,4) > 10) {
    console.log("Oxygen");
} else if (calcDiff(5,2) < 15) {
    console.log("Hydrogen");
} else {
    console.log("Nitrogen");
}


let numb1 = 12;
let numb2 = 15;

function addNumbers (a, b) {
    let result = a+b;
}

console.log("numb1 + numb2 = " + addNumbers(numb1,numb2));


let numb = 2;
numb++;
numb += 70 * 3;

console.log("numb");


let randomNumbers = [6,5,4,3,2];

if (randomNumbers.length > 0) {
    console.log("1");
    if (randomNumbers[3] > 3) {
        console.log("2");
    } else {
        console.log("3");
    }
} else {
    console.log("4");
}


let msg = "";

for (let i = 0 ; i < 4 ; i++) {
    msg += i + " -- ";
}

console.log(msg);

let isOpen = true;
console.log(!!isOpen);

let numbs = [];

for (let i = 0 ; i <= 100 ; i++ ) {
    numbs.push(Math.random());
}

console.log(numbs.length);


let numb3= 22.9;

console.log(parseInt(numb3));


let arr2 = [6,1,5,2,7,6,4];

for (let i = 0 ; i < arr2.length ; i++) {
    if (arr2[i] % 2 === 0) {
        console.log(i);
    }
}


let count2 = 10;

for (let i = 0 ; i <= 10 ; i+=2) {
    console.log(i+i);
}



for (let i = 7 ; i < 20 ; i++ ) {
    for (let j = i ; j < 10 ; j++) {
        console.log(i + j);
    }
}


for (let i = 0 ; i < 5 ; i++ ) {
    for (let j = 1 ; j < 3 ; j++) {
        if (i*j % 2 === 0) {
            console.log("(" + i + ", " + j + ")");
        }
    }
}
