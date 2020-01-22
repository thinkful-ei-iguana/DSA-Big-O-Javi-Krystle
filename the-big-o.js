//question 1.1
//big o => O(1) operations do not depend on input size

//question 1.2
//big o => 0(n) if input b is twice as large as input a. it will take approx. twice as long to process

//QUESTION 2
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else
        return false;
    }
// O(1) => executes once does not depent on input size

//QUESTION 3
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
// O(n * n) two arrays 

//QUESTION 4
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
//0(n) if input b is twice as large as input a. it will take approx. twice as long to process

//Question 5
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
//0(n) if input b is twice as large as input a. it will take approx. twice as long to process

//Question 6
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
// O(n^2) requires 2 levels of looping over an input

//question 7
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

//O(1) looping through and excuting once

//Question 8
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
// O(log(n))  It takes a sorted array of integers (arr) and a item than value (item) as arguments, and returns the number of elements from the array whose value is less than item

//Question 9
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// O(1) no matter the size of your input the algorithm will take the same amount of time complete

//Question 10
function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}
//checks if arguement is even or odd, return true if even false otherwise
// O(1) no matter the size of your input the algorithm will take the same amount of time complete

//Question 11
var hanoi = function (disc, origin, temp, destination) {
    if (disc > 0) {
      hanoi(disc - 1, origin, destination, temp);
      console.log("Moving disc " + disc + " from " + origin + " to " + destination);
      hanoi(disc - 1, temp, origin, destination);
    }
  };
  hanoi(3, "A", "B", "C");
// With 5 discs, after 7 recursive calls, 4 and 5 are on Rod A and 1, 2, 3 are on 
// Rod C

// Moves needed to complete puzzle with:
// 3 discs: 7
// 4 discs: 15
// 5 discs: 31

// Runtime of algorithm: O(n^2)

///////////////////////////////QUESTION 12////////////////////////////////////////
function sheepCount(num){ //O(n) runtime
    for(let i = num; i > 0; i--){
        console.log(`${i}: Another sheep jumps over the fence`);
    }
    console.log('All sheep jumped over the fence');
}

function powerCalc(base, power){ //O(n) runtime
    let x = base;
    for(let i = 1; i < power; i++){
        x *= base;
    }
    return x;
}

function revStr(string){ //O(n) runtime
    let res = '';
    for(let i = string.length -1; i >= 0; i--){
        res = res + string[i];
    }
    return res;
}

function nTri(nth){ //O(n) runtime
    let res = 1;
    inc = 1;
    for(let i = 1; i < nth; i ++){
        inc++;
        res = res + inc;
    }
    return res;
}

function splitter(string, splChar){ //O(n) runtime
    let res = []; 
    let curString = ''; 
    for(let i = 0; i < string.length; i++){ 
        if(string[i] === splChar){ 
            res.push(curString); 
            curString = ''; 
        } else { 
            curString = curString + string[i]; 
        }
    }
    res.push(curString); 
    return res;
}

function fib(num){ //O(n)
    resArr = [];
    for(let i = 0; i < num; i++){
        if(i < 2){
            resArr.push(1);
        } else {
            resArr.push(resArr[i-1] + resArr[i-2]);
        }
    }
    return resArr
}
 
function fact(num){ //O(n) runtime 
    res = 1;
    for(let i = 1; i <= num; i++){
        res = res*i;
    }
    return res;
}

//sheepCount(3);
//console.log(powerCalc(10, 2));
//console.log(powerCalc(10, 3));
//console.log(revStr('hello'))
//console.log(nTri(6));
//console.log(splitter('02/20/2020', '/'))
//console.log(fib(7))
//console.log(fact(7));
//////////////////////////////////////////////////////////////////////////////

//QUESTION 13
// 13)
// 1. O(n)
// 2. O(n)
// 3. 0(n)
// 4. 0(n)
// 5. 0(n)
// 6. O(2^n)

//QUESTION 14
//answers are in question 12
