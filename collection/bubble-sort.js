"use strict";
exports.__esModule = true;
var swap_1 = require("./swap");
// let array = [2, 54, 1, 87, 31]
function BubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
        for (var j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                (0, swap_1["default"])(j, j + 1, array);
            }
        }
    }
    return array;
}
// console.log(BubbleSort(array))
exports["default"] = BubbleSort;
