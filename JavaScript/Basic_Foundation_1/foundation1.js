//1-Get 1 to 255- Write a function that returns an array with all the numbers from 1 to 255
function getNumbers() {
  var numbers = [];
  for (var i = 1; i <= 255; i++) {
    numbers.push(i);
  }
  return numbers;
}
var numbers = getNumbers();
console.log(numbers);

//2-Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEvenSum() {
  var sum = 0;
  for (var i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
var evenSum = getEvenSum();
console.log(evenSum);

//3-Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getOddSum() {
  var sum = 0;
  for (var i = 1; i <= 5000; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}
var oddSum = getOddSum();
console.log(oddSum);

//4-Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function getArraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
var arr = [1, 2, 5];
var sum = getArraySum(arr);
console.log(sum); // Output: 8

var arr2 = [-5, 2, 5, 12];
var sum2 = getArraySum(arr2);
console.log(sum2); // Output: 14

//5-Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
var arr = [-3, 3, 5, 7];
var max = findMax(arr);
console.log(max); // Output: 7

//6-Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return avg;
}
var arr = [1, 3, 5, 7, 20];
var avg = findAverage(arr);
console.log(avg); // Output: 7.2

//7-Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function getOddNumbers() {
  var oddNumbers = [];
  for (var i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}
var oddNumbers = getOddNumbers();
console.log(oddNumbers); // Output: [1, 3, 5, ..., 45, 47, 49]

//8-Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function countGreaterThanY(arr, Y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > Y) {
      count++;
    }
  }
  return count;
}
var arr = [1, 3, 5, 7];
var Y = 3;
var count = countGreaterThanY(arr, Y);
console.log(count); // Output: 2

//9-Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function squareArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i];
  }
  return arr;
}
var arr = [1, 5, 10, -2];
var squaredArr = squareArray(arr);
console.log(squaredArr); // Output: [1, 25, 100, 4]

//10-Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function replaceNegativesWithZero(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }
  return arr;
}
var arr = [1, 5, 10, -2];
var updatedArr = replaceNegativesWithZero(arr);
console.log(updatedArr); // Output: [1, 5, 10, 0]

//11-Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function getMaxMinAvg(arr) {
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  var avg = sum / arr.length;
  return [max, min, avg];
}
var arr = [1, 5, 10, -2];
var maxMinAvg = getMaxMinAvg(arr);
console.log(maxMinAvg); // Output: [10, -2, 3.5]

//12-Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapFirstAndLast(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  return arr;
}
var arr = [1, 5, 10, -2];
var swappedArr = swapFirstAndLast(arr);
console.log(swappedArr); // Output: [-2, 5, 10, 1]

//13-Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function replaceNegativesWithString(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }
  return arr;
}
var arr = [-1, -3, 2];
var updatedArr = replaceNegativesWithString(arr);
console.log(updatedArr); // Output: ['Dojo', 'Dojo', 2]
