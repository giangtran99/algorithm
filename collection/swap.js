"use strict";
exports.__esModule = true;
function swap(aIndex, bIndex, myArray) {
    if (bIndex === aIndex) {
        return;
    }
    myArray[aIndex] = myArray[aIndex] + myArray[bIndex];
    myArray[bIndex] = myArray[aIndex] - myArray[bIndex];
    myArray[aIndex] = myArray[aIndex] - myArray[bIndex];
}
exports["default"] = swap;
