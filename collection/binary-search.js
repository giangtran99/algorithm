"use strict";
exports.__esModule = true;
var bubble_sort_1 = require("./bubble-sort");
var array = [2, 54, 1, 87, 31, 62, 4];
var sortedArray = (0, bubble_sort_1["default"])(array);
// recursive
function RecursiveBinarySearch(array, target, left, right) {
    var mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
        return mid;
    }
    if (array[mid] > target) {
        return RecursiveBinarySearch(array, target, 0, mid - 1);
    }
    if (array[mid] < target) {
        return RecursiveBinarySearch(array, target, mid + 1, right);
    }
    if (left >= right) {
        return;
    }
}
// loop
function BinarySearch(array, target) {
    var left = 0;
    var right = array.length - 1;
    var mid;
    // console.log({left,right})
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid;
        }
        if (array[mid] > target) {
            right = mid - 1;
        }
        if (array[mid] < target) {
            left = mid + 1;
        }
    }
}
// console.log({sortedArray})
console.log(RecursiveBinarySearch(sortedArray, 31, 0, sortedArray.length - 1));
console.log(RecursiveBinarySearch(sortedArray, 87, 0, sortedArray.length - 1));
console.log(RecursiveBinarySearch(sortedArray, 62, 0, sortedArray.length - 1));
console.log(BinarySearch(sortedArray, 31));
