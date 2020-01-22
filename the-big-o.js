//question 1.1
function playmate(breeds){
    if(breeds.includes(5)){
        return 'i do, be happy to bring him over'
    }

}
//big o => O(1) operations do not depend on input size
let breeds = [1,2,3,4,5,6,7]
//question 1.2
function playmate(breeds){
    for(let i = 0; i < breeds.length; i++){
        let samebreed = 1
        if(breeds[i] === samebreed){
            return samebreed
        }
    }

}
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